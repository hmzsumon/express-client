'use client';
import React from 'react';
import { FiUserPlus, FiUser } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { SyncLoader } from 'react-spinners';
import { formDateWithTime } from '@/utils/functions';
import { User2Icon } from '@/utils/icons/SecurityIcons';
import FriendsList from './FriendsList';
import {
	useGetMyTeam01Query,
	useGetMyTeamQuery,
} from '@/redux/features/auth/authApi';

type memberType = {
	_id: string;
	name: string;
	email: string;
	createdAt: string;
	customer_id: string;
	kyc_verified: boolean;
	join_date: Date;
	is_mining: boolean;
};

const MyReferrals = () => {
	const { user } = useSelector((state: any) => state.auth);
	const { data, isLoading, isError, isSuccess, error } =
		useGetMyTeam01Query(undefined);
	const { users } = data || {};
	return (
		<>
			{isLoading ? (
				<div className='flex items-center justify-center '>
					<SyncLoader color='#EAB308' size={10} />
				</div>
			) : (
				<>
					<div className='flex items-center gap-2 '>
						<FiUserPlus className='inline-block mr-2 text-2xl text-gray-400 cursor-pointer md:text-4xl ' />
						<h1 className='text-xl font-bold md:text-4xl '>My Friends </h1>
					</div>

					<div className='overflow-x-auto shadow-md sm:rounded-lg'>
						<FriendsList users={users} />
					</div>
				</>
			)}
		</>
	);
};

export default MyReferrals;
