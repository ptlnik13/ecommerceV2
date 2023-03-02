import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItemComponent = ({checkoutItem}) => {
    let {name, imageUrl, price, quantity} = checkoutItem;
    const {addItemToCart, removeItemFromCart, deleteItemToCart} = useContext(CartContext);

    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={() => removeItemFromCart(checkoutItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className="arrow" onClick={() => addItemToCart(checkoutItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className="remove-button" onClick={() => deleteItemToCart(checkoutItem)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItemComponent;