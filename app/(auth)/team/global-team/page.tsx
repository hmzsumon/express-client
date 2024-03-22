'use client';
import { useSelector } from 'react-redux';
import React from 'react';
import { SyncLoader } from 'react-spinners';
import { FiUserPlus } from 'react-icons/fi';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import GlobalLevel from '@/components/Global/GlobalLevel';
import { useGet13LevelTreeQuery } from '@/redux/features/auth/authApi';
const Global = () => {
	const { user } = useSelector((state: any) => state.auth);
	const { data, isLoading } = useGet13LevelTreeQuery(undefined);
	const { length } = data || { length: 0 };

	return (
		<>
			<div className=' py-4'>
				{isLoading ? (
					<div className='flex items-center justify-center '>
						<SyncLoader color='#EAB308' size={10} />
					</div>
				) : (
					<>
						<div className='grid gap-4 md:grid-cols-3'>
							<div className='flex items-start space-x-4 p-4 border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
								<div className='space-y-2 '>
									<h1 className='font-bold '>Total Global Earning</h1>
									<p>
										{Number(user?.total_global_earing).toLocaleString('en-US', {
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										})}{' '}
										USDT
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-4 p-4 border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
								<div className='space-y-2 '>
									<h1 className='font-bold '>Total Joining Earning</h1>
									<p>
										{Number(user?.g_joining_earning).toLocaleString('en-US', {
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										})}{' '}
										USDT
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-4 p-4 border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
								<div className='space-y-2 '>
									<h1 className='font-bold '>Total Subscription Earning</h1>
									<p>
										{Number(user?.g_sub_earning).toLocaleString('en-US', {
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										})}{' '}
										USDT
									</p>
								</div>
							</div>
						</div>

						<div className='flex items-center gap-2 pl-3 mt-4 '>
							<FiUserPlus className='inline-block mr-2 text-2xl text-gray-400 cursor-pointer md:text-2xl ' />
							<h1 className='text-xl font-bold md:text-2xl '>
								Users <span>{length}</span>
							</h1>
							<Link href='/global/users'>
								<FaExternalLinkAlt className='inline-block text-sm text-gray-400 cursor-pointer md:text-xl ' />
							</Link>
						</div>

						<div className='px-1 mt-4 '>
							<GlobalLevel length={length} />
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Global;
