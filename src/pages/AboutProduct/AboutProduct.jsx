import {
  DataWrapper,
  Description,
  Image,
  Price,
  Product,
  Title,
} from './AboutProduct.styled';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { getProductDetails } from '../../JS/API';
import { Loader } from '../../components/Loader/Loader';
import PropTypes from 'prop-types';
import { Button } from '../../components/Button/Button';

export const AboutProduct = ({ addToCart, isLoggedIn }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!isFirstLoad) return;
    isFirstLoad.current = false;

    setIsLoading(true);

    getProductDetails(productId)
      .then(res => {
        setProduct(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const {
    id = '',
    title = '',
    price = '',
    description = '',
    images = '',
  } = product;

  const handleAdd = () => {
    addToCart(id, price);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Product>
          <Image src={images[0]} alt={title} />
          <DataWrapper>
            <Title>{title}</Title>
            <Price>Price: {price}</Price>
            <Description>{description}</Description>
            {isLoggedIn ? (
              <Button onClick={handleAdd} text={'Add to cart'} />
            ) : (
              <p> Please log in to add something to cart</p>
            )}
          </DataWrapper>
        </Product>
      )}
    </>
  );
};

AboutProduct.propTypes = {
  addToCart: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
