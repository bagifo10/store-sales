import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Search, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

// Atajos fijos que también son subcategorías
const FIXED_SHORTCUTS = ['Moda', 'Tecnología', 'Supermercado'];

const Header = ({ searchTerm, setSearchTerm }) => {
    const { cartItems, setCartOpen } = useCart();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [catDropOpen, setCatDropOpen] = useState(false);
    const dropRef = useRef(null);

    // Cargar categorías de Firebase en tiempo real
    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'categories'), (snap) => {
            setCategories(snap.docs.map(d => d.data().name));
        });
        return () => unsub();
    }, []);

    // Cerrar el dropdown al hacer clic afuera
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropRef.current && !dropRef.current.contains(e.target)) {
                setCatDropOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const goToCategory = (cat) => {
        setCatDropOpen(false);
        navigate(`/store?category=${encodeURIComponent(cat)}`);
    };

    const goToStore = () => {
        setCatDropOpen(false);
        navigate('/store');
    };

    return (
        <header style={{ background: '#fff159', padding: '10px 0', position: 'sticky', top: 0, zIndex: 200 }}>
            <div className="ml-container">
                {/* Fila 1: Logo, Buscador, Carrito */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <h1
                        onClick={goToStore}
                        style={{ margin: 0, fontSize: '24px', whiteSpace: 'nowrap', cursor: 'pointer' }}
                    >
                        Mi Tienda
                    </h1>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <input
                            type="text"
                            className="ml-input"
                            placeholder="Buscar productos, marcas y más..."
                            style={{ paddingLeft: '40px', background: 'white', border: 'none', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', width: '100%' }}
                            value={searchTerm || ''}
                            onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
                        />
                        <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                    </div>
                    <button
                        onClick={() => setCartOpen(true)}
                        style={{ position: 'relative', background: 'white', border: 'none', cursor: 'pointer', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', flexShrink: 0 }}
                    >
                        <ShoppingCart size={20} color="black" />
                        {cartItems.length > 0 && (
                            <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: 'red', color: 'white', borderRadius: '50%', width: '20px', height: '20px', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                            </span>
                        )}
                    </button>
                </div>

                {/* Fila 2: Navegación */}
                <div className="nav-categories">

                    {/* Categorías — con dropdown de todas */}
                    <div
                        ref={dropRef}
                        style={{ position: 'relative' }}
                    >
                        <div
                            onClick={() => setCatDropOpen(prev => !prev)}
                            style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontWeight: 500, userSelect: 'none' }}
                        >
                            Categorías <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: catDropOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                        </div>
                        {catDropOpen && (
                            <div style={{
                                position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                                background: 'white', borderRadius: '8px', boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                                minWidth: '180px', zIndex: 300, overflow: 'hidden', marginTop: '6px'
                            }}>
                                <div
                                    onClick={goToStore}
                                    style={{ padding: '10px 18px', cursor: 'pointer', borderBottom: '1px solid #f0f0f0', fontWeight: 600, color: '#3483fa' }}
                                    onMouseOver={e => e.currentTarget.style.background = '#f5f5f5'}
                                    onMouseOut={e => e.currentTarget.style.background = 'white'}
                                >
                                    Todo el catálogo
                                </div>
                                {categories.length === 0 && (
                                    <div style={{ padding: '10px 18px', color: '#999', fontSize: '13px' }}>Sin categorías aún</div>
                                )}
                                {categories.map((cat, i) => (
                                    <div
                                        key={i}
                                        onClick={() => goToCategory(cat)}
                                        style={{ padding: '10px 18px', cursor: 'pointer', borderBottom: '1px solid #f5f5f5' }}
                                        onMouseOver={e => e.currentTarget.style.background = '#f5f5f5'}
                                        onMouseOut={e => e.currentTarget.style.background = 'white'}
                                    >
                                        {cat}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Atajos directos a categorías fijas */}
                    {FIXED_SHORTCUTS.map(cat => (
                        <div
                            key={cat}
                            onClick={() => goToCategory(cat)}
                            style={{ cursor: 'pointer' }}
                            onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'}
                            onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}
                        >
                            {cat}
                        </div>
                    ))}

                    {/* Separador visual */}
                    <div style={{ width: '1px', background: 'rgba(0,0,0,0.15)', margin: '0 2px' }} />

                    {/* Independientes */}
                    <div
                        onClick={() => navigate('/store?filter=ofertas')}
                        style={{ cursor: 'pointer' }}
                        onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}
                    >
                        Ofertas
                    </div>
                    <div
                        onClick={() => navigate('/store?filter=historial')}
                        style={{ cursor: 'pointer' }}
                        onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}
                    >
                        Historial
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
