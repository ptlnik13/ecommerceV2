import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import {Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Value} from "./checkout-item.styles";

const CheckoutItemComponent = ({checkoutItem}) => {
    let {name, imageUrl, price, quantity} = checkoutItem;
    const {addItemToCart, removeItemFromCart, deleteItemToCart} = useContext(CartContext);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name}/>
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={() => removeItemFromCart(checkoutItem)}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => addItemToCart(checkoutItem)}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={() => deleteItemToCart(checkoutItem)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItemComponent;