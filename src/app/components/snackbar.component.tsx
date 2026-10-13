import { Dispatch, SetStateAction, useEffect } from 'react';
import { PiCheckCircleFill, PiInfoFill, PiWarningFill, PiX } from 'react-icons/pi';

interface ISnack {
	type: 'info' | 'warning' | 'error' | 'success' | '';
	msg: string;
	show: boolean;
	setShow: Dispatch<SetStateAction<boolean>>;
}

const ICONS = {
	success: PiCheckCircleFill,
	info: PiInfoFill,
	warning: PiWarningFill,
	error: PiWarningFill,
	'': PiInfoFill,
};

// Aviso flotante. Siempre montado para que lectores de pantalla anuncien el cambio.
const Snackbar = ({ type, show, setShow, msg }: ISnack) => {
	useEffect(() => {
		if (!show) return;
		const timer = setTimeout(() => setShow(false), 6000);
		return () => clearTimeout(timer);
	}, [show, setShow]);

	const Icon = ICONS[type];

	return (
		<div
			className='toast'
			data-type={type || 'info'}
			data-show={show}
			role={type === 'error' || type === 'warning' ? 'alert' : 'status'}
			aria-live='polite'
		>
			{show && (
				<>
					<Icon className='toast__icon' aria-hidden />
					<p>{msg}</p>
					<button type='button' onClick={() => setShow(false)}>
						<PiX aria-hidden />
						<span className='sr-only'>Cerrar aviso</span>
					</button>
				</>
			)}
		</div>
	);
};

export default Snackbar;
