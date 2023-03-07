import CartItemComponent from "../cart-item/cart-item.component";
import ButtonComponent from "../button/button.component";
import {useNavigate} from "react-router-dom";
import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCart, selectIsCartOpen} from "../../store/cart/cart.selectors";
import {setIsCartOpen} from "../../store/cart/cart.actions";


const CartDropdownComponent = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartItems = useSelector(selectCart);
    const navigate = useNavigate();
    const checkoutLink = () => {
        navigate('/checkout');
        dispatch(setIsCartOpen(!isCartOpen));
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