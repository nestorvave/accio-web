import Link from 'next/link';
import { PiArrowUpRight } from 'react-icons/pi';

type Variant = 'main' | 'ghost' | 'light';

const base =
	'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-[15px] font-semibold transition-[transform,background-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
	// Azul de marca con texto blanco (contraste 4.7:1)
	main: 'bg-azul text-white shadow-[0_8px_24px_-8px_rgba(47,107,255,0.55)] hover:bg-[#2459DB]',
	ghost: 'border border-line text-ink hover:border-ink/40 hover:bg-ink/[0.04]',
	light: 'bg-hueso text-tinta hover:bg-white',
};

export const buttonClass = (variant: Variant = 'main', extra = '') =>
	`${base} ${variants[variant]} ${extra}`;

const Arrow = () => (
	<PiArrowUpRight
		aria-hidden
		className='h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
	/>
);

export const CtaLink = ({
	href,
	label,
	variant = 'main',
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

const Button = ({ label, variant = 'main', customStyles = '', id, disabled, isSubmit }: IButton) => (
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
				<span className='h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white' />
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
