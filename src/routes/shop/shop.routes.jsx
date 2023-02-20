import {ProductsContext} from "../../context/products.context";
import {useContext} from "react";
import ProductCardComponent from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const ShopRoutes = () => {
    const {products} = useContext(ProductsContext);
    return (
        <div className='products-container'>
            {products.map((product)=><ProductCardComponent key={product.id} product={product} />)}
        </div>
    )
}

export default ShopRoutes;