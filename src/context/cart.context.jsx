import {createContext, useEffect, useState} from "react";


const addCartItem = (cartItems, productToAdd) => {
    let foundCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
    if (foundCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}

export const CartContext = createContext({
    isCartOpen: null, setIsCartOpen: () => null, cartItems: [], addItemToCart: () => null, cartCount: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((acc, value) => acc + value.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    let value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}