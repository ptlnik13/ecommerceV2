import {Fragment, useContext} from "react";
import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/category.selectors";

const CategoriesPreviewRoutes = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
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