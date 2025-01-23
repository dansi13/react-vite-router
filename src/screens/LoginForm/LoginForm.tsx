// src/screens/LoginForm/LoginForm.tsx
import React, { ChangeEvent, useState } from 'react';
import { Field } from '@/components/Field/Field';
import Form from '@/components/Form/Form';
import Button from '@/components/Button/Button';

export interface LoginFormProps {
	onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(email, password);
	};

	return (
		<Form onSubmit={handleSubmit}>
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
			<Button>Login</Button>
		</Form>
	);
};

export default LoginForm;
