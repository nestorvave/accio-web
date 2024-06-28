/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect } from 'react';

interface ISnack {
	type: 'info' | 'warning' | 'error' | 'success' | '';
	msg: string;
	show: boolean;
	setShow: Dispatch<SetStateAction<boolean>>;
}

const Snackbar = ({ type, show, setShow, msg }: ISnack) => {
	let bgColor = 'bg-green-50';
	let textColor = 'text-green-800';
	let borderColor = 'border-green-300';
	let hoverBtn = 'hover:bg-green-200';

	switch (type) {
		case 'info':
			bgColor = 'bg-[#0F62FE]';
			textColor = 'text-coolGray';
			borderColor = 'border-[#0F62FE]';
			hoverBtn = 'hover:bg-blue-200';
			break;
		case 'warning':
			bgColor = 'bg-yellow-50';
			textColor = 'text-yellow-800';
			borderColor = 'border-yellow-300';
			hoverBtn = 'hover:bg-yellow-200';
			break;
		case 'error':
			bgColor = 'bg-red-500';
			textColor = 'text-white';
			borderColor = 'border-red-600';
			hoverBtn = 'hover:bg-red-200';
			break;
		case 'success':
			bgColor = 'bg-green-50';
			textColor = 'text-green-800';
			borderColor = 'border-green-300';
			hoverBtn = 'hover:bg-green-200';
			break;
		default:
			break;
	}

	useEffect(() => {
		if (show) {
			const timer = setTimeout(() => {
				setShow(false);
			}, 5000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [show]);

	return (
		<>
			{show && (
				<div
					className={`fixed right-4 top-4 z-50 mb-4 flex items-center rounded-lg border ${borderColor} ${bgColor} p-4 text-sm ${textColor}`}
					role='alert'
					style={{
						transition: 'opacity 0.3s ease-in-out',
					}}
					id='snackbar'
				>
					<svg
						className='mr-3 inline h-4 w-4 flex-shrink-0'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 20 20'
					>
						<svg
							className='mr-3 inline h-4 w-4 flex-shrink-0'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
						</svg>
					</svg>
					<span className='sr-only'>Info</span>
					<div>{msg}</div>
					<button
						type='button'
						className={`-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg p-1.5 ${textColor} ${hoverBtn}`}
						data-dismiss='#alert-1'
						aria-label='Close'
						onClick={() => setShow(false)}
					>
						<span className='sr-only'>Close</span>
						<svg
							className='h-3 w-3'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 14 14'
						>
							<svg
								className='h-3 w-3'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 14 14'
							>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
								/>
							</svg>
						</svg>
					</button>
				</div>
			)}
		</>
	);
};

export default Snackbar;
