import {ProductsContext} from "../../context/products.context";
import {useContext} from "react";

const ShopRoutes = () => {
    const {products} = useContext(ProductsContext);
    return (
        <div>
            {products.map(({id, name})=>(<div key-={id}><h1>{name}</h1></div>))}
        </div>
    )
}

export default ShopRoutes;