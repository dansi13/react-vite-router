import React, { useState, useEffect } from 'react';
import Layout from '../../containers/Layout/Layout';
import Section from '../../containers/Section/Section';
import Button from '../../components/Button/Button';
import Modal from '../../containers/Modal/Modal';
import LoginForm from '../../screens/LoginForm/LoginForm';
import RegisterForm from '../../screens/RegisterForm/RegisterForm';
import { getMainPageData, MainPageData } from '../../api/mainPage';

const MainPage: React.FC = () => {
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showRegisterModal, setShowRegisterModal] = useState(false);
	const [data, setData] = useState<MainPageData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		getMainPageData()
			.then((response) => setData(response))
			.catch((err) =>
				setError(err instanceof Error ? err.message : String(err))
			);
	}, []);

	return (
		<Layout>
			<Section>
				<Button onClick={() => setShowLoginModal(true)} label="Login" />
				<Button onClick={() => setShowRegisterModal(true)} label="Register" />
				{showLoginModal && (
					<Modal onClose={() => setShowLoginModal(false)}>
						<LoginForm
							onSubmit={(email, password) => {
								console.log('Login:', { email, password });
								setShowLoginModal(false);
							}}
						/>
					</Modal>
				)}
				{showRegisterModal && (
					<Modal onClose={() => setShowRegisterModal(false)}>
						<RegisterForm
							onSubmit={(name, email, password, confirmPassword) => {
								console.log('Register:', {
									name,
									email,
									password,
									confirmPassword,
								});
								setShowRegisterModal(false);
							}}
						/>
					</Modal>
				)}
				{data && <div>{data.message}</div>}
				{error && <div>Error: {error}</div>}
			</Section>
		</Layout>
	);
};

export default MainPage;
