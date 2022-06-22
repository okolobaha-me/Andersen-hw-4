import {
  CartOptions,
  DataWrapper,
  Description,
  Image,
  Price,
  Product,
  QuantitySelector,
  TempImage,
  Title,
} from './AboutProduct.styled';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { getProductDetails } from '../../JS/API';
import { Loader } from '../../components/Loader/Loader';
import PropTypes from 'prop-types';
import { Button } from '../../components/Button/Button';
import photo from '../../images/tempPhoto.png';

export const AboutProduct = ({ addToCart, isLoggedIn }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isPhotoLoading, setIsPhotoLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

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
  }, [productId]);

  const {
    id = '',
    title = '',
    price = '',
    description = '',
    images = '',
  } = product;

  const handleAdd = () => {
    addToCart(id, price, quantity);
  };

  const turnOnRealPhoto = useCallback(() => {
    setIsPhotoLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Product>
          {isPhotoLoading && <TempImage src={photo} alt={'temporary photo'} />}
          <Image
            src={images[0]}
            alt={title}
            isLoading={isPhotoLoading}
            onLoad={turnOnRealPhoto}
          />
          <DataWrapper>
            <Title>{title}</Title>
            <Price>Price: {price}</Price>
            <Description>{description}</Description>
            {isLoggedIn ? (
              <CartOptions>
                <QuantitySelector
                  type="number"
                  value={quantity}
                  onChange={e => {
                    setQuantity(Number(e.target.value));
                  }}
                />
                <Button onClick={handleAdd} text={'Add to cart'} />
              </CartOptions>
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
