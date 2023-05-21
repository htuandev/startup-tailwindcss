import React, {useEffect} from 'react';
import Heading from '../components/Heading';
import PlaySVG from '../components/SVG/PlaySVG';
import GLightbox from 'glightbox';
import Shape from '../assets/shape.svg';
import Preview from '../assets/preview.jpg';
import {glightboxOptions} from '../configs/configs';

export default function LightBox() {
	useEffect(() => {
		const glightbox = GLightbox(glightboxOptions);
		return () => {
			glightbox.destroy();
		};
	}, []);

	return (
		<section id='support' className='relative z-10 py-[120px]'>
			<div className='container'>
				<div className='mx-wrap'>
					<Heading title={'We are ready to help'} />
				</div>
				<div className='mx-wrap'>
					<div className='w-full px-4'>
						<div className='mx-auto max-w-[770px] rounded-md overflow-hidden fadeIn-hidden'>
							<div className='relative items-center justify-center'>
								<img src={Preview} alt='preview' className='w-full h-full object-cover object-center' />
								<div className='absolute w-full h-full top-0 right-0 flex-center'>
									<span className='glightbox cursor-pointer w-[70px] h-[70px] rounded-full flex-center bg-[#b76e78] bg-opacity-50  hover:bg-opacity-80 transition'>
										<PlaySVG />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='absolute bottom-0 left-0 right-0 z-[-1]'>
				<img src={Shape} alt='shape' className='w-full filtered-bp'/>
			</div>
		</section>
	);
}
