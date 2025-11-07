'use client';
import { BsLightbulb } from 'react-icons/bs';
import { RiGroupFill } from 'react-icons/ri';
import { AiOutlineStock } from 'react-icons/ai';
import { CiBookmarkCheck } from 'react-icons/ci';
export const WhyUs = () => {
	const features = [
		{
			icon: BsLightbulb,
			title: 'Innovación Constante',
			description:
				'Mantenemos nuestro equipo capacitado con las últimas tecnologías y mejores prácticas de la industria.',
		},
		{
			icon: RiGroupFill,
			title: 'Equipo Dedicado',
			description:
				'Profesionales apasionados que se comprometen con el éxito de cada proyecto.',
		},
		{
			icon: AiOutlineStock,
			title: 'Escalabilidad',
			description:
				'Soluciones arquitectadas para crecer con tu negocio sin comprometer el rendimiento.',
		},
		{
			icon: CiBookmarkCheck,
			title: 'Calidad Garantizada',
			description:
				'Procesos rigurosos de testing y QA para entregar código confiable y robusto.',
		},
	];
	return (
		<section className='section-container my-16'>
			<div className='container'>
				<div className='grid items-center gap-12 lg:grid-cols-2'>
					{/* Left Content */}
					<div className='space-y-8'>
						<h2 className='text-4xl font-bold text-black md:text-5xl'>
							¿Por qué elegir <span className='gradient-text'>Accio</span>?
						</h2>

						<p className='text-lg text-black/70'>
							Con más de 8 años de experiencia, hemos ayudado a empresas de
							todos los tamaños a transformar sus ideas en soluciones
							digitales exitosas.
						</p>

						<div className='space-y-4'>
							{features.map((feature, index) => {
								const Icon = feature.icon;
								return (
									<div key={index} className='flex gap-4'>
										<div className='flex-shrink-0'>
											<Icon className='mt-1 h-6 w-6 text-main' />
										</div>
										<div>
											<h3 className='mb-1 font-semibold text-black'>
												{feature.title}
											</h3>
											<p className='text-sm text-black/60'>
												{feature.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<div className='relative hidden h-96 md:h-[500px] lg:block'>
						<div className='to-secondary/20 absolute inset-0 rounded-3xl bg-gradient-to-br from-main/20' />
						<div className='absolute inset-0 flex items-center justify-center'>
							<div className='space-y-6 px-8'>
								<div className='flex items-center gap-3'>
									<div className='h-2 w-2 rounded-full bg-main' />
									<div
										className='h-2 flex-1 rounded bg-main/30'
										style={{ width: '120px' }}
									/>
								</div>
								<div className='flex items-center gap-3'>
									<div className='h-2 w-2 rounded-full bg-[#228EC3]' />
									<div
										className='h-2 flex-1 rounded bg-[#228EC3]/30'
										style={{ width: '160px' }}
									/>
								</div>
								<div className='flex items-center gap-3'>
									<div className='h-2 w-2 rounded-full bg-[#AD2BEE]' />
									<div
										className='h-2 flex-1 rounded bg-[#AD2BEE]/30'
										style={{ width: '140px' }}
									/>
								</div>
								<div className='flex items-center gap-3'>
									<div className='h-2 w-2 rounded-full bg-main' />
									<div
										className='h-2 flex-1 rounded bg-main/30'
										style={{ width: '150px' }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
