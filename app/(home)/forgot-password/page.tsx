'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCheckUserByEmailMutation } from '@/redux/features/auth/authApi';
import TableBox from '@/components/Box/TableBox';
import { addEmail, addDestination } from '@/redux/signupDataSlice';
import { useDispatch } from 'react-redux';

const ForgotPassword = () => {
	const [email, setEmail] = useState<string>('');
	const [errorText, setErrorText] = useState<string>('');
	const [stateError, setStateError] = useState<boolean>(false);
	const [next, setNext] = useState<boolean>(false);

	const [checkUserByEmail, { data, isLoading, isError, error, isSuccess }] =
		useCheckUserByEmailMutation();
	const router = useRouter();
	const dispatch = useDispatch();

	// handle check user
	const handleCheckUser = () => {
		if (!email) {
			setStateError(true);
			setErrorText('Please enter your email');
			return;
		}
		checkUserByEmail({ email: email });
	};

	// handle change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
		setStateError(false);
	};

	useEffect(() => {
		if (isError) {
			setStateError(true);
			setErrorText(
				'This account does not exist. Please try again or create a new account.'
			);
		}

		if (isSuccess) {
			console.log('email', email);
			dispatch(addEmail(email));
			dispatch(addDestination('/reset-password'));
			router.push('/security-verification');
		}
	}, [isError, isSuccess]);

	return (
		<div className=' px-4 mx-auto my-10 md:w-6/12 pt-36  md:py-20 '>
			<TableBox>
				<h1 className='text-2xl font-bold text-white '>Reset Your Password</h1>

				<div className='my-8'>
					<div className='space-y-4 text-white '>
						<div className='flex flex-col gap-1'>
							<label className='text-sm font-semibold text-gray-400 '>
								Enter Your Email
							</label>
							<input
								className={`px-4 py-2 bg-transparent border rounded hover:border-yellow-700 focus:border-yellow-700 ${
									stateError && 'border-red-500'
								} `}
								type='text'
								value={email}
								onChange={(e) => handleChange(e)}
							/>
							{stateError && (
								<small className='text-xs text-red-500'>{errorText}</small>
							)}
						</div>

						<div className='my-6 space-y-4'>
							<button
								className='w-full py-3 font-semibold text-white bg-btn rounded disabled:opacity-50 disabled:cursor-not-allowed '
								onClick={handleCheckUser}
							>
								Next
							</button>
						</div>
					</div>
				</div>
			</TableBox>
		</div>
	);
};

export default ForgotPassword;
