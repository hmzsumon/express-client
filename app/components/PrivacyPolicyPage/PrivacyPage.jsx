'use client';
import { useEffect } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import $ from 'jquery';
import Footer from '../Shared/Footer/Footer';
import PrivacyBanner from './PrivacyBanner';
import PrivacyFristCompo from './PrivacyFristCompo';
const PrivacyPage = () => {
	useEffect(() => {
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 50) {
				$('.header').addClass('header__bg');
			} else {
				$('.header').removeClass('header__bg');
			}
		});
	}, []);
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				<Navbar />
			</div>
			<PrivacyBanner />
			<PrivacyFristCompo />
			<Footer></Footer>
		</div>
	);
};

export default PrivacyPage;
