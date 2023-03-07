import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCartCount, selectIsCartOpen} from "../../store/cart/cart.selectors";
import {setIsCartOpen} from "../../store/cart/cart.actions";


const CartIconComponent = ()=>{
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleCart = ()=>{
        dispatch(setIsCartOpen(!isCartOpen));
    }
return(
    <CartIconContainer onClick={toggleCart}>
        <ShoppingIcon/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
)
}

export default CartIconComponent;