import {createSelector} from "reselect";

const selectCartReducer = state => state.cart

export const selectCart = createSelector(
    [selectCartReducer],
    cartReducer => cartReducer.cartItems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart)=> cart.isCartOpen
)

export const selectCartCount = createSelector(
    [selectCart],
    cartItem=> cartItem.reduce((acc, value) => acc + value.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCart],
    cartItem=> cartItem.reduce((acc, val) => acc + (val.quantity * val.price), 0)
)