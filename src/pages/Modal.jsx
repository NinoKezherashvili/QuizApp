import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent}>
        {/* Your modal content goes here */}
        <h2>Login Modal</h2>
        <p>This is the modal content.</p>
      </div>
    </div>
  );
};

export default Modal;