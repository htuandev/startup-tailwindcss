import React from 'react';

export default function TestimonialCard({person}) {
	const {avatar, person_name, job_title} = person;
	return (
		<div className='w-full lg:w-1/2 px-4 fadeIn-hidden testimonial-card'>
			<div className='card-gradient relative z-10 overflow-hidden rounded-lg p-8 lg:px-6 xl:px-8 mb-10 select-none cursor-pointer hover:outline hover:outline-offset-0 hover:outline-primary-800 dark:hover:outline-primary-100 transition-all'>
				<div className='sm:flex justify-between lg:block xl:flex'>
					<div className='w-full flex items-center'>
						<div className='w-[60px] h-[60px] mt-2 mr-4'>
							<img src={avatar} alt={person_name} className='rounded-full overflow-hidden' />
						</div>
						<div className='w-full'>
							<h5 className='text-base md:text-lg lg:text-base xl:text-lg text-body font-medium mb-1'>
								{person_name}
							</h5>
							<p className='text-base font-medium text-sub'>{job_title}</p>
						</div>
					</div>
					<div className='max-w-[150px] w-full flex items-center sm:justify-end lg:justify-start xl:justify-end mt-4 sm:mt-0 lg:mt-4 xl:mt-0'>
						<div>
							<div className='flex items-center'>
								<RatingStar />
								<RatingStar />
								<RatingStar />
								<RatingStar />
								<RatingStar />
							</div>
							<p className='mt-2 text-sm font-medium text-sub'>Client's Review</p>
						</div>
					</div>
				</div>
				<p className='text-lg font-medium text-sub leading-relaxed pt-8 mt-6 border-t border-primary-800 dark:border-primary-100'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo urna massa, nec dictum velit dignissim
					ac. Curabitur non cursus tortor. Nunc dignissim accumsan commodo.
				</p>
				<div className='absolute right-0 bottom-0 z-[-1]'>
					<svg width={49} height={60} viewBox='0 0 49 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<circle
							opacity='0.4'
							cx={37}
							cy={37}
							r={36}
							transform='rotate(-165 37 37)'
							fill='url(#paint0_linear_77:14)'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_77:14'
								x1='36.3685'
								y1='91.4954'
								x2='36.3685'
								y2='5.62385'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#b76e78' />
								<stop offset={1} stopColor='#b76e78' stopOpacity={0} />
							</linearGradient>
						</defs>
					</svg>
				</div>
			</div>
		</div>
	);
}

const RatingStar = () => (
	<span className='text-[#fbb040] mr-1 block'>
		<svg width={18} height={16} viewBox='0 0 18 16' className='fill-current'>
			<path d='M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z' />
		</svg>
	</span>
);
