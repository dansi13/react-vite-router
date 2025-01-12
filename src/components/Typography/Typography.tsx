import React from 'react';
import { TypographyProps } from './types';

export const Title: React.FC<TypographyProps> = ({ value }) => {
	return <h1>{value}</h1>;
};

export const Text: React.FC<TypographyProps> = ({ value }) => {
	return <p>{value}</p>;
};
