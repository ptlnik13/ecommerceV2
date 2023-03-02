import ButtonComponent from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const CheckoutItemComponent = ({checkoutItem}) => {

    const {addItemToCart,removeItemFromCart, deleteItemToCart} = useContext(CartContext);

    return(
        <div>
            <h1>Name: {checkoutItem.name}</h1>
            <h2>Price: {checkoutItem.price}</h2>
            <h3>Quantity: {checkoutItem.quantity}</h3>
            <ButtonComponent onClick={()=>addItemToCart(checkoutItem)}> Add </ButtonComponent>
            <br/>
            <ButtonComponent onClick={()=>removeItemFromCart(checkoutItem)}> Remove </ButtonComponent>
            <br/>
            <ButtonComponent onClick={()=>deleteItemToCart(checkoutItem)}> Delete </ButtonComponent>
        </div>
    )
}

export default CheckoutItemComponent;