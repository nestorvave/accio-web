'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Un solo IntersectionObserver para todos los [data-reveal] de la página.
export const RevealObserver = () => {
	const pathname = usePathname();
	useEffect(() => {
		const els = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)');
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-in');
						io.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
		);
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, [pathname]);
	return null;
};
