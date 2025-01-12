import React from 'react';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
	return (
		<div className="modal">
			<div className="modal-content">
				<button className="modal-close" onClick={onClose}>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
