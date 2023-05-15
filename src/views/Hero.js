import React, {useEffect} from 'react';
import HeroSVGLeft from './../components/SVG/HeroSVGLeft';
import HeroSVGRight from '../components/SVG/HeroSVGRight';
import {animateJS, scrollIntoView} from '../utils/utils';

export default function Hero() {
	useEffect(() => {
		animateJS('fadeIn');
	});

	return (
		<section
			id='home'
			className='relative overflow-hidden z-10 pt-[120px] pb-[110px] md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]'
		>
			<div className='container'>
				<div className='flex flex-wrap mx-[-16px]'>
					<div className='w-full px-4'>
						<div className='mx-auto max-w-[570px] text-center fadeIn-hidden'>
							<div>
								<h1 className='text-black dark:text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-tight md:leading-tight mb-5'>
									Startup Focused Tailwind CSS Template
								</h1>
								<p className='font-medium text-lg md:text-xl leading-relaxed md:leading-relaxed text-body-color dark:text-white dark:opacity-90 mb-12'>
									A Complete Tailwind CSS Web Template Crafted for - Startup, SaaS, Business, Software and Agencies.
									Comes with high-quality design and everything you need!
								</p>
							</div>

							<div className='flex items-center justify-center'>
								<span
									className=' cursor-pointer text-base font-semibold text-white bg-primary py-4 px-8 hover:bg-opacity-80 mx-2 rounded-md transition duration-300 ease-in-out'
									onClick={() => scrollIntoView('features')}
								>
									Get Started
								</span>
								<span
									className='cursor-pointer text-base font-semibold text-black bg-black bg-opacity-10 dark:text-white dark:bg-white dark:bg-opacity-10 py-4 px-8 hover:bg-opacity-20 dark:hover:bg-opacity-20 mx-2 rounded-md transition duration-300 ease-in-out'
									onClick={() => scrollIntoView('about')}
								>
									Learn More
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='absolute top-0 right-0 z-[-1]'>
				<HeroSVGRight />
			</div>
			<div className='absolute bottom-0 left-0 z-[-1]'>
				<HeroSVGLeft />
			</div>
		</section>
	);
}
