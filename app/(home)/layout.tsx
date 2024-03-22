import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';

const HomeLayout = ({ children }: any) => {
	return (
		<div>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				<Navbar />
			</div>
			{children}
			<Footer />
		</div>
	);
};

export default HomeLayout;
