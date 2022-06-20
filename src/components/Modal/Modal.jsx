import { Backdrop } from '../Backdrop/Backdrop';
import { createPortal } from 'react-dom';
import { ModalBlock } from './Modal.styled';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

export const Modal = ({ content, closeModal }) => {
  const modalRoot = document.getElementById('ModalRoot');
  const stopPropagation = e => {
    e.stopPropagation();
  };

  const onEscClose = e => {
    if (e.key !== 'Escape') return;

    closeModal();
  };

  const isFirstLoad = useRef(true);
  useEffect(() => {
    if (isFirstLoad.current) return;
    isFirstLoad.current = false;

    window.addEventListener('keydown', onEscClose);
    return () => {
      window.removeEventListener('keydown', onEscClose);
    };
  }, [onEscClose]);

  return createPortal(
    <Backdrop closeModal={closeModal}>
      <ModalBlock onClick={stopPropagation}>{content}</ModalBlock>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  content: PropTypes.element.isRequired,
};
