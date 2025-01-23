// src/pages/LoginPage/LoginPage.tsx
import React, { useState, useEffect } from 'react';
import Layout from '../../containers/Layout/Layout';
import Section from '../../containers/Section/Section';
import Card from '../../containers/Card/Card';
import LoginForm from '../../screens/LoginForm/LoginForm';
import { getLoginPageData, LoginPageData } from '../../api/loginPage';

const handleLoginSubmit = (email: string, password: string) => {
	console.log('Login submitted:', { email, password });
	// Handle login logic
};

const LoginPage: React.FC = () => {
	const [data, setData] = useState<LoginPageData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		getLoginPageData()
			.then((response) => setData(response))
			.catch((err) =>
				setError(err instanceof Error ? err.message : String(err))
			);
	}, []);

	return (
		<Layout>
			<Section>
				<Card>
					<LoginForm onSubmit={handleLoginSubmit} />
				</Card>
				{data && <div>{data.message}</div>}
				{error && <div>Error: {error}</div>}
			</Section>
		</Layout>
	);
};

export default LoginPage;
