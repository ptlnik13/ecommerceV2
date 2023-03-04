import ProductCardComponent from "../product-card/product-card.component";
import {Link} from "react-router-dom";
import {CategoryPreviewContainer, Preview, Title} from "./category-preview.styles";

const CategoryPreviewComponent = ({title, products}) => {

    return (
        <CategoryPreviewContainer>
            <h2><Title to={title}>{title.toUpperCase()}</Title></h2>
            <Preview>
                {products.filter((val, index) => index < 4).map(product => <ProductCardComponent key={product.id} product={product}/>)}
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreviewComponent;