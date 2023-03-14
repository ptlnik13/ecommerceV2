import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles';
import {useSelector} from "react-redux";
import {selectCart, selectCartTotal} from "../../store/cart/cart.selectors";
import PaymentFormComponent from "../../components/payment-form/payment-form.component";

const CheckoutRoutes = () => {

    // const {cartItems, cartTotal} = useContext(CartContext);
    const cartItems = useSelector(selectCart);
    const cartTotal = useSelector(selectCartTotal);
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
            <PaymentFormComponent/>
        </CheckoutContainer>
    )
}

export default CheckoutRoutes;