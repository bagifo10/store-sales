import { useState, useRef } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
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
    const lastSubmitRef = useRef(0);

    const finalTotal = total + shipping.precio;

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
            setOrderId(docRef.id);
        } catch (err) {
            alert('Error al procesar el pedido: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        const urlParams = encodeURIComponent(`¡Hola! Acabo de hacer el pedido #${orderId.slice(-6).toUpperCase()}.\n\nLlevo: ${items.map(i => `${i.quantity}x ${i.name}`).join(', ')}.\nSubtotal: $${formatPrice(total)}\nEnvío (${shipping.nombre}): $${formatPrice(shipping.precio)}\nTotal Final: $${formatPrice(finalTotal)}\nMétodo de pago: ${paymentMethod}\n${shipping.id === 'domicilio' ? `\nSoy ${name}. Mi dirección es: ${address}.` : `\nSoy ${name}. Paso a retirar.`} Te paso el comprobante de pago...`);
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
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', marginBottom: '8px' }}>
                            <span>Subtotal ({items.length} prod):</span>
                            <span>${formatPrice(total)}</span>
                        </div>
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
