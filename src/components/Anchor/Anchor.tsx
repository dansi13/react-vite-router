import React from 'react';
import { AnchorProps } from './types';

const Anchor: React.FC<AnchorProps> = ({ href, children }) => {
	return <a href={href}>{children}</a>;
};

export default Anchor;
