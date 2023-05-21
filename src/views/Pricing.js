import React, {useState} from 'react';
import Heading from '../components/Heading';
import {plans} from '../configs/configs';
import PlanCard from '../components/PlanCard';

export default function Pricing() {
	const [isChecked, setChecked] = useState(false);
	const handleChange = () => setChecked(!isChecked);
	const handleClick = () => document.getElementById('togglePlan').click();

	return (
		<section id='pricing' className='relative z-10 pt-[120px] pb-20'>
			<div className='container'>
				<div className='mx-wrap'>
					<Heading title={'Simple and Affordable Pricing'} />
				</div>
				<div className='mx-wrap'>
					<div className='w-full px-4'>
						<div className='flex justify-center mb-16 fadeIn-hidden select-none'>
							<span className='text-body text-base font-semibold mr-4 select-none cursor-pointer' onClick={handleClick}>
								Monthly
							</span>
							<label htmlFor='togglePlan' className='flex items-center cursor-pointer'>
								<div className='relative'>
									<input
										id='togglePlan'
										type='checkbox'
										className='sr-only '
										defaultChecked={isChecked}
										onChange={handleChange}
									/>
									<div className='w-14 h-5 bg-primary-800 bg-opacity-20 rounded-full shadow-inner' />
									<div className='dot absolute w-7 h-7 bg-primary-800 rounded-full top-[-4px] left-0 transition flex-center'>
										<span className='active w-4 h-4 rounded-full bg-white' />
									</div>
								</div>
							</label>
							<span className='text-body text-base font-semibold ml-4 cursor-pointer select-none' onClick={handleClick}>
								Yearly
							</span>
						</div>
					</div>
				</div>
				<div className='mx-wrap plans gap-y-6 justify-center'>
					{plans.map((p, i) => (
						<PlanCard plan={p} isMonthlyPackage={!isChecked} key={i} />
					))}
				</div>
			</div>
		</section>
	);
}
