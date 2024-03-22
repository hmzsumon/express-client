'use client';
import { LuMoveRight } from 'react-icons/lu';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const AboutMetaverse = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className='container py-32 mx-auto text-white font-OutFit p-sm'>
			<div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
				<div>
					<h2
						data-aos='flip-up'
						className='mb-5 text-3xl font-bold font-OutFit'
					>
						Learn More About Express Life
					</h2>
					<p data-aos='flip-up'>
						Empowerment: We empower individuals globally through diverse income
						streams, providing the flexibility to achieve financial success.
					</p>
					<p data-aos='flip-up' className='py-5'>
						Innovation: Our innovative network marketing platform is designed to
						unlock human potential and foster a community of successful
						entrepreneurs.!
					</p>
					<p data-aos='flip-up'>
						Integrity: Express Life operates with integrity, ensuring
						transparency, honesty, and fairness in all interactions with our
						valued members.
					</p>
				</div>
				<div data-aos='flip-down'>
					<form>
						<div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
							<input
								className='w-full p-5 duration-300 bg-transparent border rounded outline-none focus__border'
								type='text'
								name=''
								id=''
								placeholder='Full Name'
							/>
							<input
								className='w-full p-5 duration-300 bg-transparent border rounded outline-none focus__border'
								type='email'
								name=''
								id=''
								placeholder='Email Address'
							/>
							<input
								className='w-full p-5 duration-300 bg-transparent border rounded outline-none focus__border'
								type='number'
								name=''
								id=''
								placeholder='Phone Number'
							/>
						</div>
						<div className='my-4'>
							<textarea
								className='w-full p-5 duration-300 bg-transparent border rounded outline-none focus__border'
								name=''
								id=''
								cols='30'
								placeholder='Your Message'
								rows='5'
							></textarea>
						</div>
						<button className='flex items-center justify-center w-full gap-2 p-5 font-bold bg-transparent border rounded outline-none font-OutFit'>
							Submit Form <LuMoveRight />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AboutMetaverse;
