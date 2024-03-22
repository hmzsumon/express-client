'use client';
import TableBox from '@/components/Box/TableBox';
import { useGetMyPackagesQuery } from '@/redux/features/package/packageApi';
import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { formatDate } from '@/lib/functions';

const SubscriptionRecord = () => {
	const { user } = useSelector((state: any) => state.auth);
	const { data, refetch, isLoading, isError, error, isSuccess } =
		useGetMyPackagesQuery(undefined);
	const { myPackage } = data || {};
	return (
		<div>
			<h1>Subscription Record</h1>
			<div className=' space-y-4 mt-4'>
				<TableBox>
					<div className='card card-compact w-full bg-transparent text-white shadow-xl'>
						<div className='card-body '>
							<div className='flex items-center justify-between'>
								<h2 className='card-title'>User Information</h2>
							</div>
							<hr className='h-[0.5px]  bg-gray-600 border-0 my-2' />
							<div className=' px-2 md:px-4 space-y-2'>
								<div className=' flex items-center justify-between'>
									<h3 className='text-sm font-semibold'>Name</h3>
									<div className=' '>
										<p className='text-left'>{user?.full_name}</p>
									</div>
								</div>
								<div className=' flex items-center justify-between'>
									<h3 className='text-sm font-semibold'>Email</h3>
									<div className=' '>
										<p className='text-left'>{user?.email}</p>
									</div>
								</div>

								<div className=' flex items-center justify-between'>
									<h3 className='text-sm font-semibold'>Active Status</h3>
									<div className=' '>
										{user?.is_active ? (
											<p className='text-left text-green-500'>Active</p>
										) : (
											<p className='text-left text-red-500'>Not Active</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</TableBox>

				{/* Start Package Details */}
				<TableBox>
					<div className='card card-compact rounded-sm w-full bg-transparent text-white shadow-xl'>
						<div className='card-body '>
							<div className='flex items-center justify-between'>
								<h2 className='card-title'>Package Details</h2>
							</div>
							<hr className='h-[0.5px]  bg-gray-600 border-0 my-2' />
							<div className=' px-2 md:px-4 space-y-2'>
								<div className=' flex items-center justify-between'>
									<h3 className='text-sm font-semibold'>Package Type</h3>
									<div className=' '>
										<p className='text-left uppercase'>{myPackage?.p_type}</p>
									</div>
								</div>
								<div className=' flex items-center justify-between'>
									<h3 className='text-sm font-semibold'>Package Price</h3>
									<div className=' '>
										<p className='text-left'>{myPackage?.p_price} USDT</p>
									</div>
								</div>

								<div className=' flex items-center justify-between'>
									<h3 className='text-sm font-semibold'>Active Date</h3>
									<div className=' '>
										<p className='text-left'>
											{formatDate(myPackage?.createdAt)}
										</p>
									</div>
								</div>

								<div className=' flex items-center justify-between'>
									<h3 className='text-sm font-semibold'>Next Payment Date</h3>
									<div className=' '>
										<p className='text-left'>
											{formatDate(myPackage?.expire_date)}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</TableBox>
				{/* End Package Details */}
			</div>
		</div>
	);
};

export default SubscriptionRecord;
