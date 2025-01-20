import React from 'react';
import Menu from '../Menu/Menu';
import styles from './header.module.css';

const Header: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
	const menuItems = [
		{ href: '/', label: 'Home' },
		{ href: '/login', label: 'Login' },
		{ href: '/register', label: 'Register' },
	];

	return (
		<header className={styles.header}>
			<div className={styles.logo}>Logo</div>
			<Menu items={menuItems} />
		</header>
	);
};

export default Header;
