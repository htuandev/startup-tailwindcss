import {useEffect} from 'react';
import Features from './views/Features';
import Hero from './views/Hero';
import {animateList} from './configs/configs';
import {animateJS} from './utils/utils';
import LightBox from './views/LightBox';
import About from './views/About';
import Testimonial from './views/Testimonial';
import Pricing from './views/Pricing';

function App() {
	useEffect(() => {
		animateList.map((animate) => animateJS(animate));
	});

	return (
		<>
			<Hero />
			<Features />
			<LightBox />
			<About/>
			<Testimonial/>
			<Pricing/>
		</>
	);
}

export default App;
