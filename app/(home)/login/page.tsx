import LoginBanner from '@/app/components/Login/LoginBanner';
import LoginPage from '@/app/components/Login/LoginPage';
import Footer from '@/app/components/Shared/Footer/Footer';
import Navbar from '@/app/components/Shared/Navbar/Navbar';

const Login = () => {
	return (
		<div className='custom__BG'>
			<div className=' z-[-100]'>
				<LoginBanner />
				<LoginPage />
			</div>
		</div>
	);
};

export default Login;
