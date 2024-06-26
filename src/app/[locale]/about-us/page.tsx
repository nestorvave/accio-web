
import React from 'react';
import { RiServiceFill, RiCustomerService2Fill } from 'react-icons/ri';
import { GiTalk, GiLaurelsTrophy, GiNetworkBars } from 'react-icons/gi';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Nosotros',
	description:
		'Descubre quiénes somos en Accio. Somos una empresa comprometida con la innovación en el desarrollo de software, enfocados en calidad, confianza y satisfacción del cliente.',
};



export default function AboutUs() {
	const values = [
		{
			icon: <RiCustomerService2Fill className='text-6xl text-gray-400' />,
			title: 'Calidad y servicio',
			description:
				'La satisfacción y recomendación de nuestros clientes son los pilares sobre los que construimos y seguiremos construyendo nuestra empresa',
		},
		{
			icon: <HiMiniUserGroup className='text-6xl text-gray-400' />,
			title: 'Trabajo en equipo',
			description:
				'Fomentamos un ambiente donde la colaboración y el apoyo mutuo son fundamentales para alcanzar nuestros objetivos.',
		},
		{
			icon: <RiServiceFill className='text-6xl text-gray-400' />,
			title: 'Pasión',
			description:
				'Nos apasiona buscar constantemente nuevas ideas y soluciones innovadoras que marquen la diferencia.',
		},
		{
			icon: <GiLaurelsTrophy className='text-6xl text-gray-400' />,
			title: 'Innovación disruptiva',
			description:
				'Enfocándonos en soluciones que no solo mejoran, sino que transforman industrias y procesos.',
		},
		{
			icon: <GiTalk className='text-6xl text-gray-400' />,
			title: 'Transparencia radical',
			description:
				'Adoptando una política de transparencia absoluta en la comunicación con clientes y empleados, compartiendo incluso los aspectos menos favorables del negocio.',
		},
		{
			icon: <GiNetworkBars className='text-6xl text-gray-400' />,
			title: 'Desarrollo profesional y personal',
			description:
				'Promovemos el crecimiento y el desarrollo continuo de nuestro equipo, apoyando tanto su desarrollo profesional como personal.',
		},
	];

	return (
		<>
			<h2 className='mt-10 text-center text-logo'>NOSOTROS</h2>
			<section className='flex w-full flex-col md:flex-row'>
				<div className='mt-6 flex md:w-1/2 flex-col gap-1'>
					<h3 className='text-center text-4xl font-bold text-main'>MISIÓN</h3>
					<p className='mt-3 text-center font-thin text-gray-600'>
						Facilitar el crecimiento y la innovación de empresas mediante
						soluciones tecnológicas avanzadas, creando productos digitales de
						vanguardia que optimicen procesos, mejoren la eficiencia operativa
						y potencien la competitividad global de nuestros clientes.
					</p>
				</div>
				<div className='mt-6 flex md:w-1/2 flex-col gap-1'>
					<h3 className='text-center text-4xl font-bold text-main'>VISIÓN</h3>
					<p className='mt-3 text-center font-thin text-gray-600'>
						Ser el socio tecnológico preferido por empresas visionarias que
						buscan llevar sus productos y servicios al siguiente nivel
						mediante soluciones digitales que combinan creatividad, eficiencia
						y escalabilidad.
					</p>
				</div>
			</section>

			<section className='mt-2'>
				<h2 className='mb-2 mt-10 text-center text-logo'>ACCIO</h2>
				<h3 className='text-center text-4xl font-bold text-main'>
					NUESTRO VALORES
				</h3>
				<section className='grid  md:grid-cols-3'>
					{values.map(({ title, description, icon }) => (
						<div key={title} className='flex flex-col items-center p-8 md:p-14'>
							{icon && icon}
							<h2 className='mb-2 mt-4 text-center text-2xl text-main'>
								{title}
							</h2>
							<p className='text-center text-logo'>{description}</p>
						</div>
					))}
				</section>
			</section>
		</>
	);
}
