// src/screens/RegisterForm/RegisterForm.tsx
import React, { ChangeEvent, useState } from 'react';
import { Field } from '@/components/Field/Field';
import Form from '@/components/Form/Form';
import Button from '@/components/Button/Button';
import { RegisterFormProps } from './types';

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
		<Form onSubmit={handleSubmit}>
			<Field
				label="Имя"
				type="text"
				value={name}
				onChange={(
					event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
				) => setName(event.target.value)}
			/>
			<Field
				label="Почта"
				type="email"
				value={email}
				onChange={(
					event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
				) => setEmail(event.target.value)}
			/>
			<Field
				label="Пароль"
				type="password"
				value={password}
				onChange={(
					event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
				) => setPassword(event.target.value)}
			/>
			<Field
				label="Подтверждение пароля"
				type="password"
				value={confirmPassword}
				onChange={(
					event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
				) => setConfirmPassword(event.target.value)}
			/>
			<Button>Register</Button>
		</Form>
	);
};

export default RegisterForm;
