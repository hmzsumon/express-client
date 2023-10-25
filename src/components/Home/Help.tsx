import React from 'react';
import { RiGlobalFill } from 'react-icons/ri';
import { MdSupportAgent } from 'react-icons/md';
import { FaHandHoldingUsd } from 'react-icons/fa';
import Link from 'next/link';

const Help = () => {
	return (
		<div>
			<div className='px-4 py-8'>
				<div className='grid gap-4 my-10 md:grid-cols-3'>
					<div className='flex items-start space-x-4 p-4 border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
						<RiGlobalFill className='text-8xl text-[#2e72d2]' />
						<div className='space-y-2 '>
							<h1 className='text-xl font-bold '>Global Earning</h1>
							<p>
								ELC is available in over 170 countries, with more than 30
								million users worldwide.
							</p>
							<button className='w-6/12 py-2 font-bold rounded-md bg-btn'>
								<Link href='/register'>Join Now</Link>
							</button>
						</div>
					</div>

					<div className='flex items-start space-x-4 p-4 border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
						<FaHandHoldingUsd className='text-8xl text-[#2e72d2]' />
						<div className='space-y-2 '>
							<h1 className='text-xl font-bold '>Daily Payouts</h1>
							<p>In BTC, ETH, USDT, LTC, earn outputs on a daily basis.</p>
							<button className='w-6/12 py-2 font-bold rounded-md bg-btn'>
								<Link href='/register'>Join Now</Link>
							</button>
						</div>
					</div>

					<div className='flex items-start space-x-4 p-4 border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
						<MdSupportAgent className='text-8xl text-[#2e72d2]' />
						<div className='space-y-2 '>
							<h1 className='text-xl font-bold '>Global Social Hub</h1>
							<p>
								Join our Telegram Community Group! Connect with fellow crypto
								and network marketing enthusiasts. Be part of the Express
								Life revolution.
							</p>
							<button className='w-6/12 py-2 font-bold rounded-md bg-btn'>
								<a
									href='https://t.me/expresslifeukofficial'
									target='_blank'
									rel='noopener noreferrer'
									className='text-white'
								>
									Chat now
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Help;
