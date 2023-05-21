import React from 'react';
import TestimonialSVGRight from '../components/SVG/TestimonialSVGRight';
import TestimonialSVGLeft from '../components/SVG/TestimonialSVGLeft';
import Heading from '../components/Heading';
import {reviewers} from '../configs/configs';
import TestimonialCard from '../components/TestimonialCard';

export default function Testimonial() {
	return (
		<section id='testimonial' className='relative z-10 pt-[120px] pb-20 bg-screen'>
			<div className='container'>
				<div className='mx-wrap'>
					<Heading title={'What Our Users Says'} />
				</div>
				<div className='flex flex-wrap justify-center mx-[-16px]'>
					{reviewers.map((p, i) => (
						<TestimonialCard person={p} key={i} />
					))}
				</div>
			</div>
			<div className='absolute top-5 right-0 z-[-1]'>
				<TestimonialSVGRight />
			</div>
			<div className='absolute left-0 bottom-5 z-[-1]'>
				<TestimonialSVGLeft />
			</div>
		</section>
	);
}
