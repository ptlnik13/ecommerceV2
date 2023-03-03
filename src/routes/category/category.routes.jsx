import {useParams} from "react-router-dom";
import {Fragment, useContext, useEffect, useState} from "react";
import {CategoriesContext} from "../../context/categoriesContext";

import "./category.styles.scss";
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
            <h1 className='category-title'>{category.toUpperCase()}</h1>
            <div className='category-container'>
                {products && products.map(product => <ProductCardComponent key={product.id} product={product}/>)}
            </div>
        </Fragment>
    )
}

export default CategoryRoutes;