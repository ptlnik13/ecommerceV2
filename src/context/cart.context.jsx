import {createContext, useReducer} from "react";
import {createAction} from "../utils/reducer/reducer.utils";


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
    cartCount: 0,
    cartTotal: 0
})

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const cartReducer = (state, {type, payload}) => {
    switch (type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
}

export const CartProvider = ({children}) => {
    const [{isCartOpen, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((acc, value) => acc + value.quantity, 0);
        const newCartTotal = newCartItems.reduce((acc, val) => acc + (val.quantity * val.price), 0);
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount}))
    }


    const deleteItemToCart = (productToDelete) => {
        const newCartItems = deleteCartItem(cartItems, productToDelete);
        updateCartItemsReducer(newCartItems);
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (toggleCart) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, toggleCart))
    }

    let value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, deleteItemToCart, cartCount, cartTotal};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}