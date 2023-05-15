import React, {useState} from 'react';
import Heading from '../components/Heading';
import {plans} from '../configs/configs';
import PlanCard from '../components/PlanCard';

export default function Pricing() {
	const [isChecked, setChecked] = useState(false);
	const handleChange = () => setChecked(!isChecked);

	return (
		<section id='pricing' className='relative z-10 pt-[120px] pb-20'>
			<div className='container'>
				<div className='flex flex-wrap mx-[-16px]'>
					<Heading title={'Simple and Affordable Pricing'} />
				</div>
				<div className='flex flex-wrap mx-[-16px]'>
					<div className='w-full px-4'>
						<div className='flex justify-center mb-16 fadeIn-hidden'>
							<span className='text-dark dark:text-white text-base font-semibold mr-4 monthly cursor-pointer'>
								Monthly
							</span>
							<label htmlFor='togglePlan' className='flex items-center cursor-pointer'>
								<div className='relative'>
									<input
										id='togglePlan'
										type='checkbox'
										className='sr-only'
										defaultChecked={isChecked}
										onChange={handleChange}
									/>
									<div className='w-14 h-5 bg-[#1D2144] rounded-full shadow-inner' />
									<div className='dot absolute w-7 h-7 bg-primary rounded-full top-[-4px] left-0 transition flex items-center justify-center'>
										<span className='active w-4 h-4 rounded-full bg-white' />
									</div>
								</div>
							</label>
							<span className='text-dark dark:text-white text-base font-semibold ml-4 yearly cursor-pointer'>
								Yearly
							</span>
						</div>
					</div>
				</div>
				<div className='flex flex-wrap mx-[-16px] plans gap-y-6'>
					{plans.map((p, i) => (
						<PlanCard plan={p} isMonthlyPackage={!isChecked} key={i} />
					))}
				</div>
			</div>
		</section>
	);
}
