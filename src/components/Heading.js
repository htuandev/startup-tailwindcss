import React from 'react';

export default function Heading({title}) {
	return (
		<div className='w-full px-4'>
			<div className='mx-auto max-w-[700px] text-center mb-[100px] fadeInLeft-hidden'>
				<h2 className='text-black dark:text-white font-bold text-3xl sm:text-4xl md:text-[45px] mb-4'>{title}</h2>
				<p className='text-body-color text-base md:text-lg leading-relaxed md:leading-relaxed'>
					There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in
					some form.
				</p>
			</div>
		</div>
	);
}
