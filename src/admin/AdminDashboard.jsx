import { useState, useEffect } from 'react';
import { db, auth } from '../firebase/config';
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc, addDoc, getDocs } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';
import { Package, ClipboardList, LogOut, Plus, Trash2, Edit2, Tag } from 'lucide-react';

const DEFAULT_CATEGORIES = ['Tecnología', 'Moda', 'Supermercado'];

const AdminDashboard = () => {
    const [view, setView] = useState('products'); // 'products', 'orders', 'categories'
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const unsubscribeAuth = auth.onAuthStateChanged(async user => {
            if (!user) { navigate('/login'); return; }

            // Seed default categories if they don't exist yet
            const snap = await getDocs(collection(db, 'categories'));
            const existing = snap.docs.map(d => d.data().name);
            for (const cat of DEFAULT_CATEGORIES) {
                if (!existing.includes(cat)) {
                    await addDoc(collection(db, 'categories'), { name: cat });
                }
            }
        });

        // Listen to products
        const qProducts = query(collection(db, 'products'));
        const unsubscribeProducts = onSnapshot(qProducts, (snapshot) => {
            setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });

        // Listen to orders
        const qOrders = query(collection(db, 'orders'));
        const unsubscribeOrders = onSnapshot(qOrders, (snapshot) => {
            setOrders(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });

        // Listen to categories
        const qCats = query(collection(db, 'categories'));
        const unsubscribeCategories = onSnapshot(qCats, (snapshot) => {
            setCategories(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });

        return () => {
            unsubscribeAuth();
            unsubscribeProducts();
            unsubscribeOrders();
            unsubscribeCategories();
        };
    }, [navigate]);

    const handleLogout = () => {
        signOut(auth);
        navigate('/login');
    };

    const handleCreateCategory = async () => {
        const catName = window.prompt("Nombre de la nueva categoría:");
        if (catName && catName.trim() !== '') {
            try {
                await addDoc(collection(db, 'categories'), { name: catName.trim() });
            } catch (err) {
                console.error("Error creating category:", err);
                alert("Hubo un error al crear la categoría.");
            }
        }
    };

    const handleDeleteCategory = async (id) => {
        if (window.confirm('¿Seguro que querés eliminar esta categoría?')) {
            await deleteDoc(doc(db, 'categories', id));
        }
    };

    const handleDeleteProduct = async (id) => {
        if (window.confirm('¿Seguro que quieres eliminar este producto?')) {
            await deleteDoc(doc(db, 'products', id));
        }
    };

    const handleDeleteOrder = async (id) => {
        if (window.confirm('¿Seguro que quieres eliminar este pedido del historial?')) {
            await deleteDoc(doc(db, 'orders', id));
        }
    };

    const handleUpdateOrderStatus = async (orderId, status, items) => {
        try {
            if (status === 'confirmado') {
                // Reducir stock logic
                for (const item of items) {
                    const productRef = doc(db, 'products', item.productId);
                    const product = products.find(p => p.id === item.productId);
                    if (product) {
                        await updateDoc(productRef, {
                            stock: product.stock - item.quantity
                        });
                    }
                }
            }
            await updateDoc(doc(db, 'orders', orderId), { status });
        } catch (err) {
            console.error("Error updating order:", err);
        }
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <div style={{ width: '250px', background: '#333', color: 'white', padding: '20px' }}>
                <h2 style={{ marginBottom: '40px' }}>Admin Shop</h2>
                <div
                    onClick={() => setView('products')}
                    style={{ display: 'flex', alignItems: 'center', padding: '12px', cursor: 'pointer', background: view === 'products' ? '#444' : 'transparent', borderRadius: '4px', marginBottom: '8px' }}
                >
                    <Package size={20} style={{ marginRight: '10px' }} /> Productos
                </div>
                <div
                    onClick={() => setView('orders')}
                    style={{ display: 'flex', alignItems: 'center', padding: '12px', cursor: 'pointer', background: view === 'orders' ? '#444' : 'transparent', borderRadius: '4px', marginBottom: '8px' }}
                >
                    <ClipboardList size={20} style={{ marginRight: '10px' }} /> Pedidos
                </div>
                <div
                    onClick={() => setView('categories')}
                    style={{ display: 'flex', alignItems: 'center', padding: '12px', cursor: 'pointer', background: view === 'categories' ? '#444' : 'transparent', borderRadius: '4px', marginBottom: '8px' }}
                >
                    <Tag size={20} style={{ marginRight: '10px' }} /> Categorías
                </div>
                <div
                    onClick={handleLogout}
                    style={{ display: 'flex', alignItems: 'center', padding: '12px', cursor: 'pointer', marginTop: '40px', color: '#ff6b6b' }}
                >
                    <LogOut size={20} style={{ marginRight: '10px' }} /> Cerrar Sesión
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <h1>
                        {view === 'products' ? 'Inventario de Productos' 
                        : view === 'orders' ? 'Pedidos de Clientes' 
                        : 'Gestión de Categorías'}
                    </h1>
                    {view === 'products' && (
                        <button className="ml-button" onClick={() => { setEditingProduct(null); setShowForm(true); }}>
                            <Plus size={20} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> Nuevo Producto
                        </button>
                    )}
                    {view === 'categories' && (
                        <button className="ml-button" onClick={handleCreateCategory} style={{ background: '#28a745' }}>
                            <Plus size={20} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> Nueva Categoría
                        </button>
                    )}
                </div>


                {view === 'categories' && (
                    <div className="ml-card">
                        {categories.length === 0 && (
                            <p style={{ color: '#999', textAlign: 'center', padding: '20px' }}>No hay categorías creadas aún.</p>
                        )}
                        {categories.map(cat => {
                            const isDefault = DEFAULT_CATEGORIES.includes(cat.name);
                            return (
                                <div key={cat.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', borderBottom: '1px solid #eee' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Tag size={18} color={isDefault ? '#ff9500' : '#3483fa'} />
                                        <span style={{ fontWeight: 500 }}>{cat.name}</span>
                                        {isDefault && (
                                            <span style={{ fontSize: '11px', background: '#fff3cd', color: '#856404', padding: '2px 8px', borderRadius: '10px' }}>predeterminada</span>
                                        )}
                                    </div>
                                    {!isDefault ? (
                                        <Trash2
                                            size={18}
                                            style={{ cursor: 'pointer', color: '#ff6b6b' }}
                                            onClick={() => handleDeleteCategory(cat.id)}
                                        />
                                    ) : (
                                        <span style={{ fontSize: '12px', color: '#ccc' }}>🔒</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {view === 'products' && (
                    <div className="ml-card">
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #eee', textAlign: 'left' }}>
                                    <th style={{ padding: '12px' }}>Producto</th>
                                    <th style={{ padding: '12px' }}>Precio</th>
                                    <th style={{ padding: '12px' }}>Stock</th>
                                    <th style={{ padding: '12px' }}>Estado</th>
                                    <th style={{ padding: '12px' }}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(p => (
                                    <tr key={p.id} style={{ borderBottom: '1px solid #eee' }}>
                                        <td style={{ padding: '12px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <img src={p.imageUrl} alt={p.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px', marginRight: '10px' }} />
                                                <span>{p.name}</span>
                                            </div>
                                        </td>
                                        <td style={{ padding: '12px' }}>${p.price}</td>
                                        <td style={{ padding: '12px' }}>{p.stock}</td>
                                        <td style={{ padding: '12px' }}>
                                            {p.stock > 0 ? <span style={{ color: 'green' }}>Disponible</span> : <span style={{ color: 'red' }}>Sin Stock</span>}
                                        </td>
                                        <td style={{ padding: '12px' }}>
                                            <Edit2 size={18} style={{ marginRight: '10px', cursor: 'pointer', color: '#3483fa' }} onClick={() => { setEditingProduct(p); setShowForm(true); }} />
                                            <Trash2 size={18} style={{ cursor: 'pointer', color: '#ff6b6b' }} onClick={() => handleDeleteProduct(p.id)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {view === 'orders' && (
                    <div style={{ display: 'grid', gap: '20px' }}>
                        {orders.map(o => (
                            <div key={o.id} className="ml-card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                    <strong>Pedido #{o.id.slice(-6).toUpperCase()}</strong>
                                    <span style={{
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '12px',
                                        background: o.status === 'pendiente' ? '#fff3cd' : o.status === 'confirmado' ? '#d4edda' : '#f8d7da',
                                        color: o.status === 'pendiente' ? '#856404' : o.status === 'confirmado' ? '#155724' : '#721c24'
                                    }}>
                                        {o.status.toUpperCase()}
                                    </span>
                                </div>
                                <div style={{ marginBottom: '15px' }}>
                                    <p><strong>Cliente:</strong> {o.customerName}</p>
                                    <p><strong>Teléfono:</strong> {o.customerPhone}</p>
                                </div>
                                <div style={{ borderTop: '1px solid #eee', paddingTop: '10px' }}>
                                    {o.items.map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                                            <span>{item.name} x {item.quantity}</span>
                                            <span>${item.price * item.quantity}</span>
                                        </div>
                                    ))}
                                    <div style={{ marginTop: '10px', textAlign: 'right', fontWeight: 'bold' }}>
                                        Total: ${o.total}
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                                    {o.status === 'pendiente' && (
                                        <>
                                            <button className="ml-button" style={{ background: '#28a745', flex: 1 }} onClick={() => handleUpdateOrderStatus(o.id, 'confirmado', o.items)}>
                                                Confirmar & Descontar
                                            </button>
                                            <button className="ml-button" style={{ background: '#dc3545', flex: 1 }} onClick={() => handleUpdateOrderStatus(o.id, 'cancelado')}>
                                                Cancelar
                                            </button>
                                        </>
                                    )}
                                    {o.status !== 'pendiente' && (
                                        <button className="ml-button" style={{ background: '#6c757d', color: 'white', flex: 1 }} onClick={() => handleDeleteOrder(o.id)}>
                                            <Trash2 size={18} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> Borrar
                                        </button>
                                    )}
                                    <a
                                        href={`https://wa.me/${o.customerPhone}?text=Hola%20${o.customerName},%20sobre%20tu%20pedido%20%23${o.id.slice(-6).toUpperCase()}`}
                                        target="_blank"
                                        className="ml-button"
                                        style={{ background: '#25D366', textAlign: 'center', textDecoration: 'none', flex: 1 }}
                                    >
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {showForm && (
                    <ProductForm
                        onClose={() => setShowForm(false)}
                        editingProduct={editingProduct}
                    />
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
