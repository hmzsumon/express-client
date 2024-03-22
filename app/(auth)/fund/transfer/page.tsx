'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
import Link from 'next/link';
import {
	useFindUserByEmailOrUsernameMutation,
	useLoadUserQuery,
} from '@/redux/features/auth/authApi';
import { useSendMoneyMutation } from '@/redux/features/transfer/transferApi';
import { useSelector } from 'react-redux';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import Verification from '@/components/Verification/Verification';

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

	const { user: sender } = useSelector((state: any) => state.auth);
	const [emailOrUsername, setEmailOrUsername] = useState('');
	const [errorText, setErrorText] = useState<string>('');
	const [findUser, setFindUser] = useState(false);
	const [amount, setAmount] = useState(0);
	const [recipient, setRecipient] = useState<any>({});
	const [btnDisAbled, setBtnDisAbled] = useState<boolean>(false);
	const [verify, setVerify] = useState<boolean>(false);
	const [
		findUserByEmailOrUsername,
		{ data, isLoading, isError, isSuccess, error },
	] = useFindUserByEmailOrUsernameMutation();
	const { user } = data || {};

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
		// btn disabled
		setBtnDisAbled(true);
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

		const data = {
			amount: Number(amount),
			recipient_id: recipient._id,
		};

		sendMoney(data);
	};

	// after 10 seconds set btn disabled to false
	useEffect(() => {
		setTimeout(() => {
			setBtnDisAbled(false);
		}, 10000);

		return () => {
			setBtnDisAbled(false);
		};
	}, []);

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
			setRecipient({});
			setVerify(false);
		}

		if (sendIsError) {
			toast.error((sendError as fetchBaseQueryError).data?.message);
			setVerify(false);
		}
	}, [sendIsSuccess, sendIsError, sendError]);

	return (
		<>
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
									</div>

									{verify ? (
										<button
											className='flex justify-center w-full p-3 my-3 font-medium rounded bg-btn text-gray disabled:opacity-50 disabled:cursor-not-allowed'
											onClick={handleTransfer}
											disabled={
												isLoading ||
												!recipient ||
												!amount ||
												amount < 1 ||
												sender?.is_active === false ||
												btnDisAbled ||
												!verify
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
									) : (
										<Verification setVerify={setVerify} />
									)}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Transfer;
