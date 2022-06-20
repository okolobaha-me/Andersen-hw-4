import { useEffect, useRef, useState } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { getProducts } from '../../JS/API';
import PropTypes from 'prop-types';
import { Gallery } from './ProductGallery.styled';
import { Loader } from '../Loader/Loader';

export const ProductGallery = ({ isLoggedOn, addToCart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!isFirstLoad) return;
    isFirstLoad.current = false;

    setIsLoading(true);

    getProducts()
      .then(res => {
        setProducts(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Gallery>
          {
            <>
              {products.map(product => {
                const { id, title, price, images } = product;
                return (
                  <ProductCard
                    isLoggedIn={isLoggedOn}
                    price={price}
                    img={images[0]}
                    id={id}
                    title={title}
                    key={id}
                    addToCart={addToCart}
                  />
                );
              })}
            </>
          }
        </Gallery>
      )}
    </>
  );

  // return (
  //
  //
  //   <Gallery>
  //     {isLoading ? (
  //       <h1>Loading...</h1>
  //     ) : (
  //       <>
  //         {products.map(product => {
  //           const { id, title, price, images } = product;
  //           return (
  //             <ProductCard
  //               isLoggedIn={isLoggedOn}
  //               price={price}
  //               img={images[0]}
  //               id={id}
  //               title={title}
  //               key={id}
  //               addToCart={addToCart}
  //             />
  //           );
  //         })}
  //       </>
  //     )}
  //   </Gallery>
  // );
};

ProductGallery.propTypes = {
  addToCart: PropTypes.func.isRequired,
  isLoggedOn: PropTypes.bool.isRequired,
};
