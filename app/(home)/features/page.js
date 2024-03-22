import Navbar from '@/app/components/Shared/Navbar/Navbar';
import Footer from '@/app/components/Shared/Footer/Footer';
import FeaturesBanner from '@/app/components/FeaturesPage/FeaturesBanner';
import AccessFuture from '@/app/components/HomePage/AccessFuture';
import AboutMetaverse from '@/app/components/HomePage/AboutMetaverse';
import Partners from '@/app/components/HomePage/Partners';

const Features = () => {
	return (
		<div className='custom__BG'>
			<FeaturesBanner />
			<AccessFuture />
			<AboutMetaverse />
			<Partners />
		</div>
	);
};

export default Features;
