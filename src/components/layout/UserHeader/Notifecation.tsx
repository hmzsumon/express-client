import ioBaseUrl from '@/config/ioBaseUrl';
import {
	useGetNotificationsQuery,
	useUpdateNotificationMutation,
} from '@/features/notify/notificationApi';
import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
	Badge,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from '@material-tailwind/react';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiSolidBell } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import socketIOClient from 'socket.io-client';

const Notification = () => {
	const { user } = useSelector((state: any) => state.auth);
	const {
		data,
		refetch,
		isLoading,
		isError,
		error,
		isSuccess: n_isSuccess,
	} = useGetNotificationsQuery(undefined);
	const { notifications } = data || [];
	const [updateNotification, {}] = useUpdateNotificationMutation();

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);
	const [selectedNotification, setSelectedNotification] = useState<any>(null);
	const [fetch, setFetch] = useState(false);
	const [count, setCount] = useState(notifications?.length);
	useEffect(() => {
		setCount(notifications?.length);
	}, [notifications]);

	function playNotificationSound() {
		const audio = new Audio('/sounds/user-notification.wav');
		audio.play();
	}

	// set notifications and play sound
	function setNotification(notification: any) {
		playNotificationSound();
		setFetch(true);
		refetch();
	}

	// handle update notification
	function handleUpdateNotification(notificationId: any) {
		updateNotification(notificationId);
		const notification = notifications?.find(
			(notification: any) => notification?._id === notificationId
		);
		setSelectedNotification(notification);
		setOpen(true);
	}

	useEffect(() => {
		const socket = socketIOClient(ioBaseUrl, {
			transports: ['websocket', 'polling'],
		});

		socket.on('connect', () => {
			console.log('connected');
		});
		socket.on('user-notification', (notification: any) => {
			console.log('notification', notification);
			if (notification?.user_id === user?._id) {
				setNotification(notification);
				setCount(count + 1);
			}
		});

		socket.on('disconnect', () => {
			console.log('disconnected');
		});

		return () => {
			socket.disconnect();
		};
	}, [setNotification]);

	return (
		<>
			<Menu>
				<MenuHandler>
					<div className='relative '>
						<FaBell className='text-xl cursor-pointer' />
						{count > 0 && (
							<span className='absolute top-0 inline-flex items-center justify-center w-5 h-5 p-2 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full text-blue-gray-100 left-0'>
								<span>{count > 9 ? '9+' : count}</span>
							</span>
						)}
					</div>
				</MenuHandler>
				{count > 0 && (
					<MenuList>
						{notifications?.map((notification: any) => (
							<li
								key={notification?._id}
								onClick={() => {
									handleUpdateNotification(notification?._id);
								}}
								className=' list-none'
							>
								<MenuItem color='blueGray' className='hover:bg-blueGray-100'>
									<div className='flex items-center justify-between'>
										<div className='flex items-center gap-x-2'>
											<div className='flex flex-col'>
												<p className='text-sm font-semibold text-blue-gray-900'>
													{notification?.subject}
												</p>
											</div>
										</div>
									</div>
								</MenuItem>
							</li>
						))}
					</MenuList>
				)}
			</Menu>

			<>
				<Dialog
					open={open}
					handler={handleOpen}
					size='xs'
					className='border-[#2e72d2] border rounded bg-[rgb(17,15,41)]'
				>
					<DialogHeader className=' text-blue-gray-100'>
						{selectedNotification?.subject}
					</DialogHeader>
					<hr className=' border border-[#2e72d2] ' />
					<DialogBody>
						<p className='text-blue-gray-100'>
							{selectedNotification?.description}
						</p>
					</DialogBody>

					<DialogFooter>
						<Button
							variant='text'
							color='red'
							onClick={handleOpen}
							className='mr-1'
						>
							<span>Close</span>
						</Button>
					</DialogFooter>
				</Dialog>
			</>
		</>
	);
};

export default Notification;
