import React, { useState, useEffect } from 'react';
import Layout from '../../containers/Layout/Layout';
import Section from '../../containers/Section/Section';
import Card from '../../containers/Card/Card';
import RegisterForm from '../../screens/RegisterForm/RegisterForm';
import { getRegisterPageData, RegisterPageData } from '../../api/registerPage';

const handleRegisterSubmit = (
	name: string,
	email: string,
	password: string,
	confirmPassword: string
) => {
	console.log('Register submitted:', {
		name,
		email,
		password,
		confirmPassword,
	});
	// Handle register logic
};

const RegisterPage: React.FC = () => {
	const [data, setData] = useState<RegisterPageData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		getRegisterPageData()
			.then((response) => setData(response))
			.catch((err) =>
				setError(err instanceof Error ? err.message : String(err))
			);
	}, []);

	return (
		<Layout>
			<Section>
				<Card>
					<RegisterForm onSubmit={handleRegisterSubmit} name={''} email={''} password={''} confirmPassword={''} onNameChange={function (name: string): void {
                        throw new Error('Function not implemented.');
                    } } onEmailChange={function (email: string): void {
                        throw new Error('Function not implemented.');
                    } } onPasswordChange={function (password: string): void {
                        throw new Error('Function not implemented.');
                    } } onConfirmPasswordChange={function (confirmPassword: string): void {
                        throw new Error('Function not implemented.');
                    } } />
				</Card>
				{data && <div>{data.message}</div>}
				{error && <div>Error: {error}</div>}
			</Section>
		</Layout>
	);
};

export default RegisterPage;
