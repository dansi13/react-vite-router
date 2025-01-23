import React, { useState, useEffect } from 'react';
import Layout from '../../containers/Layout/Layout';
import Section from '../../containers/Section/Section';
import Button from '../../components/Button/Button';
import ModalTrigger from '../../components/ModalTrigger/ModalTrigger';
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
				<ModalTrigger
					button={
						<Button
							Tag="button"
							onClick={() => setShowLoginModal(true)}
							label="Login"
						/>
					}
					modalContent={
						<LoginForm
                            onSubmit={(email, password) => {
                                console.log('Login:', { email, password });
                                setShowLoginModal(false);
                            } } email={''} password={''} onEmailChange={function (email: string): void {
                                throw new Error('Function not implemented.');
                            } } onPasswordChange={function (password: string): void {
                                throw new Error('Function not implemented.');
                            } }						/>
					}
					isOpen={showLoginModal}
					onClose={() => setShowLoginModal(false)}
				/>
				<ModalTrigger
					button={
						<Button
							Tag="button"
							onClick={() => setShowRegisterModal(true)}
							label="Register"
						/>
					}
					modalContent={
						<RegisterForm
                            onSubmit={(name, email, password, confirmPassword) => {
                                console.log('Register:', {
                                    name,
                                    email,
                                    password,
                                    confirmPassword,
                                });
                                setShowRegisterModal(false);
                            } } name={''} email={''} password={''} confirmPassword={''} onNameChange={function (name: string): void {
                                throw new Error('Function not implemented.');
                            } } onEmailChange={function (email: string): void {
                                throw new Error('Function not implemented.');
                            } } onPasswordChange={function (password: string): void {
                                throw new Error('Function not implemented.');
                            } } onConfirmPasswordChange={function (confirmPassword: string): void {
                                throw new Error('Function not implemented.');
                            } }						/>
					}
					isOpen={showRegisterModal}
					onClose={() => setShowRegisterModal(false)}
				/>
				{data && <div>{data.message}</div>}
				{error && <div>Error: {error}</div>}
			</Section>
		</Layout>
	);
};

export default MainPage;
