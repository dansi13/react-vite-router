import React from 'react';
import { ButtonProps } from './types';
import styles from './button.module.css';
import clsx from 'clsx';
import { Icon } from '@/ui';

const Button: React.FC<ButtonProps> = ({
	type = 'button',
	variant = 'primary',
	disabled = false,
	waiting = false,
	onClick,
	className,
	children,
	href,
	Tag = 'button',
	label, // Добавлен пропс label
	...props
}) => {
	const TagElement = Tag === 'a' ? 'a' : Tag;

	return (
		<TagElement
			type={Tag === 'button' ? type : undefined}
			href={Tag === 'a' ? href : undefined}
			className={clsx(styles.button, styles[variant], className, {
				[styles.disabled]: disabled,
				[styles.waiting]: waiting,
			})}
			onClick={onClick}
			disabled={disabled}
			{...props}
		>
			{waiting && <Icon name="loader" />}
			{label} {/* Используем пропс label */}
			{children}
		</TagElement>
	);
};

export default Button;
