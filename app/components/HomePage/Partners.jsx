'use client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Logo1 from '@/public/assets/Binance_Logo.png';
import Logo2 from '@/public/assets/BNB,_native_cryptocurrency_for_the_Binance_Smart_Chain.svg.png';
import Logo3 from '@/public/assets/download-removebg-preview.png';
import Logo5 from '@/public/assets/Express+Medicals+_+Colour-removebg-preview.png';
import Logo6 from '@/public/assets/Express-Shop-Colour-removebg-preview.png';
import Logo7 from '@/public/assets/Express_Courier_Logo_Logo-removebg-preview.png';
import Image from 'next/image';

const Partners = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className='container py-20 mx-auto text-center text-white'>
			<h2 data-aos='flip-up' className='mb-2 text-3xl font-bold font-OutFit'>
				Our Partners & Investors
			</h2>
			<p data-aos='flip-up' className='text-center'>
				Our partners who support us in all our processes
			</p>
			<div
				data-aos='zoom-in-up'
				className='grid items-center grid-cols-2 gap-5 mt-10 md:grid-cols-6'
			>
				<div>
					<Image
						className='grayscale hover:mt-[-5px] hover:grayscale-0  duration-300 mx-auto w-[150px] h-[100px] object-contain'
						src={Logo1}
						alt=''
					/>
				</div>
				<div>
					<Image
						className='grayscale hover:mt-[-5px] hover:grayscale-0  duration-300 mx-auto w-[150px] h-[100px] object-contain'
						src={Logo2}
						alt=''
					/>
				</div>
				<div>
					<Image
						className='grayscale hover:mt-[-5px] hover:grayscale-0  duration-300 mx-auto w-[150px] h-[100px] object-contain'
						src={Logo3}
						alt=''
					/>
				</div>
				<div>
					<Image
						className='grayscale hover:mt-[-5px] hover:grayscale-0  duration-300 mx-auto w-[150px] h-[100px] object-contain'
						src={Logo5}
						alt=''
					/>
				</div>
				<div>
					<Image
						className='grayscale hover:mt-[-5px] hover:grayscale-0  duration-300 mx-auto w-[150px] h-[100px] object-contain'
						src={Logo6}
						alt=''
					/>
				</div>
				<div>
					<Image
						className='grayscale hover:mt-[-5px] hover:grayscale-0  duration-300 mx-auto w-[150px] h-[100px] object-contain'
						src={Logo7}
						alt=''
					/>
				</div>
			</div>
		</div>
	);
};

export default Partners;
