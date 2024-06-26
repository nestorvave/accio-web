import React from 'react';

interface IMeta {
	SeoTitle: string;
	SeoDescription: string;
}

export default function MetaTag({ SeoTitle, SeoDescription }: IMeta) {
	return (
		<>
			<title>metadata.component</title>
			<meta name={SeoTitle} content={SeoDescription} />
		</>
	);
}
