import PropTypes from 'prop-types';
import {
  Card,
  Dollar,
  Image,
  ProductDataWrapper,
  TempImage,
  Title,
} from './ProductCard.styled';
import { Button } from '../Button/Button';
import photo from '../../images/tempPhoto.png';
import { useCallback, useState } from 'react';

export const ProductCard = ({
  id,
  title,
  price,
  img,
  isLoggedIn,
  addToCart,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleAdd = () => {
    addToCart(id, price);
  };

  const turnOnRealPhoto = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <Card>
      {isLoading && <TempImage src={photo} alt={'temporary photo'} />}
      <Image
        src={img}
        alt={title}
        isLoading={isLoading}
        onLoad={turnOnRealPhoto}
      />
      <ProductDataWrapper>
        <Title to={`product/${id}`}>{title}</Title>
        <p>
          Prise <Dollar>{price}$</Dollar>
        </p>
        {isLoggedIn ? (
          <Button onClick={handleAdd} text={'Add to cart'} />
        ) : (
          <p> Please log in to add something to cart</p>
        )}
      </ProductDataWrapper>
    </Card>
  );
};

ProductCard.propTypes = {
  addToCart: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
