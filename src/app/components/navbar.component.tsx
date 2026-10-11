'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PiList, PiX } from 'react-icons/pi';
import { CtaLink } from './custom-button.component';
import { NAV } from '../navigation';

export const Navbar = () => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => setOpen(false), [pathname]);

	return (
		<header className='sticky top-0 z-50 px-4 pt-3 sm:px-6'>
			<nav
				aria-label='Principal'
				className='mx-auto flex h-16 max-w-page items-center justify-between rounded-full border border-line/70 bg-paper/75 pl-6 pr-2 backdrop-blur-xl supports-[backdrop-filter]:bg-paper/60'
			>
				<Link href='/' aria-label='Accio, inicio' className='text-ink'>
					<Image
						src='/brand/accio-logo.svg'
						alt='Accio'
						width={105}
						height={36}
						priority
						className='h-6 w-auto'
					/>
				</Link>

				<ul className='hidden items-center gap-1 md:flex'>
					{NAV.map(({ label, href }) => {
						const active = pathname === href;
						return (
							<li key={href}>
								<Link
									href={href}
									aria-current={active ? 'page' : undefined}
									className={`rounded-full px-4 py-2 text-[15px] transition-colors hover:bg-ink/[0.06] ${
										active ? 'text-ink' : 'text-muted hover:text-ink'
									}`}
								>
									{label}
								</Link>
							</li>
						);
					})}
				</ul>

				<div className='flex items-center gap-2'>
					<CtaLink
						href='/contact'
						label='Hablemos de tu proyecto'
						className='hidden !py-2.5 sm:inline-flex'
					/>
					<button
						type='button'
						onClick={() => setOpen((v) => !v)}
						aria-expanded={open}
						aria-controls='menu-movil'
						className='grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-ink/[0.06] md:hidden'
					>
						<span className='sr-only'>
							{open ? 'Cerrar menú' : 'Abrir menú'}
						</span>
						{open ? (
							<PiX className='h-6 w-6' />
						) : (
							<PiList className='h-6 w-6' />
						)}
					</button>
				</div>
			</nav>

			<div
				id='menu-movil'
				className={`absolute inset-x-4 top-full mt-2 overflow-hidden rounded-card border border-line bg-surface transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:inset-x-6 md:hidden ${
					open
						? 'visible translate-y-0 opacity-100'
						: 'invisible -translate-y-2 opacity-0'
				}`}
			>
				<ul className='p-3'>
					{NAV.map(({ label, href }) => (
						<li key={href}>
							<Link
								href={href}
								className='block rounded-field px-4 py-3 font-display text-2xl text-ink hover:bg-ink/[0.05]'
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
				<div className='border-t border-line p-4 sm:hidden'>
					<CtaLink
						href='/contact'
						label='Hablemos de tu proyecto'
						className='w-full'
					/>
				</div>
			</div>
		</header>
	);
};
