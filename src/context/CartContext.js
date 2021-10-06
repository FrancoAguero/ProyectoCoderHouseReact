import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    //Corrobora que si existe o no existe el producto seleccionado, en el carrito.
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
    
    //Agrega un item de carro
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

    //Elimina un item del carro
    const removeItem = (product) => {
        const [, index] = isInCart(product)
        const newCart = [...cart]
        newCart.splice(index, 1)
        setCart([...newCart])
    };

    //Vaciar el carro
    const clear = () => {
        setCart([]);
    };

    // Precio Total del Carrito
    const getTotal = () => {
        if(cart.length !== 0) {
            const Total = cart.reduce((acc, item) => {
                let {product, quantity } = item
                return acc += (product.price * quantity) 
            }, 0)

            return Total
        } else return 0
    };

    //Cantidad de productos
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

    const value = { cart, addItem, removeItem, clear, isInCart, cartQuantity, getTotal };
    
    return <CartContext.Provider value={value}> { children } </CartContext.Provider>;
}; 

export const useCart = () => {
    const context = useContext(CartContext);

    if(!context){
        throw new Error('useCart debe userse desde dentro de un CartProvider')
    };
    return context;
};
