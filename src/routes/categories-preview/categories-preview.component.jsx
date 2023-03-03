import {CategoriesContext} from "../../context/categoriesContext";
import {Fragment, useContext} from "react";
import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";

const CategoriesPreviewRoutes = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title =>{
                    const products = categoriesMap[title];
                    return <CategoryPreviewComponent key={title} title={title} products={products} />
                })
            }
        </Fragment>
    )
}

export default CategoriesPreviewRoutes;