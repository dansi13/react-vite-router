import React from 'react';
import Anchor from '../../components/Anchor/Anchor';
import { FooterProps } from './types';

const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className="footer">
			<div className="logo">Logo</div>
			<nav className="menu">
				<Anchor href="/">Home</Anchor>
				<Anchor href="/login">Login</Anchor>
				<Anchor href="/register">Register</Anchor>
			</nav>
		</footer>
	);
};

export default Footer;
