import React from 'react';
import Layout from '../../containers/Layout/Layout';
import Section from '../../containers/Section/Section';
import Card from '../../containers/Card/Card';
import RegisterForm from '../../screens/RegisterForm/RegisterForm';

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
	return (
		<Layout>
			<Section>
				<Card>
					<RegisterForm onSubmit={handleRegisterSubmit} />
				</Card>
			</Section>
		</Layout>
	);
};

export default RegisterPage;
