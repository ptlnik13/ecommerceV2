import DirectoryItemComponent from '../directory-item/directory-item.component';

import {DirectoryContainer} from "./directory.styles";

const DirectoryComponent = ({categories}) => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItemComponent key={category.id} category={category}/>
            ))}
        </DirectoryContainer>
    );
};

export default DirectoryComponent;
