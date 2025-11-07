'use client'
import { useState } from 'react';

const FAQItem = ({ q, a }: { q: string; a: string }) => {
	const [open, setOpen] = useState(false);

	return (
		<div
			onClick={() => setOpen(!open)}
			className='border-border cursor-pointer rounded-lg border bg-white p-6 transition-colors hover:border-main'
		>
			<div className='flex items-center justify-between font-semibold text-black'>
				<span>{q}</span>
				<span
					className={`text-main transition-transform ${open ? 'rotate-180' : ''}`}
				>
					▼
				</span>
			</div>
			{open && <p className='mt-4 text-sm leading-relaxed text-black/70'>{a}</p>}
		</div>
	);
};

export default function FAQ() {
	const faqs = [
		{
			q: '¿Cuánto tiempo toma desarrollar un proyecto?',
			a: 'El tiempo depende de la complejidad del proyecto. Los proyectos pueden tomar desde 2-4 semanas hasta varios meses. Durante la consulta inicial, te proporcionaremos un cronograma estimado.',
		},
		{
			q: '¿Cuál es el costo de un proyecto?',
			a: 'El costo varía según los requisitos del proyecto. Ofrecemos modelos de fijación de precios flexibles incluyendo proyectos de precio fijo, tiempo y materiales, y dedicación de equipos.',
		},
		{
			q: '¿Ofrecen mantenimiento después del lanzamiento?',
			a: 'Sí, ofrecemos servicios de mantenimiento y soporte post-lanzamiento. Podemos ayudarte con actualizaciones, correcciones de errores y optimización del rendimiento.',
		},
		{
			q: '¿Puedo hablar con el equipo técnico antes de decidir?',
			a: 'Por supuesto. Creemos en la comunicación abierta. Podemos programar una llamada con nuestro equipo técnico para discutir tu proyecto en detalle.',
		},
	];

	return (
		<div className='space-y-4 mt-16'>
			{faqs.map((faq, idx) => (
				<FAQItem key={idx} {...faq} />
			))}
		</div>
	);
}
