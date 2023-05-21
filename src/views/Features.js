import React from 'react';
import Heading from './../components/Heading';
import {featuresList} from '../configs/configs';
import FeatureCard from '../components/FeatureCard';

export default function Features() {
	return (
		<section id='features' className='bg-screen pt-[120px] pb-[50px]'>
			<div className='container'>
				<div className='mx-wrap'>
					<Heading title={'Main Features'} />
				</div>
				<div className='mx-wrap gap-y-20'>
					{featuresList.map((f, i) => (
						<FeatureCard info={f} key={i} />
					))}
				</div>
			</div>
		</section>
	);
}
