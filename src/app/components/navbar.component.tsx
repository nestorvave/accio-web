'use client';
import Link from 'next/link';
import { Logo } from './logo.component';
import { useState } from 'react';
import { useLocale } from 'next-intl';

export const Navbar = () => {
	const [open, setOpen] = useState(false);

	const menu = [
		{ label: 'Nosotros', link: '/about-us' },
		{ label: 'Contacto', link: '/contact' },
		{ label: 'Soluciones', link: '/solutions' },
		{ label: 'Carreras', link: '/careers' },
	];

	return (
		<nav className='sticky top-0 z-50 border-gray-200 bg-gray-900'>
			<div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
				<Link href={'/'} className='w-1/2 md:w-auto'>
					<Logo width='40%' />
				</Link>

				<div className='flex w-1/2 items-center justify-end space-x-1 md:order-2 md:w-auto md:space-x-0 rtl:space-x-reverse'>
					<button
						type='button'
						data-dropdown-toggle='language-dropdown-menu'
						className='hidden cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-700'
					>
						English (US)
					</button>

					<button
						onClick={() => setOpen(!open)}
						type='button'
						className='ext-gray-400 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden'
					>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='h-5 w-5'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 17 14'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M1 1h15M1 7h15M1 13h15'
							/>
						</svg>
					</button>
				</div>
				<div
					className={` ${!open && 'hidden'} w-full items-center justify-between md:order-1 md:flex md:w-auto`}
					id='navbar-language'
				>
					<ul className='mt-4 flex flex-col rounded-lg border border-gray-700 bg-gray-800 p-4 font-medium md:mt-0 md:flex-row md:space-x-12 md:border-0 md:bg-gray-900 md:p-0 rtl:space-x-reverse'>
						{menu.map(({ label, link }) => (
							<li key={label}>
								<Link
									locale={false}
									onClick={() => setOpen(false)}
									href={link}
									className='active:bd-blue-600 block rounded border-gray-700 px-3 py-2 text-white hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-500'
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
