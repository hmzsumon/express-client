import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import FeaturesBanner from './FeaturesBanner';
import AccessFuture from '../HomePage/AccessFuture';
import AboutMetaverse from '../HomePage/AboutMetaverse';
import Partners from '../HomePage/Partners';

const Features = () => {
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				<Navbar />
			</div>
			<FeaturesBanner />
			<AccessFuture />
			<AboutMetaverse />
			<Partners />
			<Footer />
		</div>
	);
};

export default Features;
