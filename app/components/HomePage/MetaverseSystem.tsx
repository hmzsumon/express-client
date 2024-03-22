'use client';
/* eslint-disable react/no-unescaped-entities */
import { TbWorldStar } from 'react-icons/tb';
import { GiRetroController } from 'react-icons/gi';
import { LuMoveRight } from 'react-icons/lu';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import butterflyImg from '@/public/assets/butterfly.gif';
import Image from 'next/image';
import Link from 'next/link';

const MetaverseSystem = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className='container grid grid-cols-1 gap-5 py-24 mx-auto md:grid-cols-4'>
			<div>
				<Image src={butterflyImg} alt='btttt' />
			</div>
			<div className='col-span-3 p-5 text-white'>
				<h2 data-aos='flip-up' className='py-2 text-2xl font-bold font-OutFit'>
					Empowering Dreams Globally: Express Life's Commitment
				</h2>
				<p data-aos='flip-up' className='pb-4'>
					"Express Life: Your gateway to global prosperity! Empower your journey
					with diverse income streams, low entry costs, and innovative network
					opportunities. Join a vibrant community and unlock financial success
					on your terms. Seize the future with Express Life!"
				</p>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
					<a
						data-aos='fade-up'
						href='#'
						className='flex flex-col  items-center'
					>
						<button className='px-10 py-4 w-full text-6xl btn__bg rounded-t-md'>
							<TbWorldStar />
						</button>
						<div className='border-r border-b border-t border-[#ffffff32] h-full w-full rounded-b-md px-3 py-1'>
							<h3 className='text-xl font-extrabold text-white font-OutFit'>
								Diverse Income Streams
							</h3>
							<p className='font-Outfit'>
								Members can earn through mining, global and team bonuses, direct
								referrals, rank incentives, and more.
							</p>
						</div>
					</a>

					<a data-aos='fade-up' href='#' className='flex flex-col items-center'>
						<button className='px-10 py-4 w-full text-6xl btn__bg rounded-t-md'>
							<GiRetroController />
						</button>
						<div className='border-r border-b border-t border-[#ffffff32] h-full w-full rounded-b-md px-3 py-1'>
							<h3 className='text-xl font-extrabold text-white font-OutFit'>
								Low Entry Cost
							</h3>
							<p className='font-Outfit'>
								With a minimal joining fee, Express Life is accessible to
								individuals with limited capital, kickstarting their
								entrepreneurial journey.
							</p>
						</div>
					</a>

					<a data-aos='fade-up' href='#' className='flex flex-col items-center'>
						<button className='px-10 py-4 text-6xl btn__bg w-full rounded-t-md'>
							<TbWorldStar />
						</button>
						<div className='border-r border-b border-t border-[#ffffff32] h-full w-full rounded-b-md px-3 py-1'>
							<h3 className='text-xl font-extrabold text-white font-OutFit'>
								Recognition and Rewards
							</h3>
							<p className='font-Outfit'>
								Our rank and incentive system offers members recognition and
								rewards, ranging from tours to electronic devices, based on
								achieved milestones.
							</p>
						</div>
					</a>
					<a data-aos='fade-up' href='#' className='flex flex-col items-center'>
						<button className='px-10 py-4 text-6xl btn__bg w-full rounded-t-md'>
							<TbWorldStar />
						</button>
						<div className='border-r border-b border-t border-[#ffffff32] h-full w-full rounded-b-md px-3 py-1'>
							<h3 className='text-xl font-extrabold text-white font-OutFit'>
								Flexibility
							</h3>
							<p className='font-Outfit'>
								Members enjoy the freedom to work from home or any location with
								an internet connection, striking a balance between work and
								life.
							</p>
						</div>
					</a>
				</div>
				<Link href='/sign-up'>
					<button className='px-5 py-5 mt-4 rounded btn__bg font-OutFit '>
						Join Us Today <LuMoveRight />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default MetaverseSystem;
