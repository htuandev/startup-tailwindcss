import React from 'react';

export default function FeatureCard({info}) {
	const {title, svg} = info;
	return (
		<div className='w-full md:w-1/2 lg:w-1/3 px-4 fadeInUp-hidden feature-card'>
			<div className='w-[70px] h-[70px] flex-center rounded-md bg-primary-800 bg-opacity-20 mb-10 text-primary-800 dark:text-primary-500 select-none cursor-pointer group'>
				{svg}
			</div>
			<h3 className='font-bold text-body text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-5'>{title}</h3>
			<p className='text-sub text-base leading-relaxed font-medium pr-[10px]'>
				Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis
				earum sapiente non tempore? Fugit repellat ut maiores.
			</p>
		</div>
	);
}
