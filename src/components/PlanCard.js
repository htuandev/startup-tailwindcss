import React from 'react';
import {list_services, toastEmitter} from '../configs/configs';
import {toast} from 'react-toastify';

export default function PlanCard({plan, isMonthlyPackage}) {
	const {plan_name, price, isAvailable} = plan;

	const services = list_services.map((s, i) => ({
		service_name: s,
		isAvailable: isAvailable[i],
	}));

	const handleSelect = () =>
		toast.info('Coming Soon', toastEmitter);

	return (
		<div className='w-full md:w-1/2 lg:w-1/3 px-4 shrink fadeIn-hidden plan-card'>
			<div className='relative z-10 card-gradient px-8 py-10 rounded-lg select-none cursor-pointer hover:outline hover:outline-offset-0 hover:outline-primary-800 dark:hover:outline-primary-100 transition-all h-full'>
				<h3 className='mb-2 text-4xl text-center font-semibold leading-tight text-body'>{plan_name}</h3>
				<h4 className='font-bold text-center text-body text-xl'>{isMonthlyPackage ? price.m : price.y}</h4>
				<p className='text-base text-sub mb-7 mt-3'>Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.</p>
				<div
					className='border-b border-sub dark:border-white border-opacity-10 dark:border-opacity-10 pb-8 mb-8 cursor-pointer select-none'
					onClick={handleSelect}
				>
					<span className='btn flex-center w-full bg-primary-600'>Start Free Trial</span>
				</div>
				<div className='list-services'>
					{services.map((s, i) => (
						<div className='flex items-center mb-3' key={i}>
							<span className=' text-primary-800 max-w-[18px] w-full h-[18px] mr-3 flex-center rounded-full'>
								{s.isAvailable ? <AvailableSVG /> : <NotAvailableSVG />}
							</span>
							<p className='text-base font-medium text-sub m-0'>{s.service_name}</p>
						</div>
					))}
				</div>
				<div className='absolute bottom-0 right-0 z-[-1]'>
					<RightSVG />
				</div>
			</div>
		</div>
	);
}

const AvailableSVG = () => (
	<svg width={8} height={6} viewBox='0 0 8 6' className='fill-primary-900 dark:fill-white'>
		<path d='M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z' />
	</svg>
);

const NotAvailableSVG = () => (
	<svg width={8} height={8} viewBox='0 0 8 8' className='fill-[#b76e78]'>
		<path
			d='M1.40102 0.95486C1.27421 0.828319 1.07219 0.828354 0.945421 0.954965C0.818519 1.08171 0.818519 1.28389 0.945421 1.41063L0.945612 1.41083L3.54915 4.00184L0.955169 6.60202C0.955106 6.60209 0.95504 6.60215 0.954978 6.60222C0.828263 6.72897 0.82833 6.93101 0.955169 7.05769C1.01288 7.11533 1.09989 7.15024 1.17815 7.15024C1.25641 7.15024 1.34342 7.11533 1.40113 7.05769L1.29513 6.95156L1.40113 7.05769L4.00493 4.45706L6.59917 7.0575L6.59936 7.05769C6.65707 7.11533 6.74408 7.15024 6.82234 7.15024C6.9006 7.15024 6.98761 7.11533 7.04532 7.05769C7.17215 6.93102 7.17222 6.729 7.04553 6.60224C7.04546 6.60217 7.04539 6.6021 7.04532 6.60202L4.46051 4.00165L7.05507 1.4009C7.05511 1.40085 7.05516 1.4008 7.05521 1.40076L7.05526 1.40071L6.94907 1.29477L1.40102 0.95486ZM1.40102 0.95486C1.40106 0.954895 1.40109 0.95493 1.40113 0.954965L1.40102 0.95486Z'
			strokeWidth='0.3'
		/>
	</svg>
);

const RightSVG = () => (
	<svg width={179} height={158} viewBox='0 0 179 158' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			opacity='0.5'
			d='M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z'
			fill='url(#paint0_linear_70:153)'
		/>
		<path
			opacity='0.3'
			d='M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z'
			fill='url(#paint1_linear_70:153)'
		/>
		<defs>
			<linearGradient
				id='paint0_linear_70:153'
				x1='69.6694'
				y1='29.9033'
				x2='196.108'
				y2='83.2919'
				gradientUnits='userSpaceOnUse'
			>
				<stop stopColor='#3052a3' stopOpacity='0.62' />
				<stop offset={1} stopColor='#3052a3' stopOpacity={0} />
			</linearGradient>
			<linearGradient
				id='paint1_linear_70:153'
				x1='165.348'
				y1='-75.4466'
				x2='-3.75136'
				y2='103.645'
				gradientUnits='userSpaceOnUse'
			>
				<stop stopColor='#3052a3' stopOpacity='0.62' />
				<stop offset={1} stopColor='#3052a3' stopOpacity={0} />
			</linearGradient>
		</defs>
	</svg>
);
