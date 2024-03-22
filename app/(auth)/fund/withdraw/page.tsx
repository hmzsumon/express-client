'use client';
import React, { useState } from 'react';
import LeftContent from '@/components/Withdraw/LeftContent';
import ProtectedRoute from '@/global/ProtectedRoute';
import { HistoryIcon } from '@/global/icons/CommonIcons';

import { IoCloseCircleOutline } from 'react-icons/io5';

import WithdrawRecords from '@/components/Withdraw/WithdrawRecords';
import { useGetMyWithdrawRequestsQuery } from '@/redux/features/withdraw/withdrawApi';

const Withdraw = () => {
	const { data, refetch, isLoading, isSuccess, isError, error } =
		useGetMyWithdrawRequestsQuery(undefined);
	const { withdraws } = data || [];
	const { withdrawDetails } = data || {};
	// console.log('withdraws', withdraws);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);
	return (
		<>
			<div className='px-2 pt-10 '>
				<div className='relative px-4 py-6 mx-auto rounded-lg border border-[#2e72d2] bg-[rgba(46,114,210,.1)] md:w-7/12'>
					<div className='flex items-center justify-between mb-4'>
						<div className='ml-2 '>
							<h1 className='-mb-1 font-bold '>Withdraw USDT</h1>
							<small className=' text-[0.6rem] text-blue-gray-600'>
								Withdraw USDT to crypto & Binance Pay{' '}
							</small>
						</div>
						<div className='flex cursor-pointer' onClick={handleOpen}>
							<HistoryIcon h={4} w={4} color={'gray'} />

							<small className='text-[.7rem] text-blue-gray-600 '>
								History
							</small>
						</div>
					</div>

					<div className=''>
						<LeftContent />
					</div>
				</div>
			</div>
			{/* for history */}
		</>
	);
};

export default Withdraw;
