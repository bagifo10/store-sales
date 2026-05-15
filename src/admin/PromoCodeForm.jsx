import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { X } from 'lucide-react';

const PromoCodeForm = ({ onClose }) => {
    const [code, setCode] = useState('');
    const [discountType, setDiscountType] = useState('percentage'); // 'percentage' | 'fixed'
    const [discountValue, setDiscountValue] = useState('');
    const [conditionType, setConditionType] = useState('all'); // 'all' | 'min_amount' | 'category'
    const [conditionValue, setConditionValue] = useState('');
    const [usageLimit, setUsageLimit] = useState('');
    const [loading, setLoading] = useState(false);
    const [existingCategories, setExistingCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'categories'));
                const cats = snapshot.docs.map(d => d.data().name).filter(Boolean);
                setExistingCategories(cats);
            } catch (_) {}
        };
        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (code.trim().length < 3) { alert('El código debe tener al menos 3 caracteres.'); return; }
        if (parseFloat(discountValue) <= 0 || isNaN(parseFloat(discountValue))) { alert('El valor del descuento debe ser mayor a 0.'); return; }
        if (discountType === 'percentage' && parseFloat(discountValue) > 100) { alert('El porcentaje no puede ser mayor a 100.'); return; }
        if (conditionType === 'min_amount' && (parseFloat(conditionValue) <= 0 || isNaN(parseFloat(conditionValue)))) { alert('El monto mínimo debe ser mayor a 0.'); return; }
        if (conditionType === 'category' && !conditionValue) { alert('Debes seleccionar una categoría.'); return; }

        setLoading(true);

        try {
            const promoData = {
                code: code.trim().toUpperCase(),
                discountType,
                discountValue: parseFloat(discountValue),
                conditionType,
                conditionValue: conditionType === 'min_amount' ? parseFloat(conditionValue) : (conditionType === 'category' ? conditionValue : null),
                usageLimit: usageLimit ? parseInt(usageLimit) : 0,
                timesUsed: 0,
                isActive: true,
                createdAt: new Date()
            };

            await addDoc(collection(db, 'promo_codes'), promoData);
            onClose();
        } catch (err) {
            alert('Error al guardar el código.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
            <div className="ml-card" style={{ width: '100%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <h2>Nuevo Código Promocional</h2>
                    <X style={{ cursor: 'pointer' }} onClick={onClose} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '16px' }}>
                        <label>Código (ej: VERANO20)</label>
                        <input type="text" className="ml-input" value={code} onChange={e => setCode(e.target.value.toUpperCase())} required minLength={3} maxLength={20} />
                    </div>

                    <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                        <div style={{ flex: 1 }}>
                            <label>Tipo de Descuento</label>
                            <select className="ml-input" value={discountType} onChange={e => setDiscountType(e.target.value)}>
                                <option value="percentage">Porcentaje (%)</option>
                                <option value="fixed">Monto Fijo ($)</option>
                            </select>
                        </div>
                        <div style={{ flex: 1 }}>
                            <label>Valor</label>
                            <input type="number" className="ml-input" value={discountValue} onChange={e => setDiscountValue(e.target.value)} onWheel={e => e.target.blur()} required min="0.01" step="0.01" />
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <label>Condición de Uso</label>
                        <select className="ml-input" value={conditionType} onChange={e => { setConditionType(e.target.value); setConditionValue(''); }}>
                            <option value="all">Aplica a todo</option>
                            <option value="min_amount">A partir de monto mínimo</option>
                            <option value="category">Solo para una categoría</option>
                        </select>
                    </div>

                    {conditionType === 'min_amount' && (
                        <div style={{ marginBottom: '16px' }}>
                            <label>Monto mínimo de compra ($)</label>
                            <input type="number" className="ml-input" value={conditionValue} onChange={e => setConditionValue(e.target.value)} onWheel={e => e.target.blur()} required min="1" step="1" />
                        </div>
                    )}

                    {conditionType === 'category' && (
                        <div style={{ marginBottom: '16px' }}>
                            <label>Categoría válida</label>
                            <select className="ml-input" value={conditionValue} onChange={e => setConditionValue(e.target.value)} required>
                                <option value="" disabled>Seleccionar categoría...</option>
                                {existingCategories.map((cat, idx) => (
                                    <option key={idx} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    <div style={{ marginBottom: '24px' }}>
                        <label>Límite de usos (deja vacío para sin límite)</label>
                        <input type="number" className="ml-input" value={usageLimit} onChange={e => setUsageLimit(e.target.value)} onWheel={e => e.target.blur()} min="0" placeholder="Ej: 5" />
                    </div>

                    <button type="submit" className="ml-button" style={{ width: '100%' }} disabled={loading}>
                        {loading ? 'Guardando...' : 'Crear Código'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PromoCodeForm;
