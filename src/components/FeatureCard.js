import React from 'react';

export default function FeatureCard({info}) {
	const {title, svg} = info;
	return (
		<div className='w-full md:w-1/2 lg:w-1/3 px-4'>
			<div className='mb-[70px] fadeIn-hidden'>
				<div className='w-[70px] h-[70px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 mb-10 text-primary'>
					{svg}
				</div>
				<h3 className='font-bold text-black dark:text-white text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-5'>
					{title}
				</h3>
				<p className='text-body-color text-base leading-relaxed font-medium pr-[10px]'>
					Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis
					earum sapiente non tempore? Fugit repellat ut maiores.
				</p>
			</div>
		</div>
	);
}
