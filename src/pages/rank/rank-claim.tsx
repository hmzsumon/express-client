import UserLayout from '@/components/layout/UserLayout';
import { toast } from 'react-toastify';
import { fetchBaseQueryError } from '@/services/helpers';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import Image from 'next/image';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import {
	useClaimRankBonusMutation,
	useLoadUserQuery,
} from '@/features/auth/authApi';
import { useRouter } from 'next/router';

const RankClaim = () => {
	useLoadUserQuery();
	const router = useRouter();
	const [claimRankBonus, { isLoading, isError, error, isSuccess }] =
		useClaimRankBonusMutation();
	const { user } = useSelector((state: any) => state.auth);
	const [isActivated, setIsActivated] = useState(false);
	const { width, height } = useWindowSize();

	// after 3 seconds, isActivated will be set false

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsActivated(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, [isActivated]);

	// handle submit function
	const handleSubmit = () => {
		// do something
		claimRankBonus(undefined);
	};

	// check if user is_rank_process is false
	useEffect(() => {
		if (!user?.is_rank_process) {
			router.push('/dashboard');
		}
	}, [user?.is_rank_process]);

	useEffect(() => {
		if (isSuccess) {
			toast.success('Rank claimed successfully');
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
					{!user?.is_rank_process ? (
						<h1 className='text-2xl font-semibold text-white'>
							Your Rank is {user?.rank} now
						</h1>
					) : (
						<h1 className='text-2xl font-bold text-center text-white '>
							Claim Your Rank Reward
						</h1>
					)}
					<div className='my-6'>
						<div className='space-y-4 text-white '>
							<div className='my-6 space-y-4'>
								{!user?.is_rank_process ? (
									<Link href='/dashboard'>
										<button className='w-full py-3 font-semibold text-gray-100 rounded bg-btn'>
											Go to Dashboard
										</button>
									</Link>
								) : (
									<button
										className='w-full py-3 font-semibold text-gray-100 rounded bg-btn'
										onClick={handleSubmit}
									>
										{isLoading ? (
											<div className='flex items-center justify-center '>
												<PulseLoader color='white' size={10} />
											</div>
										) : (
											'Claim'
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

export default RankClaim;
