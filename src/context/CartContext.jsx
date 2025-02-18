import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Load cart from local storage if available
        const savedCart = sessionStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // Save cart to local storage whenever it changes
        sessionStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === productId);
            if (existingProduct.quantity === 1) {
                return prevCart.filter((product) => product.id !== productId);
            } else {
                return prevCart.map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};