'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Select from 'react-select';
import ScaleLoader from 'react-spinners/ScaleLoader';

import PulseLoader from 'react-spinners/PulseLoader';
import { useSelector } from 'react-redux';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import { CloseIcon2, ExplanationIcon } from '@/utils/icons/CommonIcons';
import { maskEmail } from '@/utils/functions';

import { fetchBaseQueryError } from '@/redux/services/helpers';
import { useCreateWithdrawRequestMutation } from '@/redux/features/withdraw/withdrawApi';
import {
	useLoadUserQuery,
	useResendVerificationEmailMutation,
} from '@/redux/features/auth/authApi';

const options1 = [
	{ value: 'binance', label: 'Binance' },
	{ value: 'crypto', label: 'Crypto' },
];
const customStyles = {
	control: (provided: any) => ({
		...provided,
		backgroundColor: 'transparent',
		// border: '1px solid #4b5563',
		borderRadius: '0.375rem',
	}),
	option: (provided: any, state: any) => ({
		...provided,
		color: state.isSelected ? 'black' : 'white',
		backgroundColor: state.isSelected ? 'white' : 'black',
	}),

	menu: (provided: any) => ({
		...provided,
		backgroundColor: 'transparent',
	}),

	singleValue: (provided: any) => ({
		...provided,
		color: 'white',
	}),

	placeholder: (provided: any) => ({
		...provided,
		color: 'white',
	}),
};

const options2 = [
	{ value: 'TRC20', label: 'TRC20' },
	{ value: 'ERC20', label: 'ERC20' },
	{ value: 'Solana', label: 'Solana' },
	{ value: 'BEP20', label: 'BEP20' },
	{ value: 'Polygon', label: 'Polygon' },
];

