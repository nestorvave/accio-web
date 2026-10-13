import type { Metadata } from 'next';

// Datos del negocio usados en UI, metadata y JSON-LD. Un solo lugar para editarlos.
export const SITE_URL = 'https://accio.mx';
export const SITE_NAME = 'Accio';
export const TAGLINE = 'Software e IA para resolver problemas reales';
export const SOCIAL_IMAGE = '/og/accio-og.png';
export const LOGO_PNG = '/icon-512.png';

export const CONTACT = {
	email: 'accio.ti.solutions@gmail.com',
	phone: '+527773635639',
	phoneLabel: '+52 777 363 56 39',
	instagram: 'https://www.instagram.com/accio.hub/',
	linkedin: 'https://www.linkedin.com/company/accio-inc',
	whatsapp: '527773635639',
	city: 'Cuernavaca',
	region: 'Morelos',
	regionCode: 'MX-MOR',
};

export const WHATSAPP_DEFAULT_MESSAGE =
	'Hola Accio, me gustaría platicar sobre un proyecto.';

export const whatsappUrl = (message = WHATSAPP_DEFAULT_MESSAGE) =>
	`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export type ServiceId =
	| 'chatbots'
	| 'ai'
	| 'software'
	| 'web'
	| 'mobile'
	| 'integrations';

export const SERVICES: {
	id: ServiceId;
	name: string;
	short: string;
	label: string;
	intro: string;
	detail: string;
	includes: string[];
}[] = [
	{
		id: 'chatbots',
		name: 'Chatbots y asistentes de IA',
		short: 'Asistentes conectados a tu negocio que atienden, califican prospectos y pasan la conversación a una persona cuando hace falta.',
		label: 'Atención · Ventas · Soporte',
		intro: 'Respuestas útiles, con el contexto de tu negocio.',
		detail: 'Diseñamos chatbots y asistentes conversacionales conectados a la información y los procesos de tu empresa. Pueden responder preguntas frecuentes, orientar a tus clientes, calificar prospectos o ayudar a tu equipo a encontrar información; y escalar la conversación con una persona cuando se necesita.',
		includes: [
			'Asistentes entrenados con información de tu negocio',
			'Integración con canales y sistemas existentes',
			'Derivación a una persona y mejora continua',
		],
	},
	{
		id: 'ai',
		name: 'IA aplicada y automatización',
		short: 'Quitamos tareas repetitivas: captura, clasificación, reportes y seguimiento.',
		label: 'Inteligencia artificial · Flujos de trabajo',
		intro: 'Menos tareas repetitivas. Más capacidad para resolver.',
		detail: 'Identificamos procesos donde la inteligencia artificial y la automatización pueden ahorrar tiempo, ordenar información o ayudar a tu equipo a responder mejor. Integramos IA dentro de productos y flujos existentes, con revisión humana donde hace falta.',
		includes: [
			'Automatización de tareas y flujos',
			'Asistentes con información de tu negocio',
			'Integración de modelos de IA en software',
		],
	},
	{
		id: 'software',
		name: 'Software a la medida',
		short: 'Sistemas que ordenan procesos y conectan la información de tu operación.',
		label: 'Sistemas · Paneles · Datos',
		intro: 'Menos hojas de cálculo sueltas. Más visibilidad.',
		detail: 'Convertimos flujos manuales y herramientas desconectadas en sistemas que simplifican el trabajo, reducen errores y dan visibilidad a tu equipo.',
		includes: [
			'Herramientas internas a medida',
			'Paneles de operación y reportes',
			'Roles, permisos y control de acceso',
		],
	},
	{
		id: 'web',
		name: 'Sitios web y plataformas',
		short: 'Sitios, tiendas y portales rápidos, accesibles y fáciles de encontrar en Google.',
		label: 'Web · E-commerce · Portales',
		intro: 'Una presencia digital que trabaja tan bien como se ve.',
		detail: 'Diseñamos y desarrollamos sitios, tiendas y plataformas web rápidas, accesibles y fáciles de mantener. Cada pantalla ayuda a tus usuarios a encontrar lo que necesitan y avanzar.',
		includes: [
			'Diseño adaptable y accesible',
			'Rendimiento y SEO técnico',
			'Integraciones con tus herramientas',
		],
	},
	{
		id: 'mobile',
		name: 'Aplicaciones móviles',
		short: 'Apps para iOS y Android enfocadas en tareas reales de tus clientes o tu equipo.',
		label: 'iOS · Android · Multiplataforma',
		intro: 'Experiencias útiles que tus clientes llevan consigo.',
		detail: 'Creamos aplicaciones móviles enfocadas en tareas reales: desde una primera versión para validar una idea hasta un producto conectado con tus sistemas y preparado para crecer.',
		includes: [
			'Experiencias pensadas para móvil',
			'Conexión con APIs y servicios',
			'Publicación y evolución continua',
		],
	},
	{
		id: 'integrations',
		name: 'Integraciones y APIs',
		short: 'Tus herramientas intercambian datos sin captura doble.',
		label: 'Conectividad · Arquitectura',
		intro: 'Tus sistemas intercambian información sin fricción.',
		detail: 'Conectamos plataformas, servicios y datos para que tus herramientas trabajen como un solo ecosistema y tu equipo deje de duplicar esfuerzos.',
		includes: [
			'Integraciones con terceros',
			'APIs seguras y documentadas',
			'Arquitectura lista para escalar',
		],
	},
];

// Casos de uso ilustrativos por industria (no son clientes ni cifras reales).
export const USE_CASES = [
	{
		id: 'salud',
		industry: 'Clínicas y consultorios',
		problem:
			'La agenda vive en el teléfono y en WhatsApp. Confirmar citas y recordar a cada paciente consume horas de recepción.',
		solution: [
			'Asistente que agenda, confirma y reprograma citas por chat',
			'Recordatorios automáticos antes de cada consulta',
			'Agenda conectada a tu sistema o a una herramienta a la medida',
		],
		services: ['Chatbots', 'Automatización'],
	},
	{
		id: 'inmobiliarias',
		industry: 'Inmobiliarias',
		problem:
			'Llegan prospectos de portales y redes, pero muchos se enfrían antes de que alguien les responda.',
		solution: [
			'Respuesta inmediata con información de cada propiedad',
			'Calificación por presupuesto, zona y tipo de inmueble',
			'Visitas agendadas y seguimiento en tu CRM',
		],
		services: ['Chatbots', 'Integraciones'],
	},
	{
		id: 'comercio',
		industry: 'Comercio y tiendas en línea',
		problem:
			'Las mismas preguntas sobre existencias, envíos y pagos se responden a mano todos los días.',
		solution: [
			'Tienda en línea rápida y fácil de administrar',
			'Asistente conectado a inventario y estado de pedidos',
			'Avisos automáticos de envío y postventa',
		],
		services: ['Web', 'Chatbots'],
	},
	{
		id: 'despachos',
		industry: 'Despachos y servicios profesionales',
		problem:
			'Documentos por correo, datos capturados a mano y clientes que preguntan una y otra vez por el estatus.',
		solution: [
			'Portal de clientes con estatus y documentos',
			'Extracción de datos de facturas y documentos con IA',
			'Recordatorios y tareas automáticas para el equipo',
		],
		services: ['Software', 'IA aplicada'],
	},
	{
		id: 'educacion',
		industry: 'Escuelas y capacitación',
		problem:
			'Informes, inscripciones y pagos se atienden por varios canales y nadie tiene la foto completa.',
		solution: [
			'Asistente de admisiones disponible a toda hora',
			'Inscripción y pagos en línea en un solo flujo',
			'Panel con prospectos, alumnos y seguimiento',
		],
		services: ['Chatbots', 'Software'],
	},
	{
		id: 'distribucion',
		industry: 'Distribución y logística',
		problem:
			'Los pedidos llegan por WhatsApp y se pasan a Excel. Los errores aparecen cuando el camión ya salió.',
		solution: [
			'Sistema de pedidos conectado a inventario',
			'Integración con tu ERP o sistema contable',
			'Panel de operación con rutas y entregas del día',
		],
		services: ['Software', 'Integraciones'],
	},
];

export const FAQS = [
	{
		q: '¿Cuánto cuesta desarrollar un software o un chatbot a la medida?',
		a: 'Depende del alcance: no es lo mismo un asistente que responde preguntas frecuentes que un sistema conectado a tu operación. Después de una primera conversación te enviamos una propuesta con alcance, tiempos y precio. Muchas veces conviene empezar con una primera versión pequeña y crecer desde ahí.',
	},
	{
		q: '¿Cuánto tiempo toma un proyecto?',
		a: 'Una primera versión funcional puede estar lista en 2 a 4 semanas; los sistemas más completos toman algunos meses. Trabajamos en ciclos cortos, así que ves avances reales desde las primeras semanas.',
	},
	{
		q: '¿Qué puede hacer un chatbot con IA por mi negocio?',
		a: 'Responder preguntas frecuentes, orientar a tus clientes, agendar citas, calificar prospectos y consultar información de tus sistemas, como pedidos o disponibilidad. Cuando la conversación lo necesita, la pasa a una persona de tu equipo.',
	},
	{
		q: '¿El chatbot puede funcionar en WhatsApp?',
		a: 'Sí. Podemos conectar el asistente a WhatsApp Business, a tu sitio web y a otros canales que ya usan tus clientes, para que la conversación ocurra donde ellos están.',
	},
	{
		q: '¿Cómo cuidan la información de mi empresa al usar IA?',
		a: 'Definimos contigo qué información puede consultar el asistente, limitamos los accesos a lo necesario y mantenemos revisión humana en los procesos sensibles. Te explicamos cada decisión técnica antes de ponerla en marcha.',
	},
	{
		q: '¿Trabajan con empresas fuera de Cuernavaca?',
		a: 'Sí. Estamos en Cuernavaca, Morelos, y trabajamos en línea con empresas de todo México.',
	},
	{
		q: '¿Ofrecen mantenimiento después del lanzamiento?',
		a: 'Sí. Ofrecemos soporte y mejora continua: actualizaciones, corrección de errores, optimización y nuevas funciones conforme crece tu negocio.',
	},
	{
		q: '¿Puedo hablar con el equipo técnico antes de decidir?',
		a: 'Claro. Agendamos una llamada con quien va a construir tu proyecto para revisar el reto a detalle, sin compromiso.',
	},
];

// Helper para generar metadata por página con canonical y OG consistentes.
export const pageMeta = ({
	title,
	description,
	path,
	keywords = [],
}: {
	title: string;
	description: string;
	path: string;
	keywords?: string[];
}): Metadata => ({
	title,
	description,
	keywords,
	alternates: { canonical: path, languages: { 'es-MX': path } },
	openGraph: {
		title: `${title} | ${SITE_NAME}`,
		description,
		url: path,
		siteName: SITE_NAME,
		locale: 'es_MX',
		type: 'website',
		images: [
			{
				url: SOCIAL_IMAGE,
				width: 1200,
				height: 630,
				type: 'image/png',
				alt: 'Accio: software e inteligencia artificial para resolver problemas reales',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: `${title} | ${SITE_NAME}`,
		description,
		images: [SOCIAL_IMAGE],
	},
});

// ---------- JSON-LD ----------
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

export const siteGraph = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': ['Organization', 'ProfessionalService'],
			'@id': ORG_ID,
			name: SITE_NAME,
			url: SITE_URL,
			logo: {
				'@type': 'ImageObject',
				url: `${SITE_URL}${LOGO_PNG}`,
				width: 512,
				height: 512,
			},
			image: `${SITE_URL}${SOCIAL_IMAGE}`,
			description:
				'Desarrollo de software a la medida, chatbots y automatización con inteligencia artificial para empresas en México.',
			slogan: TAGLINE,
			email: CONTACT.email,
			telephone: CONTACT.phone,
			address: {
				'@type': 'PostalAddress',
				addressLocality: CONTACT.city,
				addressRegion: CONTACT.region,
				addressCountry: 'MX',
			},
			areaServed: { '@type': 'Country', name: 'México' },
			knowsLanguage: 'es-MX',
			contactPoint: [
				{
					'@type': 'ContactPoint',
					contactType: 'sales',
					telephone: CONTACT.phone,
					email: CONTACT.email,
					areaServed: 'MX',
					availableLanguage: ['Spanish'],
					url: whatsappUrl(),
				},
			],
			sameAs: [CONTACT.instagram, CONTACT.linkedin],
			knowsAbout: [
				'Desarrollo de software a la medida',
				'Inteligencia artificial aplicada',
				'Chatbots con IA',
				'Automatización de procesos',
				'Integración de sistemas y APIs',
				'Desarrollo web',
				'Aplicaciones móviles',
			],
			hasOfferCatalog: {
				'@type': 'OfferCatalog',
				name: 'Servicios de software e inteligencia artificial',
				itemListElement: SERVICES.map((s) => ({
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: s.name,
						description: s.detail,
						url: `${SITE_URL}/servicios#${s.id}`,
					},
				})),
			},
		},
		{
			'@type': 'WebSite',
			'@id': SITE_ID,
			url: SITE_URL,
			name: SITE_NAME,
			description: TAGLINE,
			inLanguage: 'es-MX',
			publisher: { '@id': ORG_ID },
		},
	],
};

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: [{ name: 'Inicio', path: '/' }, ...items].map(
		(item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.name,
			item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
		})
	),
});

export const webPageLd = ({
	type = 'WebPage',
	name,
	description,
	path,
}: {
	type?: string;
	name: string;
	description: string;
	path: string;
}) => ({
	'@context': 'https://schema.org',
	'@type': type,
	'@id': `${SITE_URL}${path}#webpage`,
	url: `${SITE_URL}${path}`,
	name,
	description,
	inLanguage: 'es-MX',
	isPartOf: { '@id': SITE_ID },
	about: { '@id': ORG_ID },
	primaryImageOfPage: `${SITE_URL}${SOCIAL_IMAGE}`,
});

export const faqLd = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: FAQS.map(({ q, a }) => ({
		'@type': 'Question',
		name: q,
		acceptedAnswer: { '@type': 'Answer', text: a },
	})),
};
