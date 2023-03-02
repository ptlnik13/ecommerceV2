import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";

const CheckoutRoutes = () => {

    const {cartItems} = useContext(CartContext);

    return (
        <div>
        {cartItems.map(cartItem => <CheckoutItemComponent checkoutItem={cartItem}/>)}
    </div>)
}

export default CheckoutRoutes;