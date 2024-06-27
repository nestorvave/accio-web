
export interface ITextInput {
	ariaLabel?: string;
	autoFocus?: boolean;
	className?: string;
	id: string;
	isRequired?: boolean;
	label?: string;
	maxLength?: number;
	minLength?: number;
	name: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	placeholder?: string;
	readOnly?: boolean;
	type: 'text' | 'textarea';
	value: string;
	disabled?: boolean;

}

const TextInput = (props: ITextInput) => {
	const {
		ariaLabel,
		autoFocus,
		className,
		id,
		isRequired,
		label,
		maxLength,
		minLength,
		name,
		onChange,
		placeholder,
		readOnly,
		type = 'text',
		value,
		disabled = false,
		
	} = props;

	const inputclass = `${className && className} p-2 px-3  mt-[10px] block resize-none  
	w-full  text-base text-main focus:outline-none shadow-inputDefault focus:shadow-input bg-softBlue `;

	return (
		<div className='w-full'>
			{(label || isRequired) && (
				<label
					htmlFor={id}
					className='mb-[8px] block text-base font-thin text-main'
				>
					{label}
					{isRequired && <span className='pl-1 text-xl text-logo'>*</span>}
				</label>
			)}
			<div>
				<input
					type={type}
					id={id}
					className={`${inputclass}`}
					placeholder={placeholder}
					required
					name={name}
					onChange={onChange}
					value={value}
					aria-label={ariaLabel}
					maxLength={maxLength || 100}
					minLength={minLength}
					readOnly={readOnly}
					autoFocus={autoFocus}
					style={{ outline: 'none' }}
					disabled={disabled}
				
				/>
			</div>
		</div>
	);
};

export default TextInput;
