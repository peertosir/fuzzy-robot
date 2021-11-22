import React from 'react';
import Button from '../Button/Button';
import styles from './Modal.module.css';

function Modal({ error, onClose }) {
  const closeModal = () => {
    onClose();
  };

  return (
    <div className={styles['modal-background']} onClick={closeModal}>
      <div className={styles['main-window']}>
        <div className={styles['main-window__header']}>Error</div>
        <div className={styles['main-window__content']}>{error}</div>
        <Button type='button' onClick={closeModal} className={styles.arb}>
          Close
        </Button>
      </div>
    </div>
  );
}

export default Modal;
