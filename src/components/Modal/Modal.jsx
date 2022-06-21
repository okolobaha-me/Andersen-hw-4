import { Backdrop } from '../Backdrop/Backdrop';
import { createPortal } from 'react-dom';
import { CloseBtn, CloseImg, ModalBlock } from './Modal.styled';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef } from 'react';
import close from '../../images/close.png';

export const Modal = ({ content, closeModal }) => {
  const modalRoot = document.getElementById('ModalRoot');
  const stopPropagation = e => {
    e.stopPropagation();
  };

  const onEscClose = useCallback(
    e => {
      if (e.key !== 'Escape') return;

      closeModal();
    },
    [closeModal]
  );

  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!isFirstLoad.current) return;
    isFirstLoad.current = false;

    window.addEventListener('keydown', onEscClose);
    return () => {
      window.removeEventListener('keydown', onEscClose);
    };
  }, [onEscClose]);

  return createPortal(
    <Backdrop closeModal={closeModal}>
      <ModalBlock onClick={stopPropagation}>
        {content}
        <CloseBtn onClick={closeModal}>
          <CloseImg src={close} alt={close} />
        </CloseBtn>
      </ModalBlock>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  content: PropTypes.element.isRequired,
};
