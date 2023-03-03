import DirectoryItemComponent from '../directory-item/directory-item.component';

import './directory.styles.scss';

const DirectoryComponent = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItemComponent key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryComponent;
