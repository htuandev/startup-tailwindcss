/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			screens: {
				sm: '540px',
				md: '768px',
				lg: '992px',
				xl: '1140px',
				'2xl': '1320px',
			},
			colors: {
				primary: '#4a6cf7',
				'body-color': '#959cb1',
			},
		},
	},
	plugins: [],
};
