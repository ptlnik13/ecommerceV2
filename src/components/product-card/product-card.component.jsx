import ButtonComponent, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {Footer, Name, Price, ProductCardContainer} from "./product-card.styles";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../store/cart/cart.actions";
import {selectCart} from "../../store/cart/cart.selectors";

const ProductCardComponent = ({product}) => {
    const {name, price, imageUrl} = product;
    const cartItems = useSelector(selectCart);
    const dispatch = useDispatch();
    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product));
    }

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</ButtonComponent>
        </ProductCardContainer>
    )
}

export default ProductCardComponent;