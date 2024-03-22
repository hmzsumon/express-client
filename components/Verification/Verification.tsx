'use client';
import {
	useResendVerificationEmailMutation,
	useVerifyEmailMutation,
} from '@/redux/features/auth/authApi';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const Verification = ({ setVerify }: any) => {
	const { user } = useSelector((state: any) => state.auth);
	const [code, setCode] = React.useState('');
	const [showPassword, setShowPassword] = React.useState(false);
	const [codeError, setCodeError] = React.useState(false);
	const [send, setSend] = React.useState(false);
	const [count, setCount] = React.useState(30);

	// handle change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setCode(value);
		setCodeError(false);
	};

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

	const [verifyEmail, { isLoading, isSuccess, isError, error }] =
		useVerifyEmailMutation();

	// handle Send Code
	const handleSendCode = () => {
		resendVerificationEmail({ email: user.email });
		setSend(true);
		setCount(30); // Reset the timer when sending the code
	};

	// handle verify email
	const handleVerifyEmail = () => {
		console.log({ email: user.email, code: code });
		verifyEmail({ email: user.email, code: code });
	};

	// set timer after 30 seconds set send to false
	useEffect(() => {
		let timer: any;
		if (send && count > 0) {
			timer = setTimeout(() => {
				setCount((prevCount) => prevCount - 1);
			}, 1000);
		} else if (send && count === 0) {
			setSend(false);
		}

		return () => clearTimeout(timer);
	}, [send, count]);

	// for send code
	useEffect(() => {
		if (isResendError) {
			toast.error((resendError as fetchBaseQueryError).data.message);
		}
		if (isResendSuccess) {
			toast.success('Email verification code sent successfully');
		}
	}, [isResendSuccess, isResendError]);

	// for verify email
	useEffect(() => {
		if (isError) {
			toast.error((error as fetchBaseQueryError).data.message);
			setCodeError(true);
		}
		if (isSuccess) {
			toast.success('Email verified successfully');
			setVerify(true);
		}
	}, [isSuccess, isError]);

	return (
		<div className=' flex flex-col gap-1'>
			<label
				className={`mb-1 text-sm font-semibold text-gray-400 ${
					codeError && 'text-red-500'
				}`}
			>
				Email Verification Code
			</label>
			{codeError && <p className='text-xs text-red-500'>Invalid code</p>}
			<div className='grid grid-cols-12'>
				<input
					className={`px-4 py-2 bg-transparent border rounded-l col-span-9 ${
						codeError && 'border-red-500'
					}`}
					type='text'
					name='password'
					value={code}
					onChange={(e) => handleChange(e)}
				/>
				<button
					className='col-span-3 flex items-center justify-center px-4 bg-btn py-2 text-gray-100 rounded-r text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
					onClick={handleSendCode}
					disabled={send}
				>
					{send ? `${count}s` : 'Send Code'}
				</button>
			</div>

			<div>
				<button
					className='flex justify-center w-full p-3 my-3 font-medium rounded bg-btn text-gray disabled:opacity-50 disabled:cursor-not-allowed'
					onClick={handleVerifyEmail}
					disabled={isLoading || !code}
				>
					{isLoading ? (
						<div className='flex items-center justify-center '>
							<PulseLoader color='white' size={10} />
						</div>
					) : (
						'Verify'
					)}
				</button>
			</div>
		</div>
	);
};

export default Verification;
