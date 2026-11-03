'use client';
import Script from 'next/script';
import { useEffect } from 'react';
import { GA_ID } from '../site';

type Gtag = (...args: unknown[]) => void;

// Google Analytics 4. No se carga si GA_ID está vacío.
// Además registra cada clic a WhatsApp como evento "generate_lead".
export const Analytics = () => {
	useEffect(() => {
		if (!GA_ID) return;
		const onClick = (e: MouseEvent) => {
			const link = (e.target as HTMLElement | null)?.closest?.('a[href*="wa.me/"]');
			if (!link) return;
			const gtag = (window as unknown as { gtag?: Gtag }).gtag;
			gtag?.('event', 'generate_lead', {
				method: 'whatsapp',
				link_text: (link.getAttribute('aria-label') || link.textContent || '').trim().slice(0, 80),
				page_path: window.location.pathname,
			});
		};
		document.addEventListener('click', onClick);
		return () => document.removeEventListener('click', onClick);
	}, []);

	if (!GA_ID) return null;
	return (
		<>
			<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy='afterInteractive' />
			<Script id='ga-init' strategy='afterInteractive'>
				{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
			</Script>
		</>
	);
};
