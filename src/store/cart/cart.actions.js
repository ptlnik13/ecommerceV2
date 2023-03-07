import {CART_ACTION_TYPES} from "./cart.types";
import {createAction} from "../../utils/reducer/reducer.utils";


const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((acc, value) => acc + value.quantity, 0);
    const newCartTotal = newCartItems.reduce((acc, val) => acc + (val.quantity * val.price), 0);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount})
}

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

export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const deleteItemToCart = (cartItems, productToDelete) => {
    const newCartItems = deleteCartItem(cartItems, productToDelete);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}