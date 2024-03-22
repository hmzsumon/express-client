import Footer from '@/app/components/Shared/Footer/Footer';
import Navbar from '@/app/components/Shared/Navbar/Navbar';
import SignUpBanner from '@/app/components/Signup/SignUPBanner';
import SignUpPage from '../../components/Signup/SignUpPage';

const SignUp = () => {
	return (
		<div className='custom__BG'>
			{/* <div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				<Navbar />
			</div> */}
			<div className=' z-[-100]'>
				<SignUpBanner />
				<SignUpPage />
			</div>
		</div>
	);
};

export default SignUp;
