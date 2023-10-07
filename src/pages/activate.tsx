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
} from '@/features/auth/authApi';

const Activate = () => {
	useLoadUserQuery();
	const [isActivated, setIsActivated] = useState(false);
	const { width, height } = useWindowSize();
	const [activateUser, { isLoading, isError, error, isSuccess }] =
		useActivateUserMutation();

	// after 3 seconds, isActivated will be set false

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsActivated(false);
		}, 4000);
		return () => clearTimeout(timer);
	}, [isActivated]);

	const handleSubmit = () => {
		activateUser(undefined);
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
					{isActivated ? (
						<h1 className='text-2xl font-semibold text-white'>
							Your account is activated successfully
						</h1>
					) : (
						<h1 className='text-2xl font-bold text-center text-white '>
							Activate Your Account
						</h1>
					)}
					<div className='my-6'>
						<div className='space-y-4 text-white '>
							<div className='my-6 space-y-4'>
								<button
									className='w-full py-3 font-semibold text-gray-100 rounded bg-btn'
									onClick={handleSubmit}
								>
									Activate
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{isActivated && <Confetti width={width} height={height} />}
		</UserLayout>
	);
};

export default Activate;
