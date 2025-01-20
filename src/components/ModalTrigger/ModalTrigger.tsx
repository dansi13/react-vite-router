import React from 'react';
import { ModalTriggerProps } from './types';
import Modal from '../../containers/Modal/Modal';

const ModalTrigger: React.FC<ModalTriggerProps> = ({
	button,
	modalContent,
	isOpen,
	onClose,
}) => {
	return (
		<>
			{button}
			{isOpen && <Modal onClose={onClose}>{modalContent}</Modal>}
		</>
	);
};

export default ModalTrigger;
