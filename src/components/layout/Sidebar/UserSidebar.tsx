import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IoDiamondOutline } from 'react-icons/io5';
import { RiDashboardFill, RiWallet3Fill, RiGlobalLine } from 'react-icons/ri';
import { MdWorkHistory, MdNotifications, MdLogout } from 'react-icons/md';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { HiIdentification } from 'react-icons/hi';
import { FaUserPlus } from 'react-icons/fa';
import { SlBadge } from 'react-icons/sl';
import { IoMdArrowDropdown } from 'react-icons/io';
import SubMenuItem from './SubMenuItem';
import { useLogoutUserMutation } from '@/features/auth/authApi';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import {
	FetchBaseQueryError,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { type } from 'os';
import { fetchBaseQueryError } from '@/services/helpers';
import CopyToClipboard from '@/global/CopyToClipboard';

const UserSidebar = () => {
	const router = useRouter();
	const { user } = useSelector((state: any) => state.auth);

	const [logoutUser, { isSuccess, isError, error }] = useLogoutUserMutation();
	const [showSubMenu, setShowSubMenu] = useState(false);
	// default selected item is 1

	// handleShowSubMenu is a function that toggles the value of showSubMenu
	const handleShowSubMenu = () => {
		setShowSubMenu(!showSubMenu);
	};

	const sidebarItems = [
		{
			id: 1,
			name: 'Dashboard',
			link: '/dashboard',
			icon: <RiDashboardFill />,
			isSubMenu: false,
			calBack: () => router.push('/dashboard'),
		},
		{
			id: 2,
			name: 'Wallet',
			link: '/wallet',
			icon: <RiWallet3Fill />,
			calBack: () => handleShowSubMenu(),
			subItems: [
				{ id: 1, name: 'Overview', link: '/wallet/overview' },
				{ id: 2, name: 'Deposit', link: '/wallet/deposit' },
				{ id: 3, name: 'Withdraw', link: '/wallet/withdraw' },
				{ id: 4, name: 'Transfer', link: '/wallet/transfer' },
			],
			isSubMenu: true,
		},
		{
			id: 3,
			name: 'History',
			link: '/history',
			icon: <MdWorkHistory />,
			calBack: () => handleShowSubMenu(),
			subItems: [{ id: 1, name: 'All Transactions', link: '/transactions' }],
			isSubMenu: true,
		},
		{
			id: 4,
			name: 'Security',
			link: '/security',
			icon: <AiOutlineSecurityScan />,
			calBack: () => router.push('/security'),
			isSubMenu: false,
		},
		// {
		// 	id: 5,
		// 	name: 'Identification',
		// 	link: '/identification',
		// 	icon: <HiIdentification />,
		// 	calBack: () => console.log('hello'),
		// 	isSubMenu: false,
		// },
		{
			id: 6,
			name: 'Referral',
			link: '/referral',
			icon: <FaUserPlus />,
			calBack: () => router.push('/referral'),
			isSubMenu: false,
		},
		{
			id: 7,
			name: 'Global view',
			link: '/global',
			icon: <RiGlobalLine />,
			calBack: () => router.push('/global'),
			isSubMenu: false,
		},

		{
			id: 8,
			name: 'Notifications',
			link: '/notifications',
			icon: <MdNotifications />,
			calBack: () => console.log('hello'),
			isSubMenu: false,
		},
		{
			id: 9,
			name: 'Rank & Incentive',
			link: '/rank',
			icon: <SlBadge />,
			calBack: () => router.push('/rank'),
			isSubMenu: false,
		},
	];

	// handle logout
	const handleLogout = () => {
		logoutUser(undefined);
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Logout Successful');
			router.push('/login');
		}
		if (isError) {
			toast.error((error as fetchBaseQueryError).data.message);
		}
	}, [isSuccess]);
	return (
		<div className=''>
			<div className='px-4 '>
				<p>{user?.email}</p>
				<p className='flex'>
					{user?.username}
					<CopyToClipboard text={user?.username} />
				</p>

				<div className='flex items-center gap-1 text-sm text-yellow-700 '>
					<IoDiamondOutline />
					{user?.rank === 'user' ? <p>Regular User</p> : <p>{user?.rank}</p>}
				</div>
				<div>
					<div className='mt-2 '>
						{user?.is_active ? (
							<p className='text-green-500'>Active</p>
						) : (
							<p className='text-red-500'>Inactive</p>
						)}
					</div>
				</div>
			</div>
			<div className='my-6 '>
				<ul className=''>
					{sidebarItems.map((item) => {
						if (item.isSubMenu) {
							return <SubMenuItem key={item.id} item={item} />;
						}
						return (
							<div
								key={item.id}
								className='flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-700'
								onClick={item.calBack}
							>
								<li className='flex items-center gap-2 text-white cursor-pointer hover:text-yellow-700 '>
									{item.icon}
									<p>{item.name}</p>
								</li>
							</div>
						);
					})}
				</ul>
			</div>
			<hr />
			<div className='px-4 my-8 space-y-4 '>
				<button
					className='flex items-center gap-2 hover:text-red-500 '
					onClick={handleLogout}
				>
					<MdLogout />
					<p>Logout</p>
				</button>
				{/* For Support Email */}

				<a
					href='mailto:support@expresslife.uk '
					className='flex items-center justify-center w-full gap-2 py-2 rounded-md bg-btn hover:bg-btnHover '
				>
					Support
				</a>
			</div>
		</div>
	);
};

export default UserSidebar;
