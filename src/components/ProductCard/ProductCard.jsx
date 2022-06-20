import PropTypes from 'prop-types';
import {
  Card,
  Dollar,
  Image,
  ProductDataWrapper,
  Title,
} from './ProductCard.styled';
import { Button } from '../Button/Button';

export const ProductCard = ({
  id,
  title,
  price,
  img,
  isLoggedIn,
  addToCart,
}) => {
  const handleAdd = () => {
    addToCart(id, price);
  };

  return (
    <Card>
      <Image src={img} alt={title} />
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
