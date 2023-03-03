import {CategoriesContext} from "../../context/categoriesContext";
import {useContext} from "react";
import "./shop.styles.scss";
import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";

const ShopRoutes = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <div className='shop-container'>
            {
                Object.keys(categoriesMap).map(title =>{
                    const products = categoriesMap[title];
                    return <CategoryPreviewComponent key={title} title={title} products={products} />
                })
            }
        </div>
    )
}

export default ShopRoutes;