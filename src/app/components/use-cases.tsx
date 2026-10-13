'use client';
import { KeyboardEvent, useRef, useState } from 'react';
import {
	PiArrowUpRight,
	PiBriefcase,
	PiCheck,
	PiGraduationCap,
	PiHouseLine,
	PiStethoscope,
	PiStorefront,
	PiTruck,
} from 'react-icons/pi';
import { USE_CASES, whatsappUrl } from '../site';

const ICONS: Record<string, React.ComponentType<{ 'aria-hidden'?: boolean }>> = {
	salud: PiStethoscope,
	inmobiliarias: PiHouseLine,
	comercio: PiStorefront,
	despachos: PiBriefcase,
	educacion: PiGraduationCap,
	distribucion: PiTruck,
};

// Pestañas accesibles (patrón WAI-ARIA): todos los paneles se renderizan para que
// el contenido exista en el HTML exportado; solo cambia cuál está visible.
export const UseCases = () => {
	const [active, setActive] = useState(0);
	const tabs = useRef<(HTMLButtonElement | null)[]>([]);

	const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
		const last = USE_CASES.length - 1;
		const moves: Record<string, number> = {
			ArrowDown: active === last ? 0 : active + 1,
			ArrowRight: active === last ? 0 : active + 1,
			ArrowUp: active === 0 ? last : active - 1,
			ArrowLeft: active === 0 ? last : active - 1,
			Home: 0,
			End: last,
		};
		if (!(e.key in moves)) return;
		e.preventDefault();
		setActive(moves[e.key]);
		tabs.current[moves[e.key]]?.focus();
	};

	return (
		<div className='cases'>
			<div className='cases__tabs' role='tablist' aria-label='Industrias' aria-orientation='vertical'>
				{USE_CASES.map(({ id, industry }, i) => {
					const Icon = ICONS[id];
					return (
						<button
							key={id}
							ref={(el) => {
								tabs.current[i] = el;
							}}
							role='tab'
							type='button'
							id={`tab-${id}`}
							aria-selected={active === i}
							aria-controls={`panel-${id}`}
							tabIndex={active === i ? 0 : -1}
							onClick={() => setActive(i)}
							onKeyDown={onKeyDown}
						>
							<Icon aria-hidden />
							<span>{industry}</span>
						</button>
					);
				})}
			</div>

			<div className='cases__panels'>
				{USE_CASES.map(({ id, industry, problem, solution, services }, i) => (
					<div
						key={id}
						role='tabpanel'
						id={`panel-${id}`}
						aria-labelledby={`tab-${id}`}
						hidden={active !== i}
						className='cases__panel'
					>
						<h3>{industry}</h3>
						<div className='cases__problem'>
							<p className='cases__label'>El problema</p>
							<p>{problem}</p>
						</div>
						<div className='cases__solution'>
							<p className='cases__label'>Lo que construimos</p>
							<ul>
								{solution.map((item) => (
									<li key={item}>
										<PiCheck aria-hidden />
										{item}
									</li>
								))}
							</ul>
						</div>
						<div className='cases__foot'>
							<ul className='cases__tags' aria-label='Servicios relacionados'>
								{services.map((s) => (
									<li key={s}>{s}</li>
								))}
							</ul>
							<a
								href={whatsappUrl(
									`Hola Accio, tengo un negocio de ${industry.toLowerCase()} y me interesa ver qué podemos automatizar.`
								)}
								target='_blank'
								rel='noopener noreferrer'
								className='link-arrow'
							>
								Platicarlo por WhatsApp <PiArrowUpRight aria-hidden />
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
