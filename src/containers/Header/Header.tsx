import React from 'react';
import Anchor from '../../components/Anchor/Anchor';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = () => {
	return (
		<header className="header">
			<div className="logo">Logo</div>
			<nav className="menu">
				<Anchor href="/">Home</Anchor>
				<Anchor href="/login">Login</Anchor>
				<Anchor href="/register">Register</Anchor>
			</nav>
		</header>
	);
};

export default Header;
