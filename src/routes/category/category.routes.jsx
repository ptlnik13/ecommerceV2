import {useParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";

import {CategoryContainer, CategoryTitle} from "./category.styles";
import ProductCardComponent from "../../components/product-card/product-card.component";
import {useSelector} from "react-redux";
import {selectCategoriesMap, selectIsCategoriesIsLoading} from "../../store/categories/category.selectors";
import SpinnerComponent from "../../components/spinner/spinner.component";


const CategoryRoutes = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectIsCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>{
            isLoading ? <SpinnerComponent/> :
                (<CategoryContainer>
                    {products && products.map(product => <ProductCardComponent key={product.id} product={product}/>)}
                </CategoryContainer>)
        }
        </Fragment>
    )
}

export default CategoryRoutes;