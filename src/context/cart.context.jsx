import {createContext, useEffect, useState} from "react";


const addCartItem = (cartItems, productToAdd) => {
    let foundCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
    if (foundCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, productToRemove) => {
    let {quantity} = cartItems.find(cartItem => cartItem.id === productToRemove.id);
    if (quantity > 1) {
        return cartItems.map(cartItem => cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
    } else {
        return deleteCartItem(cartItems, productToRemove);
    }
}

const deleteCartItem = (cartItems, productToDelete) => {
    return cartItems.filter(cartItem => cartItem.id !== productToDelete.id);
}

export const CartContext = createContext({
    isCartOpen: null,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
    removeItemFromCart: () => null,
    deleteItemToCart: () => null,
    cartCount: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((acc, value) => acc + value.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    const deleteItemToCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete));
    }

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    let value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, deleteItemToCart, cartCount};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}