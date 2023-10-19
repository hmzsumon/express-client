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
				<div className='flex items-center justify-center gap-6'>
					<HiArrowSmLeft
						className='text-2xl cursor-pointer text-blue-gray-300 hover:text-blue-700'
						onClick={() => router.back()}
					/>
					<h1 className='text-2xl font-bold text-center text-white'>
						About Us
					</h1>
				</div>

				{/* <div className='flex space-x-4 '>
					<h2>Company Name:</h2>
					<h2>Express Life</h2>
				</div> */}
				<div className='space-x-4 '>
					<h2 className='text-center '>Description:</h2>
					<p>
						Express Life is a forward-thinking and innovative company dedicated
						to providing individuals with the tools and opportunities to explore
						the world of digital currency through our flagship product, Express
						Life Coin (ELC).
					</p>
				</div>
				<div className='space-y-2 '>
					<h2 className='text-2xl text-center '>
						About Express Life Coin (ELC):
					</h2>
					<p>
						Express Life is a forward-thinking and innovative company dedicated
						to providing individuals with the tools and opportunities to explore
						the world of digital currency through our flagship product, Express
						Life Coin (ELC).
					</p>
				</div>

				<div className='space-y-2 '>
					<h2 className='text-2xl text-center '>
						About Express Life Coin (ELC):
					</h2>
					<p>
						ELC is our unique digital cryptocurrency that offers individuals the
						chance to mine and utilize their earnings in a simple, accessible,
						and secure way. At Express Life, we believe in democratizing
						cryptocurrency and making it accessible to everyone.
					</p>
				</div>

				<div className='space-y-2 '>
					<h2 className='text-2xl text-center '>Our Mission:</h2>
					<p>
						Our mission at Express Life is to empower individuals to participate
						in the exciting world of cryptocurrency. We strive to provide
						user-friendly mining services, financial education, and support to
						help people achieve financial independence and grow their wealth.
					</p>
					<p>
						Our mission, vision, goal is develop community globally for rich our
						ELC coin and establish e-commerce business and worldwide courier
						service. Everything complete within 2025 by our road map.
					</p>
				</div>

				<div className='space-y-2 '>
					<h2 className='text-2xl text-center '>Key Features and Services:</h2>
					<ul className='ml-6 list-disc'>
						<li>
							ELC Coin Mining
							<p>
								Join our platform to mine ELC coins and participate in the
								exciting world of cryptocurrency.
							</p>
						</li>

						<li>
							Affordable Entry
							<p>
								With a minimal joining fee of just $10 and a monthly
								subscription of $5, we ensure accessibility for all individuals
								interested in cryptocurrency mining.
							</p>
						</li>

						<li>
							Privacy and Security
							<p>
								Your privacy and data security are of utmost importance to us.
								We employ industry-standard security measures to safeguard your
								information.
							</p>
						</li>

						<li>
							User Support
							<p>
								Our dedicated customer support team is available to assist you
								with any questions or concerns you may have.
							</p>
						</li>

						<li>
							User Support
							<p>
								Our dedicated customer support team is available to assist you
								with any questions or concerns you may have.
							</p>
						</li>
					</ul>
				</div>

				<div className='space-y-2 '>
					<h2 className='text-2xl text-center '>Why Choose Express Life:</h2>
					<ul className='ml-6 list-disc'>
						<li>
							Inclusive Approach
							<p>
								We're committed to making cryptocurrency accessible to all,
								whether you're a seasoned investor or new to the world of
								digital currency.
							</p>
						</li>

						<li>
							Transparent and Trustworthy
							<p>
								Express Life operates with transparency, ensuring that you can
								trust us with your investments and data.
							</p>
						</li>

						<li>
							Privacy and Security
							<p>
								Your privacy and data security are of almost importance to us.
								We employ industry-standard security measures to safeguard your
								information.
							</p>
						</li>

						<li>
							Financial Freedom
							<p>
								We believe that financial freedom should be within reach for
								everyone, and our services aim to help you achieve just that.
							</p>
						</li>
					</ul>
				</div>

				<div className='my-4'>
					<p className='text-xs text-center '>
						Join Express Life and embark on your journey to financial
						empowerment with Express Life Coin (ELC)
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
