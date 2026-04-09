import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import Cart from './Cart';

const StoreFront = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'products'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe();
    }, []);

    const addToCart = (product) => {
        const existing = cartItems.find(item => item.id === product.id);
        if (existing) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
        setCartOpen(true);
    };

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
            {/* Header */}
            <header style={{ background: '#fff159', padding: '10px 0', position: 'sticky', top: 0, zIndex: 100 }}>
                <div className="ml-container" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <h1 style={{ margin: 0, fontSize: '24px', whiteSpace: 'nowrap' }}>Mi Tienda</h1>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <input
                            type="text"
                            className="ml-input"
                            placeholder="Buscar productos..."
                            style={{ paddingLeft: '40px', background: 'white', border: 'none', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                    </div>
                    <button
                        onClick={() => setCartOpen(true)}
                        style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        <ShoppingCart size={24} />
                        {cartItems.length > 0 && (
                            <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'red', color: 'white', borderRadius: '50%', width: '18px', height: '18px', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                            </span>
                        )}
                    </button>
                </div>
            </header>

            {/* Hero / Promo */}
            <div className="ml-container" style={{ marginTop: '20px' }}>
                <div style={{ background: '#fff', borderRadius: '8px', padding: '20px', textAlign: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ margin: 0 }}>¡Bienvenidos a nuestra tienda online!</h2>
                    <p style={{ color: '#666' }}>Recorre nuestro catálogo y haz tu pedido.</p>
                </div>
            </div>

            {/* Product List */}
            <main className="ml-container" style={{ marginTop: '30px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
                    {filteredProducts.map(product => (
                        <div key={product.id} className="ml-card" style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
                            <img
                                src={product.imageUrl || 'https://via.placeholder.com/200'}
                                alt={product.name}
                                style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                            />
                            <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: 400 }}>{product.name}</h3>
                                <div style={{ fontSize: '24px', fontWeight: 500, marginBottom: '10px' }}>
                                    ${product.price}
                                </div>
                                {product.stock <= 5 && product.stock > 0 && (
                                    <div style={{ color: '#f73', fontSize: '12px', marginBottom: '10px' }}>
                                        ¡Últimas {product.stock} unidades!
                                    </div>
                                )}
                                {product.stock === 0 && (
                                    <div style={{ color: 'red', fontSize: '12px', marginBottom: '10px' }}>
                                        Sin stock
                                    </div>
                                )}
                                <button
                                    className="ml-button"
                                    style={{ marginTop: 'auto', width: '100%', padding: '8px' }}
                                    onClick={() => addToCart(product)}
                                    disabled={product.stock === 0}
                                >
                                    {product.stock === 0 ? 'Sin Stock' : 'Agregar al carrito'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Cart
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
                items={cartItems}
                setItems={setCartItems}
            />
        </div>
    );
};

export default StoreFront;
