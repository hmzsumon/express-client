import Navbar from '@/app/components/Shared/Navbar/Navbar';
import Footer from '@/app/components/Shared/Footer/Footer';
import FAQBanner from '@/app/components/FAQPage/FAQBanner';
import FAQFristCompo from '@/app/components/FAQPage/FAQFristCompo';
const FAQ = () => {
	return (
		<div className='custom__BG'>
			<FAQBanner />
			<FAQFristCompo />
		</div>
	);
};

export default FAQ;
