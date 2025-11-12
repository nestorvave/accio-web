import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
	return (
		<footer className='mt-12 bg-gray-900'>
			<div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
				<div className='md:flex md:justify-between'>
					<div className='mb-6 w-2/3 md:mb-0 md:w-4/12'>
						<Link href={'/'} className='w-1/2 md:w-auto'>
							<Image src={'/logo.png'} alt='logo' width={300} height={0} />
						</Link>
					</div>
					<div className='flex gap-8 sm:gap-6 md:grid md:grid-cols-2'>
						<div>
							<h2 className='mb-6 text-sm font-semibold uppercase text-white'>
								Contacto
							</h2>
							<ul className='font-medium text-gray-400'>
								<li className='mb-4'>
									<a
										href='mailto:accio.ti.solutions@gmail.com'
										className='break-words hover:underline'
									>
										accio.ti.solutions@gmail.com
									</a>
								</li>
								<li>
									<a
										href='tel:+527773635639'
										className='hover:underline'
									>
										+52-(777)-363-56-39
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className='mb-6 text-sm font-semibold uppercase text-white'>
								Síguenos
							</h2>
							<ul className='font-medium text-gray-400'>
								<li className='mb-4'>
									<a
										href='https://www.instagram.com/accio.hub/'
										className='hover:underline'
										target='_blank'
									>
										Instagram
									</a>
								</li>
							</ul>
							<ul className='font-medium text-gray-400'>
								<li className='mb-4'>
									<a
										href='https://www.linkedin.com/company/accio-inc '
										className='hover:underline'
										target='_blank'
									>
										Linkedin
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='my-6 border-gray-700 sm:mx-auto lg:my-8' />
				<div className='sm:flex sm:items-center sm:justify-between'>
					<span className='text-sm text-gray-400 sm:text-center'>
						© 2025{' '}
						<a href='https://www.accio.mx/' className='hover:underline'>
							Accio.mx™
						</a>
						. All Rights Reserved.
					</span>

					<div className='mt-4 flex sm:mt-0 sm:justify-center'>
						{/* Instagram */}
						<a
							href='https://www.instagram.com/accio.hub/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-500 transition hover:text-pink-500'
						>
							<FaInstagram className='h-5 w-5' />
							<span className='sr-only'>Instagram</span>
						</a>

						{/* LinkedIn */}
						<a
							href='https://www.linkedin.com/company/accio-inc'
							target='_blank'
							rel='noopener noreferrer'
							className='ml-5 text-gray-500 transition hover:text-blue-500'
						>
							<FaLinkedin className='h-5 w-5' />
							<span className='sr-only'>LinkedIn</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
