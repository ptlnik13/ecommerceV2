import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/images/shopping-bag.svg";


const CartIconComponent = ()=>{
return(
    <div className='cart-icon-container'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)
}

export default CartIconComponent;