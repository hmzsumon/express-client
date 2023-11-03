import Image from 'next/image';
import React from 'react';
import { HiArrowSmLeft } from 'react-icons/hi';
import { useRouter } from 'next/router';

const About = () => {
	const router = useRouter();
	return (
		<div className='px-4 my-10'>
			<div className='space-y-4 '>
				<Image src='/logo_white_2.png' alt='about' width={100} height={50} />
			</div>
			<div className='space-y-4 '>
				<div className='space-x-4 '>
					<h2 className='my-3 text-2xl font-bold text-center '>Suspended</h2>
					<p>
						Dear user. For your information, your ID has been temporarily
						suspended due to your involvement in illegal activities. A mail has
						been sent to you with details in this regard. Your ID will be
						reactivated if you can show a valid reason why you are not involved
						in this activity. Every user is very important to us. We are
						committed to complying with the Company's Terms & Conditions/Privacy
						Policy at all times. For any further communication please contact
						our company
						<a
							href='mailto:support@expresslife.uk'
							className='mx-2 text-blue-500 underline hover:text-blue-700'
						>
							Email
						</a>
						only. <br /> <br /> Express Life
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
