import {Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Value} from "./checkout-item.styles";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart, deleteItemToCart, removeItemFromCart} from "../../store/cart/cart.actions";
import {selectCart} from "../../store/cart/cart.selectors";

const CheckoutItemComponent = ({checkoutItem}) => {
    let {name, imageUrl, price, quantity} = checkoutItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCart);
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name}/>
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={() => dispatch(removeItemFromCart(cartItems, checkoutItem))}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => dispatch(addItemToCart(cartItems, checkoutItem))}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={() => dispatch(deleteItemToCart(cartItems, checkoutItem))}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItemComponent;