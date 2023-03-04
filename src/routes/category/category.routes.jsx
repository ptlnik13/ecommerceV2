import {useParams} from "react-router-dom";
import {Fragment, useContext, useEffect, useState} from "react";
import {CategoriesContext} from "../../context/categoriesContext";

import {CategoryContainer, CategoryTitle} from "./category.styles";
import ProductCardComponent from "../../components/product-card/product-card.component";


const CategoryRoutes = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products && products.map(product => <ProductCardComponent key={product.id} product={product}/>)}
            </CategoryContainer>
        </Fragment>
    )
}

export default CategoryRoutes;