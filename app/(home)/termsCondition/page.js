import Navbar from '@/app/components/Shared/Navbar/Navbar';
import Footer from '@/app/components/Shared/Footer/Footer';
import TermsBanner from '@/app/components/TermsConditionPage/TermsBanner';
import TermsFristCompo from '@/app/components/TermsConditionPage/TermsFristCompo';

const TermsConditionPage = () => {
	return (
		<div className='custom__BG'>
			<TermsBanner />
			<TermsFristCompo />
		</div>
	);
};

export default TermsConditionPage;
