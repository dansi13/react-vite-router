import {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	ElementType,
	ReactNode,
} from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger';
export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonTag = 'button' | 'a';

export type ButtonProps = {
	type?: ButtonType;
	variant?: ButtonVariant;
	disabled?: boolean;
	waiting?: boolean;
	onClick?: () => void;
	className?: string;
	children?: ReactNode;
	href?: string;
	Tag?: ButtonTag;
	label?: string; // Добавлен пропс label
};
