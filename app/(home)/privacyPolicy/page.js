import Navbar from '@/app/components/Shared/Navbar/Navbar';
import Footer from '@/app/components/Shared/Footer/Footer';
import PrivacyBanner from '@/app/components/PrivacyPolicyPage/PrivacyBanner';
import PrivacyFristCompo from '@/app/components/PrivacyPolicyPage/PrivacyFristCompo';
const PrivacyPage = () => {
	return (
		<div className='custom__BG'>
			<PrivacyBanner />
			<PrivacyFristCompo />
		</div>
	);
};

export default PrivacyPage;
