import type { Metadata } from 'next';
import Link from 'next/link';
import { PiArrowRight } from 'react-icons/pi';
import { NAV } from './navigation';

export const metadata: Metadata = {
	title: 'Página no encontrada',
	robots: { index: false, follow: true },
};

export default function NotFound() {
	return (
		<section className='page-hero not-found'>
			<div className='page-wrap'>
				<p className='not-found__code' aria-hidden='true'>
					404
				</p>
				<h1 className='page-hero__title'>
					Esta página <span className='accent'>no existe.</span>
				</h1>
				<p className='page-hero__lead'>
					Puede que el enlace haya cambiado. Estas secciones sí están aquí:
				</p>
				<div className='not-found__links'>
					<Link href='/' className='btn btn--primary'>
						Ir al inicio <PiArrowRight aria-hidden className='btn__arrow' />
					</Link>
					{NAV.map(({ label, href }) => (
						<Link key={href} href={href} className='btn btn--ghost'>
							{label}
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
