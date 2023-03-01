import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/images/shopping-bag.svg";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";


const CartIconComponent = ()=>{
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toggleCart = ()=>{
        setIsCartOpen(!isCartOpen);
    }
return(
    <div className='cart-icon-container' onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)
}

export default CartIconComponent;