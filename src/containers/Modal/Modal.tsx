import React from 'react';
import { ModalProps } from './types';
import styles from './modal.module.css';

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
	return (
		<div className={styles.modal}>
			<div className={styles['modal-content']}>
				<button className={styles['modal-close']} onClick={onClose}>
					&times;
				</button>
				<div className={styles['modal-body']}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
