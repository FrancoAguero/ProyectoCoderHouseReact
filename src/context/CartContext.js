import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const isInCart = (product) => {
        let flag = false
        let i = 0
        cart.map((item, index) => {
            if(item.product.id === product.id) {
                flag = true
                i = index
            };
        });
        return [flag, i];
    };
    
    const addItem = (product, quantity) => {
        const newItem = { product, quantity }
        const [flag, index] = isInCart(product)

        if(!flag){
            setCart((prevState) => [...prevState, newItem])
        } else {
            const newCart = [...cart]
            newCart[index].quantity += quantity
            setCart([...newCart])
        }
    };

    const removeItem = (product) => {
        const [, index] = isInCart(product)
        const newCart = [...cart]
        newCart.splice(index, 1)
        setCart([...newCart])
    };

    const clear = () => {
        setCart([]);
    };

    const cartQuantity = () => {
        if(cart.length === 0) {
            return 0
        } else {
            let quantity = 0
            cart?.map((item) => {
                quantity += item.quantity 
            })
            return quantity
        }
    }

    const value = { cart, addItem, removeItem, clear, isInCart, cartQuantity };
    
    return <CartContext.Provider value={value}> { children } </CartContext.Provider>;
}; 

export const useCart = () => {
    const context = useContext(CartContext);

    if(!context){
        throw new Error('useCart debe userse desde dentro de un CartProvider')
    };
    return context;
};
