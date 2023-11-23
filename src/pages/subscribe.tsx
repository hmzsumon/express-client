import UserLayout from '@/components/layout/UserLayout';
import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchBaseQueryError } from '@/services/helpers';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import Image from 'next/image';
import {
	useActivateUserMutation,
	useLoadUserQuery,
	useReactivationUserMutation,
} from '@/features/auth/authApi';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { PulseLoader } from 'react-spinners';

const Subscribe = () => {
	useLoadUserQuery();
	const { user } = useSelector((state: any) => state.auth);
	const [isActivated, setIsActivated] = useState(false);
	const { width, height } = useWindowSize();
	const [reactivationUser, { isLoading, isError, error, isSuccess }] =
		useReactivationUserMutation();

	// after 3 seconds, isActivated will be set false

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsActivated(false);
		}, 4000);
		return () => clearTimeout(timer);
	}, [isActivated]);

	const handleSubmit = () => {
		reactivationUser(undefined);
	};

	useEffect(() => {
		if (isSuccess) {
			setIsActivated(true);
		}

		if (isError) {
			toast.error((error as fetchBaseQueryError).data?.message);
		}
	}, [isSuccess, isError, error]);

	return (
		<UserLayout>
			<div>
				<div className='px-6 mx-auto my-10 md:w-6/12 '>
					<div>
						<Image
							src='/images/register_success.gif'
							alt='Success'
							width={200}
							height={100}
							className='mx-auto'
						/>
					</div>
					{user?.is_active ? (
						<h1 className='text-2xl font-semibold text-white'>
							Your account is Reactivate successfully
						</h1>
					) : (
						<h1 className='text-2xl font-bold text-center text-white '>
							Reactivate Your Account
						</h1>
					)}
					<div className='my-6'>
						<div className='space-y-4 text-white '>
							<div className='my-6 space-y-4'>
								{user?.is_active ? (
									<Link href='/dashboard'>
										<button className='w-full py-3 font-semibold text-gray-100 rounded bg-btn'>
											Go to Dashboard
										</button>
									</Link>
								) : (
									<button
										className='w-full py-3 font-semibold text-gray-100 rounded bg-btn disabled:opacity-50 disabled:cursor-not-allowed '
										onClick={handleSubmit}
									>
										{isLoading ? (
											<div className='flex items-center justify-center '>
												<PulseLoader color='white' size={10} />
											</div>
										) : (
											'Reactivate'
										)}
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			{isActivated && <Confetti width={width} height={height} />}
		</UserLayout>
	);
};

export default Subscribe;
