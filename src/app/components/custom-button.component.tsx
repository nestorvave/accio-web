import Link from 'next/link';
import { PiArrowUpRight } from 'react-icons/pi';

type Variant = 'primary' | 'ghost' | 'light';

export const buttonClass = (variant: Variant = 'primary', extra = '') =>
	`btn btn--${variant} ${extra}`.trim();

const Arrow = () => <PiArrowUpRight aria-hidden className='btn__arrow' />;

export const CtaLink = ({
	href,
	label,
	variant = 'primary',
	className = '',
	arrow = true,
}: {
	href: string;
	label: string;
	variant?: Variant;
	className?: string;
	arrow?: boolean;
}) => (
	<Link href={href} className={buttonClass(variant, className)}>
		{label}
		{arrow && <Arrow />}
	</Link>
);

export interface IButton {
	label: string;
	variant?: Variant;
	customStyles?: string;
	id: string;
	disabled?: boolean;
	isSubmit?: boolean;
}

const Button = ({
	label,
	variant = 'primary',
	customStyles = '',
	id,
	disabled,
	isSubmit,
}: IButton) => (
	<button
		type='submit'
		id={id}
		disabled={disabled || isSubmit}
		aria-busy={isSubmit}
		className={buttonClass(variant, customStyles)}
	>
		{isSubmit ? (
			<>
				Enviando
				<span className='btn__spinner' aria-hidden='true' />
			</>
		) : (
			<>
				{label}
				<Arrow />
			</>
		)}
	</button>
);

export default Button;
