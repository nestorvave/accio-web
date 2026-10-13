import { PiPlus } from 'react-icons/pi';
import { FAQS } from '../site';

// <details> nativo: accesible, funciona sin JS y el texto queda en el HTML.
// El JSON-LD (faqLd en site.ts) se genera de los mismos datos.
export const Faq = () => (
	<div className='faq'>
		{FAQS.map(({ q, a }, i) => (
			<details key={q} className='faq__item' open={i === 0}>
				<summary>
					<h3>{q}</h3>
					<PiPlus aria-hidden className='faq__icon' />
				</summary>
				<div className='faq__answer'>
					<p>{a}</p>
				</div>
			</details>
		))}
	</div>
);
