import Navbar from '@/app/components/Shared/Navbar/Navbar';
import Footer from '@/app/components/Shared/Footer/Footer';
import Packages from '@/app/components/HomePage/NftPackages';
import PackageBanner from '@/app/components/PackagePage/PackageBanner';

const Package = () => {
	return (
		<div className='custom__BG'>
			<PackageBanner />
			<Packages />
		</div>
	);
};

export default Package;
