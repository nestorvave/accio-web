'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PiList, PiX } from 'react-icons/pi';
import { CtaLink } from './custom-button.component';
import { Wordmark } from './brand';
import { NAV } from '../navigation';

export const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => setOpen(false), [pathname]);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [open]);

	return (
		<header className='site-header' data-scrolled={scrolled || open}>
			<nav aria-label='Principal' className='site-nav'>
				<Link href='/' aria-label='Accio, inicio' className='site-nav__logo'>
					<Wordmark className='h-[22px] w-auto' title='Accio' />
				</Link>

				<ul className='site-nav__links'>
					{NAV.map(({ label, href }) => (
						<li key={href}>
							<Link
								href={href}
								aria-current={pathname === href ? 'page' : undefined}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>

				<div className='flex items-center gap-2'>
					<CtaLink
						href='/contact'
						label='Hablemos'
						className='btn--sm'
					/>
					<button
						type='button'
						onClick={() => setOpen((v) => !v)}
						aria-expanded={open}
						aria-controls='menu-movil'
						className='site-nav__toggle md:hidden'
					>
						<span className='sr-only'>{open ? 'Cerrar menú' : 'Abrir menú'}</span>
						{open ? <PiX aria-hidden /> : <PiList aria-hidden />}
					</button>
				</div>
			</nav>

			<div id='menu-movil' className='mobile-menu md:hidden' data-open={open}>
				<ul>
					{[{ label: 'Inicio', href: '/' }, ...NAV].map(({ label, href }) => (
						<li key={href}>
							<Link
								href={href}
								aria-current={pathname === href ? 'page' : undefined}
								tabIndex={open ? undefined : -1}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};
