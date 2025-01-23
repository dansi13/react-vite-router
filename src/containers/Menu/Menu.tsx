import React from 'react';
import { MenuProps } from './types';
import Anchor from '../../components/Anchor/Anchor';
import styles from './menu.module.css';

const Menu: React.FC<MenuProps> = ({ items, ...props }) => {
	return (
		<nav className={styles.menu} {...props}>
			{items.map((item, index) => (
				<Anchor key={index} href={item.href}>
					{item.label}
				</Anchor>
			))}
		</nav>
	);
};

export default Menu;
