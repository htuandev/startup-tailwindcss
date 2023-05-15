import React from 'react';
import Heading from './../components/Heading';
import {featuresList} from '../configs/configs';
import FeatureCard from '../components/FeatureCard';

export default function Features() {
	return (
		<section id='features' className='bg-primary bg-opacity-[3%] pt-[120px] pb-[50px]'>
			<div className='container'>
				<div className='flex flex-wrap mx-[-16px]'>
					<Heading title={'Main Features'} />
				</div>
				<div className='flex flex-wrap mx-[-16px]'>
					{featuresList.map((f, i) => (
						<FeatureCard info={f} key={i} />
					))}
				</div>
			</div>
		</section>
	);
}
