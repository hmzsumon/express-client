import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchBaseQueryError } from '@/services/helpers';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { Select, Option } from '@material-tailwind/react';
import PulseLoader from 'react-spinners/PulseLoader';
import { useSelector } from 'react-redux';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { m } from 'framer-motion';
import { useCreateWithdrawRequestMutation } from '@/features/withdraw/withdrawApi';
import { CloseIcon2, ExplanationIcon } from '@/utils/icons/CommonIcons';
import { maskEmail } from '@/utils/functions';
import {
	useLoadUserQuery,
	useResendVerificationEmailMutation,
} from '@/features/auth/authApi';

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
	const [payId, setPayId] = React.useState<string>('');
	const [amount, setAmount] = React.useState<number>(0);
	const [availableAmount, setAvailable] = React.useState<number>(0);
	const [receiveAmount, setReceiveAmount] = React.useState<number>(0);
	const [errorText, setErrorText] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');
	const [showPassword, setShowPassword] = React.useState<boolean>(false);

	// show password
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	// set available amount
	useEffect(() => {
		const balance = user?.m_balance;
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
		if (value < 5) {
			setErrorText('Minimum amount is 5 USDT');
			return;
		} else if (value > availableAmount) {
			setErrorText('Insufficient balance');
			return;
		} else {
			setErrorText('');
		}

		if (way === 'crypto') {
			setReceiveAmount(Number(value) - Number(value) * 0.05);
		} else {
			setReceiveAmount(Number(value) - Number(value) * 0.03);
		}
	};

	// handle submit
	const handleSubmit = () => {
		const data = {
			amount: amount,
			net_amount: receiveAmount,
			charge_p: way === 'crypto' ? 0.05 : 0.0,
			method: {
				name: way,
				network: network,
				address: address,
				pay_id: payId,
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
		<div className='space-y-2 '>
			{/* <div className=''>
				<Select
					color='blue'
					label='Select Way'
					value={way}
					onChange={(selectedValue) => setWay(selectedValue ?? '')}
					className='disabled:border disabled:bg-transparent text-blue-gray-100 disabled:opacity-50 disabled:cursor-not-allowed'
					disabled
				>
					<Option value='binance'>Binance Pay</Option>
					<Option value='crypto'>Crypto</Option>
				</Select>
			</div> */}
			{way === 'crypto' && (
				<div className=''>
					<Select
						label='Select Network'
						className='text-blue-gray-100 '
						value={network}
						onChange={(selectedValue) => setNetwork(selectedValue ?? '')}
					>
						<Option value='trc20'>TRC20</Option>
						<Option value='erc20'>ERC20</Option>
					</Select>
				</div>
			)}

			<div className='flex flex-col '>
				<label htmlFor='' className='my-2 text-xs'>
					{way === 'crypto' ? 'Enter Address' : 'Enter Binance Pay ID'}
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
						{user?.m_balance ? (
							<span className='mx-1 text-blue-gray-300'>
								{Number(availableAmount).toFixed(2)}
							</span>
						) : (
							<PulseLoader size={10} color={'#fff'} />
						)}
						USDT
					</span>
					<span>
						Minimum Amount
						<span className='mx-1 text-blue-gray-300'>5</span>
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
			<div className='grid '>
				{/* <div className='space-y-1 '>
					<p className='text-xs text-blue-gray-600'>Receive Amount</p>
					<p className='font-bold text-blue-gray-300'>
						<span>{receiveAmount.toFixed(2)}</span> USDT
					</p>
					<p className='text-xs text-blue-gray-600'>
						processing fee:{' '}
						<span className='italic font-bold text-blue-gray-300'>
							{way === 'crypto' ? '5%' : '3%'}
						</span>{' '}
					</p>
				</div> */}

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
