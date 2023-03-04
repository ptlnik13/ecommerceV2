import CartItemComponent from "../cart-item/cart-item.component";
import {CartContext} from "../../context/cart.context";
import {useContext} from "react";
import ButtonComponent from "../button/button.component";
import {useNavigate} from "react-router-dom";
import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";


const CartDropdownComponent = () => {
    const {isCartOpen, setIsCartOpen, cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const checkoutLink = () => {
        navigate('/checkout');
        setIsCartOpen(!isCartOpen);
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length
                        ?
                        (cartItems.map(item => <CartItemComponent key={item.id} cartItem={item}/>))
                        :
                        (<EmptyMessage>Cart is empty</EmptyMessage>)
                }
            </CartItems>
            <ButtonComponent onClick={checkoutLink}> CHECKOUT </ButtonComponent>
        </CartDropdownContainer>
    )
}


export default CartDropdownComponent;