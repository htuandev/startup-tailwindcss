import {
	FeatureSVG1,
	FeatureSVG2,
	FeatureSVG3,
	FeatureSVG4,
	FeatureSVG5,
	FeatureSVG6,
} from '../components/SVG/FeatureSVG';

import Rosé from '../assets/Roseanne_Park.jpg';
import Jisoo from '../assets/Kim_Jisoo.jpg';
import Lisa from '../assets/Lalisa_Manobal.jpg';
import Jennie from '../assets/Jennie_Kim.jpg';
import BlackPink from '../assets/BP.jpg';
import BabyMonster from '../assets/BM.jpg';

import BlogPreview01 from '../assets/blog-01.jpg';
import BlogPreview02 from '../assets/blog-02.jpg';
import BlogPreview03 from '../assets/blog-03.jpg';
import {cssTransition} from 'react-toastify';

export const animateList = ['fadeIn', 'fadeInLeft', 'fadeInUp'];

export const tuanhngf = 'https://tuanhngf.dev/'

export const glightboxOptions = {
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
	type: 'video',
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
};

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
		avatar: Rosé,
	},
	{
		person_name: 'Kim Ji-soo',
		job_title: 'Vocalist | Visual',
		avatar: Jisoo,
	},
	{
		person_name: 'Lalisa Manobal',
		job_title: 'Dancer | Rapper | Vocalist',
		avatar: Lisa,
	},
	{
		person_name: 'Jennie Kim',
		job_title: 'Rapper | Vocalist | Dancer',
		avatar: Jennie,
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
	},
];

export const list_services = [
	'All UI Components',
	'Use with Unlimited Projects',
	'Commercial Use',
	'Email Support',
	'Lifetime Access',
	'Free Lifetime Updates',
];

export const list_blogs = [
	{
		category: 'Computer',
		imgSrc: BlogPreview01,
		title: 'Best UI components for modern websites',
		author_name: 'BlackPink',
		avatar: BlackPink,
	},
	{
		category: 'Design',
		imgSrc: BlogPreview02,
		title: '9 simple ways to improve your design skills',
		author_name: 'Roseanne Park',
		avatar: Rosé,
	},
	{
		category: 'Computer',
		imgSrc: BlogPreview03,
		title: 'Tips to quickly improve your coding speed.',
		author_name: 'BabyMonster',
		avatar: BabyMonster,
	},
];

export const list_displays = [
	{
		id: 'features',
		name: 'Features',
	},
	{
		id: 'about',
		name: 'About',
	},
	{
		id: 'testimonial',
		name: 'Reviews',
	},
	{
		id: 'pricing',
		name: 'Pricing',
	},
	{
		id: 'contact',
		name: 'Contact',
	},
];

export const toastEmitter = {
	position: 'top-right',
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'colored',
	transition: cssTransition({
		enter: 'animate__animated animate__bounceIn',
		exit: 'animate__animated animate__bounceOut',
	}),
};
