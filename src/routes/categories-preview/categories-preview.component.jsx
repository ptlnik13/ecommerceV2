import {Fragment} from "react";
import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";
import {useSelector} from "react-redux";
import {selectCategoriesMap, selectIsCategoriesIsLoading} from "../../store/categories/category.selectors";
import SpinnerComponent from "../../components/spinner/spinner.component";

const CategoriesPreviewRoutes = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsCategoriesIsLoading);
    return (
        <Fragment>
            {
                isLoading ? <SpinnerComponent/> :
                    (Object.keys(categoriesMap).map(title => {
                        const products = categoriesMap[title];
                        return <CategoryPreviewComponent key={title} title={title} products={products}/>
                    }))
            }
        </Fragment>
    )
}

export default CategoriesPreviewRoutes;