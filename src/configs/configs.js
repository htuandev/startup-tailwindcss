import {
	FeatureSVG1,
	FeatureSVG2,
	FeatureSVG3,
	FeatureSVG4,
	FeatureSVG5,
	FeatureSVG6,
} from '../components/SVG/FeatureSVG';

export const animateList = ['fadeIn', 'fadeInLeft', 'fadeInUp'];

export const featuresList = [
	{
		title: 'Crafted for Startups',
		svg: <FeatureSVG1 />,
	},
	{
		title: 'High-quality Design',
		svg: <FeatureSVG2 />,
	},
	{
		title: 'All Essential Components',
		svg: <FeatureSVG3 />,
	},
	{
		title: 'Speed Optimized',
		svg: <FeatureSVG4 />,
	},
	{
		title: 'Fully Customizable',
		svg: <FeatureSVG5 />,
	},
	{
		title: 'Regular Updates',
		svg: <FeatureSVG6 />,
	},
];

export const reviewers = [
	{
		person_name: 'Roseanne Park',
		job_title: 'Vocalist | Dancer',
		avatar: '/images/Roseanne_Park.jpg',
	},
	{
		person_name: 'Kim Ji-soo',
		job_title: 'Vocalist | Visual',
		avatar: '/images/Kim_Jisoo.jpg',
	},
	{
		person_name: 'Lalisa Manobal',
		job_title: 'Dancer | Rapper | Vocalist',
		avatar: '/images/Lalisa_Manobal.jpg',
	},
	{
		person_name: 'Jennie Kim',
		job_title: 'Rapper | Vocalist | Dancer',
		avatar: '/images/Jennie_Kim.jpg',
	},
];

export const plans = [
	{
		plan_name: 'Startup',
		price: {
			m: '$24.99/mo',
			y: '$239.76/yr',
		},
		isAvailable: [true, true, true, true, false, false],
	},
	{
		plan_name: 'Professional',
		price: {
			m: '$49.99/mo',
			y: '$359.76/yr',
		},
		isAvailable: [true, true, true, true, true, false],
	},
	{
		plan_name: 'Enterprise',
		price: {
			m: '$64.99/mo',
			y: '$719.76/yr',
		},
		isAvailable: [true, true, true, true, true, true],
	}
];

export const list_services = [
	'All UI Components',
	'Use with Unlimited Projects',
	'Commercial Use',
	'Email Support',
	'Lifetime Access',
	'Free Lifetime Updates',
];
