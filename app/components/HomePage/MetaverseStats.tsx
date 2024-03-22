'use client';
/* eslint-disable react/no-unescaped-entities */

import { LuMoveRight } from 'react-icons/lu';
import { TbWorldStar } from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import waterimg from '@/public/assets/waterAnimation.gif';
import Image from 'next/image';
import Link from 'next/link';

const MetaverseStats = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className='container grid items-center grid-cols-1 gap-5 py-32 mx-auto md:grid-cols-4 p-sm'>
			<div className='col-span-3 text-white bg-right bg-no-repeat bg-contain pop__bg'>
				<h2 data-aos='flip-up' className='py-2 text-3xl font-bold font-OutFit'>
					Express Life - Where Dreams Take Flight and Prosperity Knows No Limits
				</h2>
				<p data-aos='flip-up' className='pb-4'>
					"Express Life: Ignite your financial journey with innovative network
					marketing. Empower dreams, earn globally, and achieve prosperity. Join
					us for flexibility, recognition, and a community of empowered
					entrepreneurs. Your success story begins here!"
				</p>
				<div className='grid grid-cols-1 gap-3'>
					<a data-aos='fade-up' href='#' className='flex items-center'>
						<button className='px-10 py-4 text-6xl btn__bg rounded-s-md'>
							<TbWorldStar />
						</button>
						<div className='border-r border-b border-t border-[#ffffff32] h-full w-full rounded-e-md px-3 py-1 flex items-center'>
							<div>
								<h3 className='text-3xl font-extrabold text-white font-OutFit'>
									Total Mining
								</h3>
								<p className='font-Outfit'>1299,962 ELC CT</p>
							</div>
						</div>
					</a>
					<a data-aos='fade-up' href='#' className='flex items-center'>
						<button className='px-10 py-4 text-6xl btn__bg rounded-s-md'>
							<TbWorldStar />
						</button>
						<div className='border-r border-b border-t border-[#ffffff32] h-full w-full rounded-e-md px-3 py-1 flex items-center'>
							<div>
								<h3 className='text-3xl font-extrabold text-white font-OutFit'>
									Total User's
								</h3>
								<p className='font-Outfit'>53,982</p>
							</div>
						</div>
					</a>
					<a data-aos='fade-up' href='#' className='flex items-center'>
						<button className='px-10 py-4 text-6xl btn__bg rounded-s-md'>
							<TbWorldStar />
						</button>
						<div className='border-r border-b border-t border-[#ffffff32] h-full w-full rounded-e-md px-3 py-1 flex items-center'>
							<div>
								<h3 className='text-3xl font-extrabold text-white font-OutFit'>
									Total Earnings
								</h3>
								<p className='font-Outfit'>12,71,583 USDT</p>
							</div>
						</div>
					</a>
					<a data-aos='fade-up' href='#' className='flex items-center'>
						<button className='px-10 py-4 text-6xl btn__bg rounded-s-md'>
							<TbWorldStar />
						</button>
						<div className='border-r border-b border-t border-[#ffffff32] h-full w-full rounded-e-md px-3 py-1 flex items-center'>
							<div>
								<h3 className='text-3xl font-extrabold text-white font-OutFit'>
									Total Transaction
								</h3>
								<p className='font-Outfit'>11,484,934 USD</p>
							</div>
						</div>
					</a>
				</div>
				<Link href='/sign-up'>
					<button
						data-aos='fade-up'
						className='px-10 py-5 mt-4 rounded btn__bg font-OutFit '
					>
						Join Us Immediately
						<LuMoveRight />
					</button>
				</Link>
			</div>
			<div>
				<Image src={waterimg} alt='' />
			</div>
		</div>
	);
};

export default MetaverseStats;
