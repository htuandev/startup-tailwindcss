import React, {useEffect} from 'react';
import Heading from '../components/Heading';
import PlaySVG from '../components/SVG/PlaySVG';
import GLightbox from 'glightbox';

export default function LightBox() {
	useEffect(() => {
		const glightbox = GLightbox({
			source: 'youtube',
			autoplayVideos: true,
			openEffect: 'zoom',
			closeEffect: 'fade',
			cssEffects: {
				fade: {in: 'fadeIn', out: 'fadeOut'},
				zoom: {in: 'zoomIn', out: 'zoomOut'},
			},
			touchNavigation: true,
			closeOnOutsideClick: false,
			href: 'https://youtu.be/3Ne55EliHKU',
			type: "video",
			plyr: {
				config: {
					ratio: '16:9', // or '4:3'
					muted: false,
					hideControls: false,
					youtube: {
						noCookie: true,
						rel: 0,
						showinfo: 0,
						iv_load_policy: 3,
					},
				},
			},
		});
		return ()=> {
			glightbox.destroy()
		}
	},[]);

	return (
		<section className='relative z-10 py-[120px]'>
			<div className='container'>
				<div className='flex flex-wrap mx-[-16px]'>
					<Heading title={'We are ready to help'} />
				</div>
				<div className='flex flex-wrap mx-[-16px]'>
					<div className='w-full px-4'>
						<div className='mx-auto max-w-[770px] rounded-md overflow-hidden fadeIn-hidden'>
							<div className='relative items-center justify-center'>
								<img src='/images/preview.jpg' alt='preview' className='w-full h-full object-cover object-center' />
								<div className='absolute w-full h-full top-0 right-0 flex items-center justify-center'>
									<span
										className='glightbox cursor-pointer w-[70px] h-[70px] rounded-full flex items-center justify-center bg-white bg-opacity-75 text-primary hover:bg-opacity-100 transition'
									>
										<PlaySVG />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='absolute bottom-0 left-0 right-0 z-[-1]'>
				<img src='/images/shape.svg' alt='shape' className='w-full' />
			</div>
		</section>
	);
}
