import React from 'react';
import { SectionProps } from './types';

const Section: React.FC<SectionProps> = ({ children }) => {
	return <section className="section">{children}</section>;
};

export default Section;
