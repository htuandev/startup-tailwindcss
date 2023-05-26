import {useEffect} from 'react';
import Features from './views/Features';
import Hero from './views/Hero';
import {animateList} from './configs/configs';
import {animateJS} from './utils/utils';
import LightBox from './views/LightBox';
import About from './views/About';
import Testimonial from './views/Testimonial';
import Pricing from './views/Pricing';
import Contact from './views/Contact';
import Blog from './views/Blog';
import Footer from './views/Footer';
import Header from './views/Header';
import {ToastContainer} from 'react-toastify';
function App() {
	useEffect(() => {
		animateList.map((animate) => animateJS(animate));
	});

	return (
		<>
			<Header />
			<Hero />
			<Features />
			<LightBox />
			<About />
			<Testimonial />
			<Pricing />
			<Blog />
			<Contact />
			<Footer />
			<ToastContainer newestOnTop />
		</>
	);
}

export default App;
