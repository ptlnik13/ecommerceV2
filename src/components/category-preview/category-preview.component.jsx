import './category-preview.styles.scss';
import ProductCardComponent from "../product-card/product-card.component";
import {Link} from "react-router-dom";

const CategoryPreviewComponent = ({title, products}) => {

    return (
        <div className='category-preview-container'>
            <h2><Link to={title} className='title'>{title.toUpperCase()}</Link></h2>
            <div className="preview">
                {products.filter((val, index) => index < 4).map(product => <ProductCardComponent key={product.id} product={product}/>)}
            </div>
        </div>
    )
}

export default CategoryPreviewComponent;