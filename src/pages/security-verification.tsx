import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	useResendVerificationEmailMutation,
	useVerifyEmailMutation,
} from '@/features/auth/authApi';
import { fetchBaseQueryError } from '@/services/helpers';
import { ExplanationIcon } from '@/utils/icons/CommonIcons';
import ScaleLoader from 'react-spinners/ScaleLoader';

const SecurityVerification = () => {
	const [verifyEmail, { isLoading, isSuccess, isError, error }] =
		useVerifyEmailMutation();
	const router = useRouter();
	const { email, path } = router.query;

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

	const [code, setCode] = useState<string>('');
	const [isResend, setIsResend] = useState<boolean>(false);

	// handle resend email verification
	const handleResend = () => {
		resendVerificationEmail({ email: email as string });
		setIsResend(true);
	};

	// submit form
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		verifyEmail({ email: email as string, code: code });
	};

	// handle change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setCode(value);
		if (value.length === 6) {
			verifyEmail({ email: email as string, code: value });
		}
	};

	useEffect(() => {
		if (isError) {
			toast.error((error as fetchBaseQueryError).data.message);
		}
		if (isSuccess) {
			toast.success('Email verified successfully');
			router.push({
				pathname: `${path}`,
				query: { email: email },
			} as any);
		}
	}, [isSuccess, isError]);

	useEffect(() => {
		if (isResendError) {
			toast.error((resendError as fetchBaseQueryError).data.message);
		}
		if (isResendSuccess) {
			toast.success('Email verification code sent successfully');
		}
	}, [isResendSuccess, isResendError]);

	return (
		<>
			<div className='px-2 py-2 '>
				<Link href='/'>
					<Image src='/logo_white_2.png' alt='WFC' width={60} height={10} />
				</Link>
			</div>
			<div className='px-6 mx-auto my-10 md:w-6/12 '>
				<h1 className='text-2xl font-bold text-white '>
					Security Verification
				</h1>
				<p className='text-xs text-gray-500 '>
					To secure your account, please complete the following verification
				</p>
				<div className='my-8'>
					<div className='space-y-4 text-white '>
						<div className=' relative flex flex-col gap-1'>
							<label className='text-sm font-semibold text-gray-400 '>
								Email Verification Code
							</label>
							<input
								className='px-4 py-2 bg-transparent border rounded hover:border-yellow-500 focus:border-yellow-600  focus:outline-none'
								type='text'
								value={code}
								onChange={(e) => handleChange(e)}
							/>
							<button
								className=' absolute right-2 top-9 text-xs font-bold text-yellow-700 '
								onClick={handleResend}
							>
								{isResend ? (
									<span className=' flex text-gray-500'>
										Verification code sent
										<ExplanationIcon h={4} w={4} color={''} />
									</span>
								) : (
									'Get code'
								)}
							</button>

							<small className=' text-gray-500'>
								Enter the 6-digit code sent to ******
							</small>
						</div>

						<div className='my-6 space-y-4'>
							<button
								className='w-full py-3 font-semibold text-gray-800 bg-yellow-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-600'
								disabled={isLoading || isResendLoading || code.length < 6}
							>
								{isLoading ? (
									<div className='flex justify-center'>
										<ScaleLoader color={'#ffffff'} loading={true} />
									</div>
								) : (
									'Next'
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SecurityVerification;
