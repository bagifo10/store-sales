import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from './Cart';
import PriceDisplay from '../components/PriceDisplay';
import { useCart } from '../context/CartContext';
import { recordPrice, getDiscountInfo, getViewedProducts } from '../hooks/usePriceHistory';

const StoreFront = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const { cartItems, setCartItems, cartOpen, setCartOpen } = useCart();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const activeCategory = searchParams.get('category');
    const activeFilter = searchParams.get('filter'); // 'ofertas' | 'historial'

    useEffect(() => {
        const q = query(collection(db, 'products'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const prods = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(prods);
            // Registrar precios para detectar futuros descuentos
            prods.forEach(p => recordPrice(p.id, p.price));
        });
        return () => unsubscribe();
    }, []);

    // ── Calcular lista según filtro activo ──────────────────────────────────
    let displayProducts = products;

    if (activeFilter === 'historial') {
        const viewed = getViewedProducts(); // ya filtrado a 15 días
        const viewedIds = viewed.map(v => v.id);
        // Mantener orden del historial (más reciente primero)
        displayProducts = viewedIds
            .map(id => products.find(p => p.id === id))
            .filter(Boolean);
    } else if (activeFilter === 'ofertas') {
        displayProducts = products.filter(p => {
            const { hasDiscount } = getDiscountInfo(p.id, p.price);
            return hasDiscount;
        });
    } else {
        // Filtro normal: categoría + búsqueda
        displayProducts = products
            .filter(p => !activeCategory || (p.category && p.category.toLowerCase() === activeCategory.toLowerCase()))
            .filter(p =>
                !searchTerm ||
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (p.description && p.description.toLowerCase().includes(searchTerm.toLowerCase()))
            );
    }

    // ── Etiqueta de sección activa ──────────────────────────────────────────
    const sectionLabel =
        activeFilter === 'historial' ? '🕐 Vistos recientemente' :
        activeFilter === 'ofertas'   ? '🔥 Ofertas' :
        activeCategory               ? activeCategory : null;

    return (
        <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {/* Banner sección activa */}
            {sectionLabel && (
                <div className="ml-container" style={{ marginTop: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', background: '#fff', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}>
                        <span style={{ fontSize: '18px', fontWeight: 600 }}>{sectionLabel}</span>
                        <span style={{ fontSize: '14px', color: '#999' }}>— {displayProducts.length} producto{displayProducts.length !== 1 ? 's' : ''}</span>
                        <button
                            onClick={() => navigate('/store')}
                            style={{ marginLeft: 'auto', background: 'none', border: '1px solid #ccc', borderRadius: '20px', padding: '4px 12px', cursor: 'pointer', fontSize: '13px', color: '#555' }}
                        >
                            ✕ Quitar filtro
                        </button>
                    </div>
                </div>
            )}

            {/* Hero — solo si no hay filtro activo */}
            {!sectionLabel && (
                <div className="ml-container" style={{ marginTop: '20px' }}>
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '20px', textAlign: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ margin: 0 }}>¡Bienvenidos a nuestra tienda online!</h2>
                        <p style={{ color: '#666' }}>Recorre nuestro catálogo y haz tu pedido.</p>
                    </div>
                </div>
            )}

            {/* Product List */}
            <main className="ml-container" style={{ marginTop: '30px' }}>
                {activeFilter === 'historial' && displayProducts.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '60px 0', color: '#999' }}>
                        <p style={{ fontSize: '24px', marginBottom: '8px' }}>🕐</p>
                        <p style={{ fontSize: '18px' }}>Todavía no visitaste ningún producto.</p>
                        <p style={{ fontSize: '14px' }}>Los productos que veas en los próximos 15 días aparecerán aquí.</p>
                    </div>
                ) : activeFilter === 'ofertas' && displayProducts.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '60px 0', color: '#999' }}>
                        <p style={{ fontSize: '24px', marginBottom: '8px' }}>🏷️</p>
                        <p style={{ fontSize: '18px' }}>No hay ofertas activas en este momento.</p>
                        <p style={{ fontSize: '14px' }}>Los productos cuyo precio bajó en los últimos 15 días aparecerán aquí.</p>
                    </div>
                ) : displayProducts.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '60px 0', color: '#999' }}>
                        <p style={{ fontSize: '18px' }}>No hay productos en esta categoría aún.</p>
                    </div>
                ) : (
                    <div className="product-grid">
                        {displayProducts.map(product => {
                            const { hasDiscount, discountPct } = getDiscountInfo(product.id, product.price);
                            return (
                                <div
                                    key={product.id}
                                    className="ml-card"
                                    style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer', transition: 'box-shadow 0.2s', background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', position: 'relative' }}
                                    onClick={() => navigate(`/product/${product.id}`)}
                                    onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'}
                                    onMouseOut={e => e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.1)'}
                                >
                                    {/* Badge oferta */}
                                    {hasDiscount && (
                                        <div style={{
                                            position: 'absolute', top: '10px', left: '10px',
                                            background: '#16a34a', color: 'white',
                                            fontSize: '12px', fontWeight: 700,
                                            padding: '3px 8px', borderRadius: '4px',
                                            zIndex: 1,
                                        }}>
                                            -{discountPct}% OFERTA
                                        </div>
                                    )}
                                    <img
                                        src={product.imageUrl || 'https://via.placeholder.com/200'}
                                        alt={product.name}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                    />
                                    <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: 400 }}>{product.name}</h3>
                                        <div style={{ marginBottom: '10px' }}>
                                            <PriceDisplay productId={product.id} currentPrice={product.price} size="md" showBadge={false} />
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

                                        <div style={{ color: '#2563eb', fontSize: '14px', marginTop: 'auto', fontWeight: '500' }}>
                                            Ver detalles
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>

            <Cart
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
                items={cartItems}
                setItems={setCartItems}
            />

            <Footer />
        </div>
    );
};

export default StoreFront;
