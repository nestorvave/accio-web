'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Un solo IntersectionObserver para todos los [data-reveal] de la página.
// El estado oculto solo aplica con html.reveal-ready, que se activa aquí mismo:
// si el JS falla o tarda, el contenido sigue visible.
export const RevealObserver = () => {
	const pathname = usePathname();
	useEffect(() => {
		if (!('IntersectionObserver' in window)) return;
		const root = document.documentElement;
		const els = Array.from(
			document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)')
		);
		// Lo que ya está en pantalla no se anima: se muestra tal cual.
		els.forEach((el) => {
			if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in');
		});
		root.classList.add('reveal-ready');
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-in');
						io.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
		);
		els.forEach((el) => !el.classList.contains('is-in') && io.observe(el));
		return () => io.disconnect();
	}, [pathname]);
	return null;
};
