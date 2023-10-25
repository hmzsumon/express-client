import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { RiEdit2Fill } from 'react-icons/ri';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { formDateWithTime } from '@/utils/functions';
import { FaWallet } from 'react-icons/fa';
import { useGetAfterJoiningUserQuery } from '@/features/auth/authApi';
import CopyToClipboard from '@/global/CopyToClipboard';

const UserInfo = () => {
	const { user } = useSelector((state: any) => state.auth);
	const { data } = useGetAfterJoiningUserQuery(undefined);
	const { afterJoiningUsers } = data || {};
	const [show, setShow] = useState(false);
	const [demoCount, setDemoCount] = useState(0);

	useEffect(() => {
		if (user && user.createdAt) {
			const createdTime = new Date(user.createdAt);
			const currentTime = new Date();
			const diff = currentTime.getTime() - createdTime.getTime();
			// diff converted to minutes
			const minutes = Math.floor(diff / 1000 / 60);
			// minutes converted to seconds
			const seconds = minutes * 60;
			// seconds divided by 45
			const count = Math.floor(seconds / 45);
			setDemoCount(count);
		}
	}, [user]);

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);

	return (
		<div className='user-info-wrapper '>
			<div className='flex px-6 py-4 gap-x-4'>
				<div>
					<Image
						src='./images/icons/default-avater.svg'
						alt='user avater'
						width={70}
						height={50}
					/>
				</div>

				<div className='w-full space-y-3 '>
					<div className='flex items-center gap-2 justify-betweens md:justify-start'>
						<div className='w-full md:w-auto '>
							<h1>{user?.full_name}</h1>
						</div>
						<div className='flex items-center justify-end w-full gap-x-2 md:w-auto '>
							<RiEdit2Fill className='p-1 text-2xl text-gray-400 bg-gray-600 rounded md:bg-transparent ' />
							<MdOutlineKeyboardArrowDown
								className={`p-1 text-2xl font-bold text-gray-400 ${
									show && 'transform rotate-180'
								} bg-gray-600 rounded md:hidden md:bg-transparent`}
								onClick={() => setShow(!show)}
							/>
						</div>
					</div>
					<div className='flex space-x-4'>
						<div className='flex items-center gap-2 md:items-start md:flex-col '>
							<p className='text-xs text-gray-500 '>User Name</p>
							<p className='flex text-xs '>
								{user?.username}
								<CopyToClipboard text={user?.username} />
							</p>
						</div>
						<div className='hidden space-y-1 md:block '>
							<p className='text-xs text-gray-500 '>User Id</p>
							<p className='flex text-xs '>
								{user?.customer_id}
								<CopyToClipboard text={user?.username} />{' '}
							</p>
						</div>
						<div className='hidden space-y-1 md:block '>
							<p className='text-xs text-gray-500 '>Last login time</p>
							<p className='text-xs '>
								{formDateWithTime(user?.last_login_info.date)} (
								{user?.last_login_info.ip_address})
							</p>
						</div>
					</div>
				</div>
			</div>
			{show && (
				<div className='px-10 py-6 space-y-4 md:hidden'>
					<div className='flex items-center justify-between'>
						<p className='text-xs text-gray-500 '>User Id</p>
						<p className='flex text-xs '>
							{user?.customer_id} <CopyToClipboard text={user?.customer_id} />
						</p>
					</div>
					<div className='flex items-center justify-between'>
						<p className='text-xs text-gray-500 '>Last login time</p>
						<p className='text-xs '>
							{formDateWithTime(user?.last_login_info.date)} (
							{user?.last_login_info.ip_address})
						</p>
					</div>
				</div>
			)}
			<div className='px-2 mb-2 '>
				<div className='flex items-start space-x-4 p-4  border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
					<div className='mt-1 '>
						<Image src='/tree.png' alt='wallet icon' width={60} height={60} />
					</div>
					<div className='space-y-2 '>
						<h1 className='text-xl font-bold '>
							{afterJoiningUsers > 0
								? afterJoiningUsers + demoCount
								: demoCount}{' '}
							Users
						</h1>
						<p>Global joined after you.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
