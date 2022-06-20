import PropTypes from 'prop-types';
import { CartStyled, Data, DataWrapper, Header } from './Cart.styled';

export const Cart = ({ cart }) => {
  const getTotalQuantity = () => {
    let sum = 0;
    for (const product in cart) {
      sum += cart[product].quantity;
    }
    return sum;
  };

  const getTotalPrice = () => {
    let sum = 0;
    for (const product in cart) {
      const { quantity, price } = cart[product];
      sum += quantity * price;
    }
    return sum;
  };

  return (
    <CartStyled>
      <Header>Cart:</Header>
      <DataWrapper>
        <Data>
          Quantity: <span>{getTotalQuantity()}</span>
        </Data>
        <Data>
          Total price: <span>{getTotalPrice()}</span>
        </Data>
      </DataWrapper>
    </CartStyled>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
};
