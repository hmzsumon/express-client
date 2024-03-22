'use client';
import { useEffect } from 'react';
import $ from 'jquery';
import Navbar from '../Shared/Navbar/Navbar';
import ContactBanner from './ContactBanner';
import Footer from '../Shared/Footer/Footer';
import ContactFristCompo from './ContactFristCompo';

const Contact = () => {
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
			<ContactBanner />
			<ContactFristCompo />
			<div className='py-20'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.147849963896!2d-2.7124361242182125!3d53.786856041673374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b72041a44fd13%3A0x10ee7f06e5d104f5!2s16%20Harrison%20Rd%2C%20Fulwood%2C%20Preston%20PR2%209QH%2C%20UK!5e0!3m2!1sen!2sbd!4v1704730085752!5m2!1sen!2sbd'
					width='100%'
					height='450'
					style={{ border: 0 }}
					allowfullscreen={true}
					loading='lazy'
					// eslint-disable-next-line react/no-unknown-property
					referrerpolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
