import { Link } from 'react-router-dom';
import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from './directory-item.styles';
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const redirectPath = `shop/${title}`;
  return (
    <DirectoryItemContainer className='directory-item-container'>
      <BackgroundImage
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body className='body'>
        <h2>{title}</h2>
        <Link to={redirectPath}>
          {' '}
          <p>Shop Now</p>{' '}
        </Link>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
