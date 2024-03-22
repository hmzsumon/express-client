'use client';
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import TableBox from '@/components/Box/TableBox';
import { FaCaretRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useLoadUserQuery } from '@/redux/features/auth/authApi';
import { toast } from 'react-toastify';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import { useEarnToMainMutation } from '@/redux/features/transfer/transferApi';
import { ClipLoader } from 'react-spinners';

const EarningTransfer = () => {
	useLoadUserQuery();
	const { user } = useSelector((state: any) => state.auth);
	const [amount, setAmount] = useState(0);

	const [earnToMain, { isLoading, isError, isSuccess, error }] =
		useEarnToMainMutation();

	// handle amount change
	const handleAmountChange = (e: any) => {
		const { value } = e.target;
		if (value < 0) {
			toast.error('Amount cannot be negative');
			return;
		}
		setAmount(value);
	};

	// handle form submit
	const handleFormSubmit = (e: any) => {
		e.preventDefault();
		if (amount > user.e_balance) {
			toast.error('Insufficient balance');
			return;
		}
		// transfer
		const data = {
			amount,
		};

		earnToMain(data);
	};

	useEffect(() => {
		if (isError) {
			toast.error((error as fetchBaseQueryError).data.message);
		}
		if (isSuccess) {
			toast.success('Transfer successful');
		}
	}, [isError, isSuccess]);

	return (
		<TableBox>
			<div>
				<h1 className='text-xl text-center font-semibold text-white mb-4'>
					Earning Transfer
				</h1>
				<div>
					<form
						className='flex w-full flex-col gap-4'
						onSubmit={handleFormSubmit}
					>
						{/* Balance Info */}
						<div className=' grid grid-cols-5 '>
							<div className='col-span-2 '>
								<div className='mb-2 block '>
									<Label
										htmlFor='email2'
										value='Earned Balance'
										className='text-white'
									/>
								</div>
								<input
									type='text'
									placeholder='Enter Email or Username'
									className={`w-full rounded border-[1.5px] text-gray-300 bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary`}
									value={`${Number(user?.e_balance).toFixed(2)} USDT`}
									readOnly
								/>
							</div>
							<div className='flex items-center justify-center col-span-1 mt-8 '>
								<FaCaretRight className='text-5xl text-blue-500 flex items-center justify-center' />
							</div>

							<div className='col-span-2'>
								<div className='mb-2 block '>
									<Label
										htmlFor='password2'
										value='Main Balance'
										className='text-white'
									/>
								</div>
								<input
									type='text'
									placeholder='Enter Email or Username'
									className={`w-full rounded border-[1.5px] text-gray-300 bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary`}
									value={`${Number(user?.m_balance).toFixed(2)} USDT`}
									readOnly
								/>
							</div>
						</div>
						{/*End Balance Info */}

						<div>
							<div className='mb-2 block'>
								<Label
									htmlFor='Enter-amount'
									value='Enter Amount'
									className='text-white'
								/>
							</div>
							<input
								type='number'
								placeholder='Enter Amount'
								className={`w-full rounded border-[1.5px] text-gray-300 bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary`}
								value={amount}
								onChange={handleAmountChange}
							/>
						</div>

						<Button type='submit'>
							{isLoading ? (
								<ClipLoader size={20} color={'#fff'} />
							) : (
								<span>Transfer</span>
							)}
						</Button>
					</form>
				</div>
			</div>
		</TableBox>
	);
};

export default EarningTransfer;
