import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Cart from './Cart';
import { useCart } from '../context/CartContext';

const StoreFront = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const { cartItems, setCartItems, cartOpen, setCartOpen } = useCart();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const activeCategory = searchParams.get('category'); // ej: "Moda"

    useEffect(() => {
        const q = query(collection(db, 'products'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe();
    }, []);

    // Filtrar primero por categoría, luego por búsqueda
    const filteredProducts = products
        .filter(p => !activeCategory || (p.category && p.category.toLowerCase() === activeCategory.toLowerCase()))
        .filter(p =>
            !searchTerm ||
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {/* Banner categoría activa */}
            {activeCategory && (
                <div className="ml-container" style={{ marginTop: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', background: '#fff', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}>
                        <span style={{ fontSize: '18px', fontWeight: 600 }}>{activeCategory}</span>
                        <span style={{ fontSize: '14px', color: '#999' }}>— {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}</span>
                        <button
                            onClick={() => navigate('/store')}
                            style={{ marginLeft: 'auto', background: 'none', border: '1px solid #ccc', borderRadius: '20px', padding: '4px 12px', cursor: 'pointer', fontSize: '13px', color: '#555' }}
                        >
                            ✕ Quitar filtro
                        </button>
                    </div>
                </div>
            )}

            {/* Hero / Promo — solo si no hay categoría activa */}
            {!activeCategory && (
                <div className="ml-container" style={{ marginTop: '20px' }}>
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '20px', textAlign: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ margin: 0 }}>¡Bienvenidos a nuestra tienda online!</h2>
                        <p style={{ color: '#666' }}>Recorre nuestro catálogo y haz tu pedido.</p>
                    </div>
                </div>
            )}

            {/* Product List */}
            <main className="ml-container" style={{ marginTop: '30px' }}>
                {filteredProducts.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '60px 0', color: '#999' }}>
                        <p style={{ fontSize: '18px' }}>No hay productos en esta categoría aún.</p>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
                        {filteredProducts.map(product => (
                            <div
                                key={product.id}
                                className="ml-card"
                                style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer', transition: 'box-shadow 0.2s', background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
                                onClick={() => navigate(`/product/${product.id}`)}
                                onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'}
                                onMouseOut={e => e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.1)'}
                            >
                                <img
                                    src={product.imageUrl || 'https://via.placeholder.com/200'}
                                    alt={product.name}
                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
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
                                    <div style={{ color: '#00a650', fontSize: '14px', marginTop: 'auto', fontWeight: '500' }}>
                                        Ver detalles
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
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

