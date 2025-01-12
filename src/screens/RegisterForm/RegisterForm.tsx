import React, { useState } from 'react';
import { RegisterFormProps } from './types';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(name, email, password, confirmPassword);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
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
			<Input
				type="password"
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
			/>
			<Button label="Register" onClick={() => {}} primary />
		</form>
	);
};

export default RegisterForm;
