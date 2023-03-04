import {CartItemContainer, ItemDetails} from "./cart-item.styles";


const CartItemComponent = ({cartItem: {name, quantity, imageUrl, price}}) => {
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name}/>
            <ItemDetails>
                <span>{name}</span>
                <span>{quantity} x {price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItemComponent;