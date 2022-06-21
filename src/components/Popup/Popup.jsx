import PropTypes from 'prop-types';
import { CloseBtn, CloseImg, Message, PopupStyled } from './Popup.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import close from '../../images/close.png';

export const Popup = ({ message, closePopup }) => {
  const popupRoot = document.getElementById('PopupRoot');

  useEffect(() => {
    const timer = setTimeout(closePopup, 15000);
    return () => {
      clearTimeout(timer);
    };
  }, [closePopup]);

  return createPortal(
    <PopupStyled>
      <Message>{message}</Message>
      <CloseBtn onClick={closePopup}>
        <CloseImg src={close} alt={close} />
      </CloseBtn>
    </PopupStyled>,
    popupRoot
  );
};

Popup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
