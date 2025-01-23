import { ReactNode, FormHTMLAttributes } from 'react';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	children: ReactNode;
	onSubmit: (e: React.FormEvent) => void;
}
