import UserLayout from '@/components/layout/UserLayout';
import {
	useFindUserByEmailOrUsernameMutation,
	useLoadUserQuery,
} from '@/features/auth/authApi';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchBaseQueryError } from '@/services/helpers';
import { PulseLoader } from 'react-spinners';
import { useAppSelector } from '@/reduxHooks';
import Link from 'next/link';
import { useSendMoneyMutation } from '@/features/transfer/transferApi';

const Transfer = () => {
	useLoadUserQuery();
	// send money mutation
	const [
		sendMoney,
		{
			isLoading: sendLoading,
			isError: sendIsError,
			isSuccess: sendIsSuccess,
			error: sendError,
		},
	] = useSendMoneyMutation();

	const { user: sender } = useAppSelector((state: any) => state.auth);
	const [emailOrUsername, setEmailOrUsername] = useState('');
	const [errorText, setErrorText] = useState<string>('');
	const [findUser, setFindUser] = useState(false);
	const [amount, setAmount] = useState(0);
	const [recipient, setRecipient] = useState<any>({});
	const [password, setPassword] = useState<string>('');
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [passwordError, setPasswordError] = useState<boolean>(false);
	const [
		findUserByEmailOrUsername,
		{ data, isLoading, isError, isSuccess, error },
	] = useFindUserByEmailOrUsernameMutation();
	const { user } = data || {};

	// handle show password
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	// handle change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setEmailOrUsername(value);
		setErrorText('');
	};

	// handle change amount
	const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setAmount(value ? parseInt(value) : 0);
	};

	// handle find user
	const handleFindUser = () => {
		if (!emailOrUsername) {
			setErrorText('Email or Username is required');
			return;
		}

		findUserByEmailOrUsername(emailOrUsername);
	};

	// handle transfer
	const handleTransfer = () => {
		// check if user is active
		if (sender?.is_active === false) {
			toast.error('Your account is not active, please active your account');
			return;
		}
		if (!amount) {
			setErrorText('Amount is required');
			return;
		}
		if (amount < 1) {
			setErrorText('Amount must be greater than or equal to 1');
			return;
		}

		// check sender balance
		if (sender?.m_balance < amount) {
			setErrorText('Insufficient balance');
			toast.error('Insufficient balance');
			return;
		}

		if (!password) {
			setPasswordError(true);
			return;
		}

		const data = {
			amount: Number(amount),
			recipient_id: recipient._id,
			password,
		};

		sendMoney(data);
	};

	useEffect(() => {
		if (isSuccess) {
			setFindUser(true);
			setEmailOrUsername('');
			setErrorText('');
			setRecipient(user);
		}

		if (isError) {
			toast.error((error as fetchBaseQueryError).data?.message);
			setErrorText((error as fetchBaseQueryError).data?.message);
		}
	}, [isSuccess, isError, error]);

	// useEffect for send money
	useEffect(() => {
		if (sendIsSuccess) {
			toast.success('Transfer successful');
			setFindUser(false);
			setAmount(0);
			setPassword('');
			setPasswordError(false);
			setRecipient({});
		}

		if (sendIsError) {
			toast.error((sendError as fetchBaseQueryError).data?.message);
		}
	}, [sendIsSuccess, sendIsError, sendError]);

	return (
		<UserLayout>
			<div className='p-2 '>
				<div className='flex flex-col gap-9'>
					{/* <!-- Contact Form --> */}
					{!findUser && (
						<div className='p-4 bg-transparent border rounded-sm border-stroke '>
							<div className='border-b border-stroke py-4 px-6.5 '>
								<h3 className='font-medium text-gray-100'>Fund Transfer</h3>
							</div>
							<div className='my-2 '>
								<div className='p-6.5'>
									<div className='mb-4.5 flex flex-col gap-6'>
										<div className='w-full '>
											<label className='mb-2.5 block text-gray-100 text-sm '>
												Recipient Email or Username
											</label>
											<input
												type='text'
												placeholder='Enter Email or Username'
												className={`w-full rounded border-[1.5px] ${
													errorText
														? 'border-red-500 text-red-500'
														: 'border-stroke text-gray-100'
												}  bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary`}
												value={emailOrUsername}
												onChange={(e) => handleChange(e)}
											/>
											{errorText && (
												<small className='text-xs text-red-500'>
													{errorText}
												</small>
											)}
										</div>
									</div>

									<button
										className='flex justify-center w-full p-3 mt-3 font-medium rounded bg-btn text-gray disabled:opacity-50 disabled:cursor-not-allowed'
										onClick={handleFindUser}
										disabled={isLoading || !emailOrUsername}
									>
										{isLoading ? (
											<div className='flex items-center justify-center '>
												<PulseLoader color='white' size={10} />
											</div>
										) : (
											'Find User'
										)}
									</button>
									{sender?.is_active === false && (
										<small className='text-center text-red-500'>
											Your account is not active, please active your account{' '}
											<Link
												href='/activate'
												className='text-blue-500 underline'
											>
												here.
											</Link>
										</small>
									)}
								</div>
							</div>
						</div>
					)}

					{/* <!-- Contact Info --> */}
					{findUser && (
						<div className='p-4 bg-transparent border rounded-sm border-stroke '>
							<div className='border-b border-stroke py-4 px-6.5 '>
								<h3 className='font-medium text-gray-100'>
									Recipient Information
								</h3>
							</div>
							<div className='my-2 space-y-2 list-none '>
								<li className='flex items-center justify-between '>
									<p>Name</p>
									<p className='text-gray-500 '>{recipient?.full_name}</p>
								</li>
								<li className='flex items-center justify-between '>
									<p>Email</p>
									<p className='text-gray-500 '>{recipient?.email}</p>
								</li>
								{/* <li className='flex items-center justify-between '>
									<p>Phone</p>
									<p className='text-gray-500 '>{recipient?.phone}</p>
								</li> */}
							</div>
							<hr className='my-3' />
							<div className='my-2 '>
								<div className='p-6.5'>
									<div className='flex flex-col gap-4 '>
										<div className='w-full '>
											<label className='mb-2.5 block text-gray-100 text-xs '>
												Amount
											</label>
											<input
												type='text'
												placeholder='Enter Amount'
												className={`w-full rounded border-[1px] ${
													errorText
														? 'border-red-500 text-red-500'
														: 'border-stroke text-gray-100'
												}  bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary`}
												value={amount}
												onChange={(e) => handleChangeAmount(e)}
											/>
											{errorText && (
												<small className='text-xs text-red-500'>
													{errorText}
												</small>
											)}
										</div>
										{/* password */}
										<div className='relative flex flex-col gap-1'>
											<label
												className={` mb-1
									text-sm font-semibold text-gray-400 ${passwordError && 'text-red-500'}
								`}
											>
												Password
											</label>
											<input
												className={`px-4 py-2 bg-transparent border rounded ${
													passwordError && 'border-red-500'
												}`}
												type={showPassword ? 'text' : 'password'}
												name='password'
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
											<span
												className='absolute right-0 flex items-center px-4 text-gray-600 top-[34px]'
												onClick={handleShowPassword}
											>
												{showPassword ? (
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														strokeWidth={1.5}
														stroke='currentColor'
														className='w-5 h-5'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
														/>
													</svg>
												) : (
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														strokeWidth={1.5}
														stroke='currentColor'
														className='w-5 h-5'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
														/>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
														/>
													</svg>
												)}
											</span>
										</div>
									</div>

									<button
										className='flex justify-center w-full p-3 my-3 font-medium rounded bg-btn text-gray disabled:opacity-50 disabled:cursor-not-allowed'
										onClick={handleTransfer}
										disabled={
											isLoading ||
											!recipient ||
											!amount ||
											amount < 1 ||
											!password
										}
									>
										{isLoading ? (
											<div className='flex items-center justify-center '>
												<PulseLoader color='white' size={10} />
											</div>
										) : (
											'Transfer'
										)}
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</UserLayout>
	);
};

export default Transfer;
