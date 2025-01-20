// src/routes/routes.ts
import MainPage from '@/pages/MainPage/MainPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';

export const routes = [
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/login',
		element: <LoginPage data={null} error={null} onSubmit={function (email: string, password: string): void {
			throw new Error('Function not implemented.');
		} } />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
];
