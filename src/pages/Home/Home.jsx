import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
import PropTypes from 'prop-types';

export const Home = ({ isLoggedIn, addToCart }) => {
  return <ProductGallery isLoggedOn={isLoggedIn} addToCart={addToCart} />;
};

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
