import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

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
