'use client';
import Navbar from '../Shared/Navbar/Navbar';
import AboutBanner from './AboutBanner';
import AboutCompoOne from './AboutCompoOne';
import Footer from '../Shared/Footer/Footer';
import HomeFiveCompo from '../HomePage/AboutMetaverse';
import HomeSixCompo from '../HomePage/Customers';
import { useEffect } from 'react';
import $ from 'jquery';
import MetaverseSystem from '../HomePage/MetaverseSystem';

const AboutPage = () => {
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
			<AboutBanner></AboutBanner>
			<AboutCompoOne></AboutCompoOne>
			<MetaverseSystem />
			<HomeFiveCompo />
			<HomeSixCompo />
			<Footer></Footer>
		</div>
	);
};

export default AboutPage;
