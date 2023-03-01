import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/images/shopping-bag.svg";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";


const CartIconComponent = ()=>{
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleCart = ()=>{
        setIsCartOpen(!isCartOpen);
    }
return(
    <div className='cart-icon-container' onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartCount}</span>
    </div>
)
}

export default CartIconComponent;