import React from 'react';

export default function BlogCard({info}) {
	const {category, imgSrc, title, author_name, avatar} = info;
	return (
		<div className='w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4 fadeIn-hidden blog-card'>
			<div className='relative card-gradient overflow-hidden mb-10 group'>
				<div className='w-full block relative'>
					<div className=' overflow-hidden'>
						<span className='absolute cursor-pointer top-6 right-6 bg-primary-800 rounded-full flex-center py-2 px-4 font-semibold text-sm text-primary-50 z-20'>
							{category}
						</span>
						<img src={imgSrc} alt={title} className='w-full cursor-pointer group-hover:scale-110 transition-all duration-500' />
					</div>
					<div className='p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8'>
						<h3 className=' cursor-pointer font-bold text-body text-xl sm:text-2xl block mb-4 hover:text-primary-600 dark:hover:text-primary-500'>
							{title}
						</h3>
						<p className='text-base text-sub font-medium pb-6 mb-6 border-b border-sub border-opacity-10 dark:border-primary-50 dark:border-opacity-10'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
						</p>
						<div className='flex items-center'>
							<div className='flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-sub border-opacity-10 dark:border-primary-50 dark:border-opacity-10'>
								<div className='max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4'>
									<img src={avatar} alt={author_name} className='w-full cursor-pointer' />
								</div>
								<div className='w-full'>
									<h4 className='text-sm font-medium text-body mb-1'>
										<span className='cursor-pointer hover:text-primary-600 dark:hover:text-primary-500'>{author_name}</span>
									</h4>
									<p className='text-xs text-sub'>Content Writer</p>
								</div>
							</div>
							<div className='inline-block'>
								<h4 className='text-sm font-medium text-body mb-1'>Date</h4>
								<p className='text-xs text-sub'>June 10, 2023</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
