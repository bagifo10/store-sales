import { X, Trash2, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Checkout from './Checkout';

const Cart = ({ isOpen, onClose, items, setItems }) => {
    const [showCheckout, setShowCheckout] = useState(false);

    if (!isOpen) return null;

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setItems(items.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    if (showCheckout) {
        return (
            <Checkout
                items={items}
                total={total}
                onBack={() => setShowCheckout(false)}
                onClose={() => {
                    setShowCheckout(false);
                    setItems([]);
                    onClose();
                }}
            />
        );
    }

    return (
        <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ width: '100%', maxWidth: '450px', background: 'white', height: '100%', display: 'flex', flexDirection: 'column', animation: 'slideIn 0.3s ease-out' }}>
                <div style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ margin: 0 }}>Tu carrito</h2>
                    <X style={{ cursor: 'pointer' }} onClick={onClose} />
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
                    {items.length === 0 ? (
                        <div style={{ textAlign: 'center', marginTop: '50px' }}>
                            <p>Tu carrito está vacío</p>
                            <button className="ml-button" onClick={onClose} style={{ marginTop: '20px' }}>Ir a comprar</button>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gap: '20px' }}>
                            {items.map(item => (
                                <div key={item.id} style={{ display: 'flex', gap: '15px', borderBottom: '1px solid #f5f5f5', paddingBottom: '15px' }}>
                                    <img src={item.imageUrl} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                            <span style={{ fontWeight: 500 }}>{item.name}</span>
                                            <Trash2 size={18} style={{ cursor: 'pointer', color: '#999' }} onClick={() => removeItem(item.id)} />
                                        </div>
                                        <div style={{ fontSize: '18px', fontWeight: 600 }}>${item.price}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '10px' }}>
                                            <div style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '4px' }}>
                                                <button style={{ border: 'none', background: 'none', padding: '4px 10px', cursor: 'pointer' }} onClick={() => updateQuantity(item.id, -1)}>-</button>
                                                <span style={{ padding: '4px 10px', borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd' }}>{item.quantity}</span>
                                                <button style={{ border: 'none', background: 'none', padding: '4px 10px', cursor: 'pointer' }} onClick={() => updateQuantity(item.id, 1)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <div style={{ padding: '20px', borderTop: '1px solid #eee', background: '#fafafa' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '20px', fontWeight: 600 }}>
                            <span>Subtotal</span>
                            <span>${total}</span>
                        </div>
                        <div style={{color: '#666', fontSize: '14px', marginBottom: '15px'}}>
                            * El costo de envío se calculará en el pago final.
                        </div>
                        <button className="ml-button" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => setShowCheckout(true)}>
                            Continuar compra <ChevronRight size={20} style={{ marginLeft: '10px' }} />
                        </button>
                    </div>
                )}
            </div>
            <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
        </div>
    );
};

export default Cart;
