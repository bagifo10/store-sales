import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { doc, getDoc, collection, query, where, getDocs, limit } from 'firebase/firestore';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from './Cart';
import PriceDisplay from '../components/PriceDisplay';
import { useCart } from '../context/CartContext';
import { recordPrice, recordViewedProduct } from '../hooks/usePriceHistory';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { cartItems, setCartItems, cartOpen, setCartOpen, addToCart } = useCart();

    useEffect(() => {
        const fetchProductData = async () => {
            setLoading(true);
            try {
                // Fetch the product
                const docRef = doc(db, 'products', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const prodData = { id: docSnap.id, ...docSnap.data() };
                    setProduct(prodData);

                    // ── Registrar precio e historial de visitas ──────────────
                    recordPrice(prodData.id, prodData.price);
                    recordViewedProduct(prodData);
                    // ────────────────────────────────────────────────────────

                    // Fetch similar products (same category)
                    if (prodData.category) {
                        const q = query(
                            collection(db, 'products'),
                            where('category', '==', prodData.category),
                            limit(5)
                        );
                        const querySnapshot = await getDocs(q);
                        const similar = querySnapshot.docs
                            .map(d => ({ id: d.id, ...d.data() }))
                            .filter(p => p.id !== prodData.id);
                        setSimilarProducts(similar);
                    } else {
                        const qFall = query(collection(db, 'products'), limit(5));
                        const snapFall = await getDocs(qFall);
                        setSimilarProducts(snapFall.docs
                            .map(d => ({ id: d.id, ...d.data() }))
                            .filter(p => p.id !== prodData.id).slice(0, 4));
                    }
                } else {
                    setProduct(null);
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            }
            setLoading(false);
        };

        fetchProductData();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
                <Header />
                <div style={{ padding: '40px', textAlign: 'center' }}>Cargando producto...</div>
            </div>
        );
    }

    if (!product) {
        return (
            <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
                <Header />
                <div style={{ padding: '40px', textAlign: 'center' }}>Producto no encontrado</div>
                <div style={{ textAlign: 'center' }}>
                    <button className="ml-button" onClick={() => navigate('/store')}>Volver a la tienda</button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', background: '#f5f5f5', paddingBottom: '40px' }}>
            <Header />

            <div className="ml-container" style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '10px' }}>
                    <span onClick={() => navigate('/store')} style={{ color: '#3483fa', cursor: 'pointer', fontSize: '14px' }}>Volver al listado</span>
                    <span style={{ color: '#666', fontSize: '14px' }}>|</span>
                    <span style={{ color: '#666', fontSize: '14px' }}>{product.category || 'Sin categoría'}</span>
                </div>

                <div style={{ background: '#fff', borderRadius: '8px', padding: '30px', display: 'flex', gap: '40px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', flexDirection: 'row', flexWrap: 'wrap' }}>

                    {/* Left: Image */}
                    <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={product.imageUrl || 'https://via.placeholder.com/400'}
                            alt={product.name}
                            style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain' }}
                        />
                    </div>

                    {/* Right: Details & Purchase box */}
                    <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column' }}>
                        <span style={{ color: '#666', fontSize: '14px', marginBottom: '5px' }}>Nuevo</span>
                        <h1 style={{ margin: '0 0 15px 0', fontSize: '24px', fontWeight: 500, color: '#333' }}>
                            {product.name}
                        </h1>

                        {/* Precio con descuento */}
                        <div style={{ marginBottom: '20px' }}>
                            <PriceDisplay productId={product.id} currentPrice={product.price} size="lg" showBadge={true} />
                        </div>

                        {/* Stock */}
                        <div style={{ marginBottom: '30px' }}>
                            <div style={{ fontSize: '16px', fontWeight: 500, color: product.stock > 0 ? '#16a34a' : 'red', marginBottom: '5px' }}>
                                {product.stock > 0 ? 'Stock disponible' : 'Sin stock'}
                            </div>
                            {product.stock <= 5 && product.stock > 0 && (
                                <div style={{ color: '#ea580c', fontSize: '14px' }}>
                                    ¡Apúrate! Últimas {product.stock} unidades
                                </div>
                            )}
                        </div>

                        {/* Agregar al carrito */}
                        <button
                            className="ml-button"
                            style={{
                                padding: '16px',
                                fontSize: '16px',
                                background: product.stock === 0 ? '#ccc' : '#3483fa',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
                                fontWeight: 600,
                                transition: 'background 0.2s'
                            }}
                            onClick={() => addToCart(product)}
                            disabled={product.stock === 0}
                        >
                            {product.stock === 0 ? 'Agotado' : 'Agregar al carrito'}
                        </button>

                        <div style={{ display: 'flex', gap: '10px', marginTop: '20px', color: '#666', fontSize: '14px' }}>
                            <span style={{ color: '#16a34a' }}>✔️ Compra Protegida</span>recibe el producto que esperabas o te devolvemos tu dinero.
                        </div>

                        {/* Descripción */}
                        <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                            <h2 style={{ fontSize: '20px', fontWeight: 400, marginBottom: '20px' }}>Descripción del producto</h2>
                            <p style={{ color: '#666', lineHeight: '1.5', whiteSpace: 'pre-wrap' }}>
                                {product.description || "Este producto no tiene descripción."}
                            </p>
                        </div>


                    </div>
                </div>

                {/* Similar Products */}
                {similarProducts.length > 0 && (
                    <div style={{ marginTop: '40px', background: '#fff', borderRadius: '8px', padding: '30px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ margin: '0 0 20px 0', fontSize: '24px', fontWeight: 400, color: '#333' }}>Publicaciones similares</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                            {similarProducts.map(sim => (
                                <div
                                    key={sim.id}
                                    style={{ padding: '0', display: 'flex', flexDirection: 'column', cursor: 'pointer', border: '1px solid #eee', borderRadius: '8px', transition: 'box-shadow 0.2s' }}
                                    onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
                                    onClick={() => navigate(`/product/${sim.id}`)}
                                >
                                    <img
                                        src={sim.imageUrl || 'https://via.placeholder.com/200'}
                                        alt={sim.name}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                                    />
                                    <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                        <div style={{ marginBottom: '5px' }}>
                                            <PriceDisplay productId={sim.id} currentPrice={sim.price} size="md" showBadge={false} />
                                        </div>
                                        <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.3' }}>{sim.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

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

export default ProductDetail;
