import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles';

const CheckoutRoutes = () => {

    const {cartItems, cartTotal} = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Removed</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map(cartItem => <CheckoutItemComponent key={cartItem.id} checkoutItem={cartItem}/>)}
            <Total>Total: ${cartTotal} </Total>
        </CheckoutContainer>
    )
}

export default CheckoutRoutes;