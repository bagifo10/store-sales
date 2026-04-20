import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();
const CART_KEY = 'shop_cart_items';

export const useCart = () => useContext(CartContext);

const loadCart = () => {
    try {
        const saved = localStorage.getItem(CART_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(loadCart);
    const [cartOpen, setCartOpen] = useState(false);

    // Sincronizar con localStorage cada vez que cambia el carrito
    useEffect(() => {
        localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const existing = cartItems.find(item => item.id === product.id);
        if (existing) {
            if (existing.quantity >= (product.stock || 99)) {
                // Ya alcanzó el máximo disponible
                setCartOpen(true);
                return;
            }
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
        setCartOpen(true);
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, cartOpen, setCartOpen, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
