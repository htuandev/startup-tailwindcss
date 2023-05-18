import React from 'react';
import SubscribeSVG from '../components/SVG/SubscribeSVG';

export default function Contact() {
	return (
		<section id='contact' className='pt-[120px] pb-20 overflow-hidden'>
			<div className='container'>
				<div className='flex flex-wrap mx-[-16px]'>
					<div className='w-full lg:w-8/12 px-4 shrink'>
						<div className=' bg-primary bg-opacity-[3%] dark:bg-[#1d2144] rounded-md p-11 sm:p-[55px] lg:p-11 xl:p-[55px] fadeInUp-hidden shrink'>
							<div className='h-full'>
								<h2 className='font-bold text-black dark:text-white text-2xl sm:text-3xl lg:text-2xl xl:text-3xl mb-3'>
									Need Help? Open a Ticket
								</h2>
								<p className='text-body-color text-base font-medium mb-12'>
									Our support team will get back to you ASAP via email.
								</p>
								<form>
									<div className='flex flex-wrap mx-[-16px]'>
										<div className='w-full md:w-1/2 px-4'>
											<div className='mb-8'>
												<label htmlFor='name' className='block text-sm font-medium text-dark dark:text-white mb-3'>
													Your Name
												</label>
												<input
													type='text'
                                                    name='name'
													placeholder='Enter your name'
													className='w-full border border-transparent dark:bg-[#242B51] rounded-md py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary'
												/>
											</div>
										</div>
										<div className='w-full md:w-1/2 px-4'>
											<div className='mb-8'>
												<label htmlFor='email' className='block text-sm font-medium text-dark dark:text-white mb-3'>
													Your Email
												</label>
												<input
													type='email'
                                                    name='email'
													placeholder='Enter your email'
													className='w-full border border-transparent dark:bg-[#242B51] rounded-md py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary'
												/>
											</div>
										</div>
										<div className='w-full px-4'>
											<div className='mb-8'>
												<label htmlFor='message' className='block text-sm font-medium text-dark dark:text-white mb-3'>
													Your Message
												</label>
												<textarea
													name='message'
													rows={5}
													placeholder='Enter your Message'
													className='w-full border border-transparent dark:bg-[#242B51] rounded-md py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary resize-none'
													defaultValue={''}
												/>
											</div>
										</div>
										<div className='w-full px-4 grid place-items-center'>
											<div className=' cursor-pointer text-base font-medium text-white bg-primary py-4 px-9 hover:bg-opacity-80 rounded-md transition duration-300 ease-in-out'>
												Submit Ticket
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className='w-full lg:w-4/12 px-4 shrink'>
						<div className='relative z-10 rounded-md bg-primary bg-opacity-20 dark:bg-[#16215b] p-8 sm:p-11 lg:p-8 xl:p-11 h-full fadeInUp-hidden'>
							<div>
								<h3 className='text-black dark:text-white font-bold text-2xl leading-tight mb-4'>
									Subscribe to receive future updates
								</h3>
								<p className='font-medium text-base text-body-color leading-relaxed pb-11 mb-11 border-b border-body-color border-opacity-25 dark:border-white dark:border-opacity-25'>
									Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.
								</p>
								<form>
									<input
										type='text'
										name='name'
										placeholder='Enter your name'
										className='w-full border border-body-color border-opacity-10 dark:border-white dark:border-opacity-10 dark:bg-[#242B51] rounded-md py-3 px-6 font-medium text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary focus:border-opacity-100 mb-4'
									/>
									<input
										type='email'
										name='email'
										placeholder='Enter your email'
										className='w-full border border-body-color border-opacity-10 dark:border-white dark:border-opacity-10 dark:bg-[#242B51] rounded-md py-3 px-6 font-medium text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary focus:border-opacity-100 mb-4'
									/>
									<div className='w-full border border-primary bg-primary rounded-md py-3 px-6 font-medium text-white text-base text-center outline-none cursor-pointer focus-visible:shadow-none hover:bg-opacity-80 transition duration-80 ease-in-out mb-4'>
										Subscribe
									</div>
									<p className='text-base text-body-color text-center font-medium leading-relaxed'>
										No spam guaranteed, So please don’t send any spam mail.
									</p>
								</form>
                                <div className='absolute top-0 left-0 z-[-1]'>
                                    <SubscribeSVG/>
                                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
