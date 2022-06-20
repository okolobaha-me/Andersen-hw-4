import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick, text, id, isDisabled }) => {
  return (
    <Btn onClick={onClick} id={id} disabled={isDisabled}>
      {text}
    </Btn>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
