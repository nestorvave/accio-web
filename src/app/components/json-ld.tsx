// Inyecta datos estructurados (schema.org) escapando "<" para evitar cerrar el <script>.
export const JsonLd = ({ data }: { data: object }) => (
	<script
		type='application/ld+json'
		dangerouslySetInnerHTML={{
			__html: JSON.stringify(data).replace(/</g, '\\u003c'),
		}}
	/>
);
