import React from 'react';
import { FormProps } from './types';

const Form: React.FC<FormProps> = ({ children, onSubmit, ...props }) => {
	return (
		<form onSubmit={onSubmit} {...props}>
			{children}
		</form>
	);
};

export default Form;
