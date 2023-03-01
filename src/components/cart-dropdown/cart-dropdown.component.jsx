import "./cart-dropdown.styles.scss";
import ButtonComponent from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import {CartContext} from "../../context/cart.context";
import {useContext} from "react";


const CartDropdownComponent = ()=>{
    const {cartItems} = useContext(CartContext);
return(
    <div className='cart-dropdown-container'>
        <div className="cart-items" >
            {cartItems.map(item=> <CartItemComponent key={item.id} cartItem={item} />)}
        </div>
        <ButtonComponent>Checkout</ButtonComponent>
    </div>
)
}


export default CartDropdownComponent;