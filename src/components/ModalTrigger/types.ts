import { ReactNode } from 'react';

export interface ModalTriggerProps {
	button: ReactNode;
	modalContent: ReactNode;
	isOpen: boolean;
	onClose: () => void;
}
