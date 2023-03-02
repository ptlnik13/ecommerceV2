import "./cart-dropdown.styles.scss";
import CartItemComponent from "../cart-item/cart-item.component";
import {CartContext} from "../../context/cart.context";
import {useContext} from "react";
import ButtonComponent from "../button/button.component";
import {useNavigate} from "react-router-dom";


const CartDropdownComponent = ()=>{
    const {isCartOpen, setIsCartOpen,cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const checkoutLink = ()=>{
        navigate('/checkout');
        setIsCartOpen(!isCartOpen);
    }
return(
    <div className='cart-dropdown-container'>
        <div className="cart-items" >
            {cartItems.map(item=> <CartItemComponent key={item.id} cartItem={item} />)}
        </div>
        <ButtonComponent onClick={checkoutLink}> CHECKOUT </ButtonComponent>
    </div>
)
}


export default CartDropdownComponent;