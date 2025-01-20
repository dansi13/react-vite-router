import React from 'react';
import { CardProps } from './types';
import styles from './card.module.css';

/**
 * Card component for displaying content in a card layout.
 * @param {CardProps} props - The props for the Card component.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card: React.FC<CardProps> & { Body: React.FC<CardProps> } = ({
	children,
	...props
}: CardProps): JSX.Element => {
	return (
		<div className={styles.card} {...props}>
			{children}
		</div>
	);
};

/**
 * CardBody component for internal content division within a Card.
 * @param {CardProps} props - The props for the CardBody component.
 * @returns {JSX.Element} The rendered CardBody component.
 */
const CardBody: React.FC<CardProps> = ({ children, ...props }) => {
	return (
		<div className={styles['card-body']} {...props}>
			{children}
		</div>
	);
};

Card.Body = CardBody;

export default Card;
