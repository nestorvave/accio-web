import Link from 'next/link';
import {
	PiInstagramLogo,
	PiLinkedinLogo,
	PiWhatsappLogo,
} from 'react-icons/pi';
import { NAV } from '../navigation';
import { CONTACT, SERVICES, whatsappUrl } from '../site';
import { Wordmark } from './brand';

export const Footer = () => (
	<footer className='site-footer'>
		<div className='page-wrap'>
			<div className='site-footer__grid'>
				<div className='site-footer__intro'>
					<p className='site-footer__claim'>
						Software e IA para resolver problemas reales.
					</p>
					<p>
						Desarrollo de software a la medida, chatbots y automatización con
						inteligencia artificial desde {CONTACT.city}, {CONTACT.region}, para
						empresas de todo México.
					</p>
				</div>

				<nav aria-label='Sitio'>
					<p className='site-footer__head'>Sitio</p>
					<ul>
						<li>
							<Link href='/'>Inicio</Link>
						</li>
						{NAV.map(({ label, href }) => (
							<li key={href}>
								<Link href={href}>{label}</Link>
							</li>
						))}
					</ul>
				</nav>

				<nav aria-label='Servicios'>
					<p className='site-footer__head'>Servicios</p>
					<ul>
						{SERVICES.map(({ id, name }) => (
							<li key={id}>
								<Link href={`/servicios#${id}`}>{name}</Link>
							</li>
						))}
					</ul>
				</nav>

				<address className='not-italic'>
					<p className='site-footer__head'>Contacto</p>
					<ul>
						<li>
							<a href={whatsappUrl()} target='_blank' rel='noopener noreferrer'>
								WhatsApp
							</a>
						</li>
						<li>
							<a href={`mailto:${CONTACT.email}`} className='break-all'>
								{CONTACT.email}
							</a>
						</li>
						<li>
							<a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneLabel}</a>
						</li>
						<li className='site-footer__muted'>
							{CONTACT.city}, {CONTACT.region}, México
						</li>
					</ul>
					<div className='site-footer__social'>
						<a href={whatsappUrl()} target='_blank' rel='noopener noreferrer'>
							<PiWhatsappLogo aria-hidden />
							<span className='sr-only'>WhatsApp</span>
						</a>
						<a href={CONTACT.instagram} target='_blank' rel='noopener noreferrer'>
							<PiInstagramLogo aria-hidden />
							<span className='sr-only'>Instagram</span>
						</a>
						<a href={CONTACT.linkedin} target='_blank' rel='noopener noreferrer'>
							<PiLinkedinLogo aria-hidden />
							<span className='sr-only'>LinkedIn</span>
						</a>
					</div>
				</address>
			</div>

			<Wordmark className='site-footer__mark' title='Accio' />

			<div className='site-footer__legal'>
				<span>© {new Date().getFullYear()} Accio. Todos los derechos reservados.</span>
				<span>accio.mx</span>
			</div>
		</div>
	</footer>
);
