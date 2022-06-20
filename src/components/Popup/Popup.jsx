import PropTypes from 'prop-types';
import { Message, PopupStyled } from './Popup.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export const Popup = ({ message, closePopup }) => {
  const popupRoot = document.getElementById('PopupRoot');

  useEffect(() => {
    const timer = setTimeout(closePopup, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [closePopup]);

  return createPortal(
    <PopupStyled>
      <Message>{message}</Message>
    </PopupStyled>,
    popupRoot
  );
};

Popup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
