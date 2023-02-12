import CategoryItemComponent from "../category-item/Category-item.component";
import "./directory.styles.scss";

function DirectoryComponent({categories}) {
    return (
        <div className='directory-container'>
            {categories.map((category) => (<CategoryItemComponent key={category.id} category={category}/>))}
        </div>
    )
}

export default DirectoryComponent;