import { Background } from './Backdrop.styled';
import PropTypes from 'prop-types';

export const Backdrop = ({ children, closeModal }) => {
  return <Background onClick={closeModal}>{children}</Background>;
};

Backdrop.propTypes = {
  children: PropTypes.any,
  closeModal: PropTypes.func.isRequired,
};