const LeftContent = () => {
	const [createWithdrawRequest, { isLoading, isSuccess, isError, error }] =
		useCreateWithdrawRequestMutation();

	// call resend email verification api
	const [
		resendVerificationEmail,
		{
			isLoading: isResendLoading,
			isSuccess: isResendSuccess,
			isError: isResendError,
			error: resendError,
		},
	] = useResendVerificationEmailMutation();

	const { refetch } = useLoadUserQuery();
	const { user } = useSelector((state: any) => state.auth);
	const [way, setWay] = React.useState<string>('binance');
	const [network, setNetwork] = React.useState<string>('TRC20');
	const [address, setAddress] = React.useState<string>('');
	const [binanceId, setBinanceId] = React.useState<string>('');
	const [payId, setPayId] = React.useState<string>('');
	const [amount, setAmount] = React.useState<number>(0);
	const [availableAmount, setAvailable] = React.useState<number>(0);
	const [receiveAmount, setReceiveAmount] = React.useState<number>(0);
	const [errorText, setErrorText] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');
	const [showPassword, setShowPassword] = React.useState<boolean>(false);
	const [minAmount, setMinAmount] = React.useState<number>(0);

	const [selectedOption, setSelectedOption] = useState(null);
	const [selectedOption2, setSelectedOption2] = useState(null);

	//handle select way
	const handleChange = (selectedOption: any) => {
		setSelectedOption(selectedOption);
		setWay(selectedOption.value);
	};

	// handle select network
	const handleNetworkChange = (selectedOption: any) => {
		setSelectedOption2(selectedOption);
		setNetwork(selectedOption.value);
	};

	// show password
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	// set minimum amount
	useEffect(() => {
		if (way === 'crypto') {
			setMinAmount(11);
		} else {
			setMinAmount(5);
		}
	}, [way]);

	// set available amount
	useEffect(() => {
		const balance = user?.w_balance;
		if (balance < 0) {
			setAvailable(0);
		} else {
			setAvailable(balance);
		}
	}, [user]);

	// handle amount change
	const handleAmountChange = (e: any) => {
		const value = e.target.value;
		setAmount(value);
		if (value < minAmount) {
			setErrorText(`Minimum amount is ${minAmount} USDT`);
			return;
		} else if (value > availableAmount) {
			setErrorText('Insufficient balance');
			return;
		} else {
			setErrorText('');
		}

		if (way === 'crypto') {
			setMinAmount(11);
			setReceiveAmount(Number(value) - 1);
		} else {
			setMinAmount(5);
			setReceiveAmount(Number(value) - 0.5);
		}
	};

	// handle submit
	const handleSubmit = () => {
		const data = {
			amount: amount,
			net_amount: receiveAmount,
			charge_p: way === 'crypto' ? 1 : 0.5,
			method: {
				name: way,
				network: network,
				address: address,
				pay_id: payId,
				binance_id: binanceId,
			},
		};
		createWithdrawRequest(data);
	};

	useEffect(() => {
		if (isError && error) {
			toast.error((error as fetchBaseQueryError).data?.message);
		}
		if (isSuccess) {
			refetch();
			toast.success('Withdraw request created successfully');
			setAmount(0);
		}
	}, [isError, error, isSuccess]);

	return (
		<div className='space-y-4 '>
			<div className=''>
				<Select
					defaultValue={selectedOption}
					placeholder='Select a method ...'
					onChange={handleChange}
					options={options1}
					styles={customStyles}
					value={selectedOption}
				/>
			</div>
			{way === 'crypto' && (
				<div className='mt-2'>
					<Select
						defaultValue={selectedOption}
						placeholder='Select a network ...'
						onChange={handleNetworkChange}
						options={options2}
						styles={customStyles}
						value={selectedOption2}
					/>
				</div>
			)}

			<div className='flex flex-col '>
				<label htmlFor='' className='my-2 text-xs'>
					{way === 'crypto' ? `Enter ${network} Address` : `Enter Pay ID`}{' '}
				</label>
				<input
					type='text'
					className='py-[5px] px-4 rounded bg-transparent border focus:text-blue-gray-100'
					value={way === 'crypto' ? address : payId}
					onChange={(e) => {
						if (way === 'crypto') {
							setAddress(e.target.value);
						} else {
							setPayId(e.target.value);
						}
					}}
				/>
			</div>

			{way === 'binance' && (
				<div className='flex flex-col '>
					<label htmlFor='' className='my-2 text-xs'>
						Enter Binance ID
					</label>
					<input
						type='text'
						className='py-[5px] px-4 rounded bg-transparent border focus:text-blue-gray-100'
						value={binanceId}
						onChange={(e) => setBinanceId(e.target.value)}
					/>
				</div>
			)}
			{/* Amount */}
			<div className='flex flex-col'>
				<label htmlFor='' className='my-2 text-xs'>
					Enter Amount
				</label>
				<input
					type='number'
					color='blue'
					className={`py-[5px] px-4 rounded bg-transparent border focus:text-blue-gray-100 text-blue-gray-100
					${errorText ? 'text-red-500' : 'text-blue-gray-100'}`}
					value={amount}
					onChange={handleAmountChange}
				/>

				<small className='flex items-center justify-between px-1 mt-1 text-blue-gray-400'>
					<span className=''>
						Available
						{user?.w_balance ? (
							<span className='mx-1 text-blue-gray-300'>
								{Number(user?.w_balance).toFixed(2)}
							</span>
						) : (
							<span className='mx-1 text-blue-gray-300'>
								{Number(availableAmount).toFixed(2)}
							</span>
						)}
						USDT
					</span>
					<span>
						Minimum Amount
						<span className='mx-1 text-blue-gray-300'>
							{minAmount.toFixed(2)}
						</span>
						USDT
					</span>
				</small>
				{errorText && <small className='text-red-500'>{errorText}</small>}
			</div>

			{/* Password */}
			<div className='flex flex-col '>
				<label htmlFor='' className='my-2 text-xs'>
					Password
				</label>

				<div className='relative '>
					<input
						type={showPassword ? 'text' : 'password'}
						className='py-[5px] w-full px-4 rounded bg-transparent border focus:text-blue-gray-100'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<span>
						{showPassword ? (
							<AiFillEye
								className='absolute text-xl cursor-pointer text-blue-gray-300 right-3 top-[8px]'
								onClick={handleShowPassword}
							/>
						) : (
							<AiFillEyeInvisible
								className='absolute text-xl cursor-pointer text-blue-gray-300 right-3 top-[8px]'
								onClick={handleShowPassword}
							/>
						)}
					</span>
				</div>
			</div>

			<hr className='my-2 border border-blue-gray-900 ' />
			{user?.is_withdraw_requested && (
				<small className='text-center text-red-500 '>
					Your withdrawal request is under processing.
				</small>
			)}
			<div className='grid grid-cols-2 '>
				<div className='space-y-1 '>
					<p className='text-xs text-blue-gray-600'>Receive Amount</p>
					<p className='font-bold text-blue-gray-300'>
						<span>{receiveAmount.toFixed(2)}</span> USDT
					</p>
					<p className='text-xs text-blue-gray-600'>
						Network fee:{' '}
						<span className='italic font-bold text-blue-gray-300'>
							{way === 'crypto' ? '1 USDT' : '0.5 USDT'}
						</span>{' '}
					</p>
				</div>

				<div className='flex items-center justify-center '>
					<button
						className='flex items-center justify-center w-full py-2 font-bold rounded bg-btn text-blue-gray-100 disabled:opacity-50 disabled:cursor-not-allowed '
						disabled={
							errorText
								? true
								: false || !amount
								? true
								: false || user?.is_withdraw_requested || !password
						}
						onClick={handleSubmit}
					>
						{isLoading ? (
							<ScaleLoader height={15} color={'#fff'} />
						) : (
							<span>Confirm</span>
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default LeftContent;
