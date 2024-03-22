'use client';
/* eslint-disable react/no-unescaped-entities */
import { LuMoveRight } from 'react-icons/lu';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { GiMining } from 'react-icons/gi';
import { BsCashCoin } from 'react-icons/bs';
import { SiSololearn } from 'react-icons/si';
import { FaGlobe } from 'react-icons/fa';
import { MdGroups2 } from 'react-icons/md';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { GiTeamDowngrade } from 'react-icons/gi';
import { GiIncense } from 'react-icons/gi';
import Link from 'next/link';

const AccessFuture = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className='container py-32 mx-auto text-white'>
			<h2
				data-aos='flip-up'
				className='py-2 text-3xl font-bold text-center font-OutFit'
			>
				"Express Life: Your Journey to Financial Triumph Begins Now!"
			</h2>
			<p data-aos='flip-up' className='text-center'>
				"Empower Earnings: Check Out for Financial Triumph!"
			</p>
			<div className='grid grid-cols-1 gap-5 px-5 mt-10 md:grid-cols-2 lg:grid-cols-4 md:px-0'>
				<div
					data-aos='zoom-in'
					className='border rounded border-[#ffffff32] access__card text-center'
				>
					<div className='p-5'>
						<p className='flex justify-center text-7xl'>
							<GiMining />
						</p>
						<h3 className='my-2 text-2xl font-bold font-OutFit'>Mining</h3>
						<p>"Dig into prosperity with our mining opportunities!"</p>
						<Link href={`/mining`}>
							<button className='px-8 py-5 mx-auto mt-3 rounded btn__bg font-OutFit'>
								{' '}
								Read More <LuMoveRight />
							</button>
						</Link>
					</div>
				</div>

				<div
					data-aos='zoom-in'
					className='border rounded border-[#ffffff32] access__card text-center'
				>
					<div className='p-5'>
						<p className='flex justify-center text-7xl'>
							<BsCashCoin />
						</p>
						<h3 className='my-2 text-2xl font-bold font-OutFit'>
							Daily Cash Back
						</h3>
						<p>"Daily cash back – because success never takes a day off!"</p>
						<Link href={`/dailycashback`}>
							<button className='px-8 py-5 mx-auto mt-3 rounded btn__bg font-OutFit'>
								{' '}
								Read More <LuMoveRight />
							</button>
						</Link>
					</div>
				</div>

				<div
					data-aos='zoom-in'
					className='border rounded border-[#ffffff32] access__card text-center'
				>
					<div className='p-5'>
						<p className='flex justify-center text-7xl'>
							<SiSololearn />
						</p>
						<h3 className='my-2 text-2xl font-bold font-OutFit'>
							Direct Referrals
						</h3>
						<p>"Refer and reap! Earn 40% per referral, limitless!"</p>
						<Link href={`/directreferer`}>
							<button className='px-8 py-5 mx-auto mt-3 rounded btn__bg font-OutFit'>
								{' '}
								Read More <LuMoveRight />
							</button>
						</Link>
					</div>
				</div>

				<div
					data-aos='zoom-in'
					className='border rounded border-[#ffffff32] access__card text-center'
				>
					<div className='p-5'>
						<p className='flex justify-center text-7xl'>
							<FaGlobe></FaGlobe>
						</p>
						<h3 className='my-2 text-2xl font-bold font-OutFit'>
							Global Joining Income
						</h3>
						<p>"Join globally, earn big – your passport to prosperity!"</p>
						<Link href={`/globaljoining`}>
							<button className='px-8 py-5 mx-auto mt-3 rounded btn__bg font-OutFit'>
								{' '}
								Read More <LuMoveRight />
							</button>
						</Link>
					</div>
				</div>

				<div
					data-aos='zoom-in'
					className='border rounded border-[#ffffff32] access__card text-center'
				>
					<div className='p-5'>
						<p className='flex justify-center text-7xl'>
							<MdGroups2 />
						</p>
						<h3 className='my-2 text-2xl font-bold font-OutFit'>
							Team Joining Income
						</h3>
						<p>"Build your team, unlock success – enjoy bonuses!"</p>
						<Link href={`/teamjoing`}>
							<button className='px-8 py-5 mx-auto mt-3 rounded btn__bg font-OutFit'>
								{' '}
								Read More <LuMoveRight />
							</button>
						</Link>
					</div>
				</div>

				<div
					data-aos='zoom-in'
					className='border rounded border-[#ffffff32] access__card text-center'
				>
					<div className='p-5'>
						<p className='flex justify-center text-7xl'>
							<MdOutlineSubscriptions />
						</p>
						<h3 className='my-2 text-2xl font-bold font-OutFit'>
							Global Monthly Subscription Earnings
						</h3>
						<p>"Rise in ranks, claim incentives – your journey, your win!"</p>
						<Link href={`/globalmonthly`}>
							<button className='px-8 py-5 mx-auto mt-3 rounded btn__bg font-OutFit'>
								{' '}
								Read More <LuMoveRight />
							</button>
						</Link>
					</div>
				</div>

				<div
					data-aos='zoom-in'
					className='border rounded border-[#ffffff32] access__card text-center'
				>
					<div className='p-5'>
						<p className='flex justify-center text-7xl'>
							<GiTeamDowngrade />
						</p>
						<h3 className='my-2 text-2xl font-bold font-OutFit'>
							Team Monthly Subscription Earnings
						</h3>
						<p>"Subscribe, earn, repeat – the monthly cash influx!"</p>
						<Link href={`/teammonthly`}>
							<button className='px-8 py-5 mx-auto mt-3 rounded btn__bg font-OutFit'>
								{' '}
								Read More <LuMoveRight />
							</button>
						</Link>
					</div>
				</div>

				<div
					data-aos='zoom-in'
					className='border rounded border-[#ffffff32] access__card text-center'
				>
					<div className='p-5'>
						<p className='flex justify-center text-7xl'>
							<GiIncense />
						</p>
						<h3 className='my-2 text-2xl font-bold font-OutFit'>
							Rank and Incentives
						</h3>
						<p>"Climb ranks, unlock rewards – your journey to prestige!"</p>
						<Link href={`/rankincentive`}>
							<button className='px-8 py-5 mx-auto mt-3 rounded btn__bg font-OutFit'>
								{' '}
								Read More <LuMoveRight />
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AccessFuture;
