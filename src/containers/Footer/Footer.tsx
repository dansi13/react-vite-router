import React from 'react';
import Menu from '../Menu/Menu';
import styles from './footer.module.css';

const Footer: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
	const menuItems = [
		{ href: '/', label: 'Home' },
		{ href: '/login', label: 'Login' },
		{ href: '/register', label: 'Register' },
	];

	return (
		<footer className={styles.footer}>
			<div className={styles.logo}>Logo</div>
			<Menu items={menuItems} />
		</footer>
	);
};

export default Footer;
