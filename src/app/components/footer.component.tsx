import Link from 'next/link';
import Image from 'next/image';
import { PiInstagramLogo, PiLinkedinLogo } from 'react-icons/pi';
import { NAV } from '../navigation';
import { CONTACT } from '../site';

export const Footer = () => (
	<footer className='mt-14 bg-tinta text-hueso sm:mt-24'>
		<div className='mx-auto max-w-page px-4 pb-8 pt-16 sm:px-6 sm:pb-10 sm:pt-20'>
			<div className='grid gap-8 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12'>
				<div className='max-w-sm'>
					<p className='font-display text-3xl leading-tight tracking-tight'>
						Software e IA para resolver problemas reales.
					</p>
					<p className='mt-4 text-hueso/60'>
						Creamos software a la medida y aplicamos inteligencia artificial
						para automatizar tareas y mejorar procesos en empresas de México.
					</p>
				</div>

				<nav aria-label='Pie de página'>
					<ul className='space-y-3'>
						<li>
							<Link
								href='/'
								className='text-hueso/70 transition-colors hover:text-hueso'
							>
								Inicio
							</Link>
						</li>
						{NAV.map(({ label, href }) => (
							<li key={href}>
								<Link
									href={href}
									className='text-hueso/70 transition-colors hover:text-hueso'
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className='space-y-3'>
					<a
						href={`mailto:${CONTACT.email}`}
						className='block break-all text-hueso/70 transition-colors hover:text-hueso'
					>
						{CONTACT.email}
					</a>
					<a
						href={`tel:${CONTACT.phone}`}
						className='block text-hueso/70 transition-colors hover:text-hueso'
					>
						{CONTACT.phoneLabel}
					</a>
					<div className='flex gap-2 pt-2'>
						<a
							href={CONTACT.instagram}
							target='_blank'
							rel='noopener noreferrer'
							className='grid h-11 w-11 place-items-center rounded-full border border-hueso/15 transition-colors hover:border-hueso/40 hover:bg-hueso/5'
						>
							<PiInstagramLogo className='h-5 w-5' />
							<span className='sr-only'>Instagram</span>
						</a>
						<a
							href={CONTACT.linkedin}
							target='_blank'
							rel='noopener noreferrer'
							className='grid h-11 w-11 place-items-center rounded-full border border-hueso/15 transition-colors hover:border-hueso/40 hover:bg-hueso/5'
						>
							<PiLinkedinLogo className='h-5 w-5' />
							<span className='sr-only'>LinkedIn</span>
						</a>
					</div>
				</div>
			</div>

			<Image
				src='/brand/accio-logo-hueso.svg'
				alt='Accio'
				width={420}
				height={141}
				className='mt-12 h-auto w-44 sm:mt-20 sm:w-52'
			/>

			<div className='mt-8 flex flex-col justify-between gap-2 border-t border-hueso/10 pt-6 text-sm text-hueso/50 sm:flex-row'>
				<span>
					© {new Date().getFullYear()} Accio. Todos los derechos reservados.
				</span>
				<span>accio.mx</span>
			</div>
		</div>
	</footer>
);
