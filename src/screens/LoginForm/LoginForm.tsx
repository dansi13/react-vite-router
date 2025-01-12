// src/screens/LoginForm/LoginForm.tsx
import React, { useState } from 'react';
import { LoginFormProps } from './types';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(email, password);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button label="Login" onClick={() => {}} primary />
		</form>
	);
};

export default LoginForm;
