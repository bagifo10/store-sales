import { useState, useRef } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, doc, getDoc, query, where, getDocs, updateDoc, increment } from 'firebase/firestore';
import { ChevronLeft, CheckCircle } from 'lucide-react';
import { formatPrice } from '../utils/formatPrice';

// === CONFIGURACIÓN DE TU TIENDA ===
const CONFIG_TELEFONO = "5491100000000"; // PONE TU NUMERO DE WHATSAPP ACÁ
const CONFIG_ENVIOS = [
    { id: 'retiro', nombre: 'Retiro en local', precio: 0 },
    { id: 'domicilio', nombre: 'Envío a domicilio (Solo en Tandil)', precio: 5000 }
];
// ==================================

const Checkout = ({ items, total, onBack, onClose }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [shipping, setShipping] = useState(CONFIG_ENVIOS[0]);
    const [paymentMethod, setPaymentMethod] = useState('Efectivo');
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    
    // Promo Codes state
    const [promoCodeInput, setPromoCodeInput] = useState('');
    const [appliedPromo, setAppliedPromo] = useState(null);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [promoError, setPromoError] = useState('');
    const [validatingPromo, setValidatingPromo] = useState(false);

    const lastSubmitRef = useRef(0);

    const finalTotal = Math.max(0, total - discountAmount) + shipping.precio;

    const handleApplyPromo = async () => {
        setPromoError('');
        if (!promoCodeInput.trim()) return;
        setValidatingPromo(true);
        
        try {
            const q = query(collection(db, 'promo_codes'), where('code', '==', promoCodeInput.trim().toUpperCase()));
            const snap = await getDocs(q);
            if (snap.empty) {
                setPromoError('Código inválido o no existe.');
                setAppliedPromo(null);
                setDiscountAmount(0);
                return;
            }
            
            const promoDoc = snap.docs[0];
            const promo = { id: promoDoc.id, ...promoDoc.data() };
            
            if (!promo.isActive) {
                setPromoError('Este código ya no está activo.');
                return;
            }
            if (promo.usageLimit > 0 && promo.timesUsed >= promo.usageLimit) {
                setPromoError('Este código ha superado el límite de usos permitidos.');
                return;
            }
            
            let calculatedDiscount = 0;
            
            if (promo.conditionType === 'all') {
                calculatedDiscount = promo.discountType === 'percentage' ? (total * promo.discountValue / 100) : promo.discountValue;
            } else if (promo.conditionType === 'min_amount') {
                if (total < promo.conditionValue) {
                    setPromoError(`La compra debe ser de al menos $${formatPrice(promo.conditionValue)} para usar este código.`);
                    return;
                }
                calculatedDiscount = promo.discountType === 'percentage' ? (total * promo.discountValue / 100) : promo.discountValue;
            } else if (promo.conditionType === 'category') {
                const categoryItemsSubtotal = items
                    .filter(item => item.category === promo.conditionValue)
                    .reduce((acc, item) => acc + (item.price * item.quantity), 0);
                    
                if (categoryItemsSubtotal === 0) {
                    setPromoError(`Este código solo aplica para productos de la categoría: ${promo.conditionValue}.`);
                    return;
                }
                calculatedDiscount = promo.discountType === 'percentage' ? (categoryItemsSubtotal * promo.discountValue / 100) : Math.min(promo.discountValue, categoryItemsSubtotal);
            }
            
            if (promo.discountType === 'fixed' && promo.conditionType !== 'category') {
                calculatedDiscount = Math.min(promo.discountValue, total);
            }

            setAppliedPromo(promo);
            setDiscountAmount(calculatedDiscount);
            setPromoCodeInput('');
        } catch (error) {
            setPromoError('Hubo un error al validar el código.');
        } finally {
            setValidatingPromo(false);
        }
    };

    const handleRemovePromo = () => {
        setAppliedPromo(null);
        setDiscountAmount(0);
        setPromoError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Rate limit: prevent double-click (min 3s between submits)
        const now = Date.now();
        if (now - lastSubmitRef.current < 3000) return;
        lastSubmitRef.current = now;
        // Input validation
        if (name.trim().length < 2) { alert('El nombre debe tener al menos 2 caracteres.'); return; }
        if (!/^\d{7,15}$/.test(phone.replace(/[\s\-+]/g, ''))) { alert('Ingresá un teléfono válido (solo números, 7-15 dígitos).'); return; }
        if (shipping.id === 'domicilio' && address.trim().length < 5) { alert('La dirección debe tener al menos 5 caracteres.'); return; }
        setLoading(true);

        try {
            // 1. Validar Stock
            for (const item of items) {
                const productRef = doc(db, 'products', item.id);
                const productSnap = await getDoc(productRef);
                if (!productSnap.exists()) {
                    throw new Error(`El producto ${item.name} ya no existe.`);
                }
                if (productSnap.data().stock < item.quantity) {
                    throw new Error(`No hay suficiente stock de ${item.name}. Quedan: ${productSnap.data().stock}`);
                }
            }

            // 2. Crear Pedido
            const orderData = {
                customerName: name,
                customerPhone: phone,
                customerAddress: shipping.id === 'domicilio' ? address : '',
                shippingOption: shipping.nombre,
                shippingCost: shipping.precio,
                paymentMethod: paymentMethod,
                subtotal: total,
                promoCode: appliedPromo ? appliedPromo.code : null,
                discountApplied: discountAmount,
                items: items.map(item => ({
                    productId: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                })),
                total: finalTotal,
                status: 'pendiente',
                createdAt: new Date()
            };

            const docRef = await addDoc(collection(db, 'orders'), orderData);
            
            // 3. Incrementar uso del código promo si se usó
            if (appliedPromo) {
                await updateDoc(doc(db, 'promo_codes', appliedPromo.id), {
                    timesUsed: increment(1)
                });
            }
            
            setOrderId(docRef.id);
        } catch (err) {
            alert('Error al procesar el pedido: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        let wpText = `¡Hola! Acabo de hacer el pedido #${orderId.slice(-6).toUpperCase()}.\n\nLlevo: ${items.map(i => `${i.quantity}x ${i.name}`).join(', ')}.\nSubtotal: $${formatPrice(total)}`;
        if (appliedPromo) {
            wpText += `\nDescuento (${appliedPromo.code}): -$${formatPrice(discountAmount)}`;
        }
        wpText += `\nEnvío (${shipping.nombre}): $${formatPrice(shipping.precio)}\nTotal Final: $${formatPrice(finalTotal)}\nMétodo de pago: ${paymentMethod}\n${shipping.id === 'domicilio' ? `\nSoy ${name}. Mi dirección es: ${address}.` : `\nSoy ${name}. Paso a retirar.`} Te paso el comprobante de pago...`;
        
        const urlParams = encodeURIComponent(wpText);
        const wpUrl = `https://wa.me/${CONFIG_TELEFONO}?text=${urlParams}`;

        return (
            <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, background: 'white', zIndex: 1100, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                <div style={{ textAlign: 'center', maxWidth: '400px' }}>
                    <CheckCircle size={80} color="#28a745" style={{ marginBottom: '20px' }} />
                    <h2>¡Pedido Recibido!</h2>
                    <p style={{ color: '#666', marginBottom: '10px' }}>Tu número de pedido es: <br /><strong>#{orderId.slice(-6).toUpperCase()}</strong></p>
                    <p style={{ marginBottom: '30px' }}>Por favor envíanos un mensaje por WhatsApp para coordinar el pago y la entrega.</p>
                    
                    <a href={wpUrl} target="_blank" rel="noopener noreferrer" className="ml-button" style={{ display: 'block', background: '#25D366', marginBottom: '15px', textDecoration: 'none' }}>
                        Enviar Detalle por WhatsApp
                    </a>
                    <button className="ml-button" style={{ background: '#eee', color: '#333', width: '100%' }} onClick={onClose}>Volver a la tienda</button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, background: 'white', zIndex: 1100, display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center' }}>
                <ChevronLeft style={{ cursor: 'pointer', marginRight: '20px' }} onClick={onBack} />
                <h2 style={{ margin: 0 }}>Tus datos para la entrega</h2>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
                <div className="ml-container" style={{ maxWidth: '500px' }}>
                    <div className="ml-card">
                        <h3 style={{ marginTop: 0 }}>Resumen del pedido</h3>
                        
                        {/* Promo Code Input */}
                        <div style={{ marginBottom: '15px', padding: '10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #eee' }}>
                            {!appliedPromo ? (
                                <>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>¿Tenés un código de descuento?</label>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <input 
                                            type="text" 
                                            className="ml-input" 
                                            placeholder="Ingresar código" 
                                            value={promoCodeInput}
                                            onChange={e => setPromoCodeInput(e.target.value)}
                                            style={{ margin: 0, textTransform: 'uppercase' }}
                                        />
                                        <button 
                                            type="button" 
                                            className="ml-button" 
                                            onClick={handleApplyPromo}
                                            disabled={validatingPromo || !promoCodeInput.trim()}
                                            style={{ padding: '8px 16px', background: '#333' }}
                                        >
                                            {validatingPromo ? '...' : 'Aplicar'}
                                        </button>
                                    </div>
                                    {promoError && <p style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px', marginBottom: 0 }}>{promoError}</p>}
                                </>
                            ) : (
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <span style={{ fontSize: '12px', color: '#666', display: 'block' }}>Código aplicado:</span>
                                        <strong style={{ color: '#28a745' }}>{appliedPromo.code}</strong>
                                    </div>
                                    <button 
                                        type="button" 
                                        onClick={handleRemovePromo}
                                        style={{ background: 'none', border: 'none', color: '#dc3545', cursor: 'pointer', fontSize: '14px', textDecoration: 'underline' }}
                                    >
                                        Quitar
                                    </button>
                                </div>
                            )}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', marginBottom: '8px' }}>
                            <span>Subtotal ({items.length} prod):</span>
                            <span>${formatPrice(total)}</span>
                        </div>
                        {appliedPromo && (
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#28a745', marginBottom: '8px' }}>
                                <span>Descuento ({appliedPromo.code}):</span>
                                <span>-${formatPrice(discountAmount)}</span>
                            </div>
                        )}
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', marginBottom: '10px' }}>
                            <span>Envío:</span>
                            <span>${formatPrice(shipping.precio)}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eee', paddingTop: '10px', fontWeight: 'bold', fontSize: '18px' }}>
                            <span>Total Final:</span>
                            <span>${formatPrice(finalTotal)}</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                        <div style={{ marginBottom: '16px' }}>
                            <label>Opciones de Envío</label>
                            <select 
                                className="ml-input" 
                                value={shipping.id} 
                                onChange={(e) => setShipping(CONFIG_ENVIOS.find(s => s.id === e.target.value))}
                            >
                                {CONFIG_ENVIOS.map(env => (
                                    <option key={env.id} value={env.id}>{env.nombre} - ${formatPrice(env.precio)}</option>
                                ))}
                            </select>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <label>Método de Pago</label>
                            <select 
                                className="ml-input" 
                                value={paymentMethod} 
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            >
                                <option value="Efectivo">Efectivo</option>
                                <option value="Transferencia">Transferencia</option>
                            </select>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <label>Nombre Completo</label>
                            <input
                                type="text"
                                className="ml-input"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                                minLength={2}
                                maxLength={100}
                                placeholder="Ej: Juan Pérez"
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <label>Teléfono (con código de área)</label>
                            <input
                                type="tel"
                                className="ml-input"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                required
                                pattern="[0-9+\-\s]{7,20}"
                                maxLength={20}
                                placeholder="Ej: 5491112345678"
                            />
                        </div>
                        {shipping.id === 'domicilio' && (
                            <div style={{ marginBottom: '24px' }}>
                                <label>Dirección de Envío</label>
                                <textarea
                                    className="ml-input"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                    required
                                    placeholder="Calle, Número, Localidad..."
                                    style={{ minHeight: '80px' }}
                                />
                            </div>
                        )}
                        <button type="submit" className="ml-button" style={{ width: '100%' }} disabled={loading}>
                            {loading ? 'Procesando...' : 'Confirmar Pedido'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
