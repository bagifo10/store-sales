import { useState, useEffect } from 'react';
import { db, storage } from '../firebase/config';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

import { X } from 'lucide-react';

const ProductForm = ({ onClose, editingProduct }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrlInput, setImageUrlInput] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (editingProduct) {
            setName(editingProduct.name);
            setDescription(editingProduct.description);
            setPrice(editingProduct.price);
            setStock(editingProduct.stock);
            setCategory(editingProduct.category || '');
            setImageUrlInput(editingProduct.imageUrl || '');
        }
    }, [editingProduct]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const productData = {
                name,
                description,
                price: parseFloat(price),
                stock: parseInt(stock),
                category,
                imageUrl: imageUrlInput,
                updatedAt: new Date()
            };

            if (editingProduct) {
                await updateDoc(doc(db, 'products', editingProduct.id), productData);
            } else {
                await addDoc(collection(db, 'products'), {
                    ...productData,
                    createdAt: new Date()
                });
            }
            onClose();
        } catch (err) {
            console.error('Error in handleSubmit:', err);
            alert('Error al guardar el producto: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
            <div className="ml-card" style={{ width: '100%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <h2>{editingProduct ? 'Editar Producto' : 'Nuevo Producto'}</h2>
                    <X style={{ cursor: 'pointer' }} onClick={onClose} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '16px' }}>
                        <label>Nombre</label>
                        <input type="text" className="ml-input" value={name} onChange={e => setName(e.target.value)} required />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <label>Descripción</label>
                        <textarea className="ml-input" style={{ minHeight: '100px' }} value={description} onChange={e => setDescription(e.target.value)} required />
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                        <div style={{ flex: 1 }}>
                            <label>Precio ($)</label>
                            <input type="number" className="ml-input" value={price} onChange={e => setPrice(e.target.value)} required />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label>Stock</label>
                            <input type="number" className="ml-input" value={stock} onChange={e => setStock(e.target.value)} required />
                        </div>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <label>Categoría</label>
                        <input type="text" className="ml-input" value={category} onChange={e => setCategory(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <label>Enlace de la Imagen (URL)</label>
                        <input type="text" className="ml-input" value={imageUrlInput} onChange={e => setImageUrlInput(e.target.value)} placeholder="https://ejemplo.com/imagen.jpg" />
                    </div>
                    <button type="submit" className="ml-button" style={{ width: '100%' }} disabled={loading}>
                        {loading ? 'Guardando...' : editingProduct ? 'Actualizar Producto' : 'Crear Producto'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
