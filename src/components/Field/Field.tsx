import {
	ChangeEvent,
	FunctionComponent,
	ReactNode,
	useEffect,
	useState,
} from 'react';
import styles from './Field.module.scss';
import clsx from 'clsx';

export type FieldProps = {
	className?: string;
	fieldText?: string;
	label: string;
	type?: string;
	value?: string;
	onChange?: (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	name?: string;
	placeholder?: string;
	readOnly?: boolean;
};

export const Field: FunctionComponent<FieldProps> = ({
	className,
	fieldText,
	type,
	value,
	onChange,
	name,
	placeholder,
	readOnly,
}) => {
	return (
		<label className={clsx(styles.label, className)}>
			<span>{fieldText}</span>
			<input
				type={type}
				value={value}
				onChange={onChange}
				className={clsx(styles['input__field'])}
				name={name}
				placeholder={placeholder}
				readOnly={readOnly}
			/>
		</label>
	);
};
