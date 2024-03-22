/* eslint-disable react/no-unescaped-entities */
'use client';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import PulseLoader from 'react-spinners/PulseLoader';
import CountrySelect from './CountrySelect';
import { useRouter, useSearchParams } from 'next/navigation';
import {
	useRegisterUserMutation,
	useResendVerificationEmailMutation,
} from '@/redux/features/auth/authApi';
import countries from './countries';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import { addEmail } from '@/redux/signupDataSlice';
import { useDispatch } from 'react-redux';

type Country = {
	code: string;
	name: string;
};

const SignUpPage = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	const dispatch = useDispatch();

	const router = useRouter();
	const searchParams = useSearchParams();
	const searchId = searchParams.get('referral_id');
	const defaultId = '169782172011';
	const referralId = searchId ? searchId : defaultId;
	const [registerUser, { isLoading, isSuccess, isError, error }] =
		useRegisterUserMutation();

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

	const [firsName, setFirstName] = useState<string>('');
	const [f_name_error, setF_name_error] = useState<boolean>(false);
	const [lastName, setLastName] = useState<string>('');
	const [l_name_error, setL_name_error] = useState<boolean>(false);
	const [username, setUsername] = useState<string>('');
	const [usernameError, setUsernameError] = useState<boolean>(false);
	const [email, setEmail] = useState<string>('');
	const [emailError, setEmailError] = useState<boolean>(false);
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [checkedError, setCheckedError] = useState<boolean>(false);
	const [phone, setPhone] = useState<string>('');
	const [country, setCountry] = useState<Country>(countries[229]);
	const [code, setCode] = useState<string>('us');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [passwordError, setPasswordError] = useState<boolean>(false);
	const [confirmPasswordError, setConfirmPasswordError] =
		useState<boolean>(false);
	const [referralCode, setReferralCode] = useState<string>(
		referralId as string
	);
	const [errorText, setErrorText] = useState<string>('');
	const [phoneError, setPhoneError] = useState<string>('');
	const [stateError, setStateError] = useState<boolean>(false);

	// set referral code
	useEffect(() => {
		if (referralId) {
			setReferralCode(referralId as string);
		}
	}, [referralId]);

	useEffect(() => {
		const smallCode = country?.code?.toLowerCase();
		setCode(smallCode);
	}, [country]);

	// handle show password
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	// handle checkbox
	const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(!isChecked);
		setCheckedError(false);
	};

	// handle change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === 'firsName') {
			setFirstName(value);
			setF_name_error(false);
		}
		if (name === 'lastName') {
			setLastName(value);
			setL_name_error(false);
		}

		if (name === 'username') {
			console.log(value);
			setUsername(value);
			setUsernameError(false);
			setErrorText('');
		}

		if (name === 'email') {
			setEmail(value);
			setEmailError(false);
		}

		if (name === 'password') {
			setPassword(value);
			setPasswordError(false);
		}

		if (name === 'confirmPassword') {
			setConfirmPassword(value);
			setConfirmPasswordError(false);
		}

		if (name === 'referralCode') {
			setReferralCode(value);
		}
	};

	// handlePhoneNumberChange
	const handlePhoneNumberChange = (value: string) => {
		setPhone(value);
		setPhoneError('');
	};
	// submit form
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		if (!firsName) {
			setF_name_error(true);
			return;
		}

		if (!lastName) {
			setL_name_error(true);
			return;
		}

		if (!username) {
			setUsernameError(true);
			setErrorText('Please enter your username');
			return;
		}

		if (!email) {
			setEmailError(true);
			return;
		}
		if (!phone) {
			setPhoneError('Please enter your phone number');
			setErrorText('Please enter your phone number');
			return;
		}

		// validate password
		if (password.length < 6) {
			setPasswordError(true);
			setErrorText('Password must be at least 6 characters ');
			return;
		} else {
			setPasswordError(false);
		}

		if (password !== confirmPassword) {
			setConfirmPasswordError(true);
			setErrorText('Passwords do not match');
			return;
		}

		if (!isChecked) {
			setCheckedError(true);
			return;
		}

		const data = {
			first_name: firsName,
			last_name: lastName,
			username: username,
			email: email,
			phone: phone,
			country: country.name,
			country_code: code,
			password: password,
			confirm_password: confirmPassword,
			referral: referralCode ? referralCode : '169782172011',
		};

		registerUser(data);

		// router.push({
		// 	pathname: '/email-verify',
		// 	query: { email: email },
		// } as any);
	};

	useEffect(() => {
		if (isError) {
			toast.error((error as fetchBaseQueryError).data.message);

			if ((error as fetchBaseQueryError).status === 409) {
				resendVerificationEmail({ email });
				router.push({
					pathname: '/email-verify',
					query: { email: email },
				} as any);
			}
			if (
				(error as fetchBaseQueryError).data.message ===
				'Duplicate username Entered'
			) {
				setUsernameError(true);
				setErrorText('Username already exists');
			}
		}
		if (isSuccess) {
			toast.success(
				'Registration successful. Please check your email for verification'
			);
			dispatch(addEmail(email));
			router.push('/email-verify');
		}
	}, [isSuccess, isError]);

	return (
		<div className='container  mx-auto text-white'>
			{/* <div className=' relative'>
				<Image
					data-aos='zoom-in-up'
					className='rotate__animate fixed md:-bottom-20 right-0 left-0 md:left-[30%]'
					src={weelImg}
					alt=''
				/>
			</div> */}
			<div className=' w-full md:w-6/12 mx-auto px-3'>
				{/* Sign up form */}
				<div className=' '>
					<form onSubmit={handleSubmit}>
						<div className='space-y-4 text-white '>
							<div className='grid grid-cols-2 gap-2 '>
								{/* Ends First Name */}
								<div className='flex flex-col gap-1'>
									<label
										className={`text-sm font-semibold text-gray-400 ${
											f_name_error && 'text-red-500'
										}`}
									>
										First Name
									</label>
									<input
										className={`px-4 py-2 bg-transparent border rounded ${
											f_name_error && 'border-red-500'
										}`}
										type='text'
										value={firsName}
										name='firsName'
										onChange={handleChange}
									/>
									{f_name_error && (
										<small className='text-xs text-red-500'>
											Please enter your first name
										</small>
									)}
								</div>
								{/* End First Name */}

								{/* Start Last Name */}
								<div className='flex flex-col gap-1'>
									<label
										className={`text-sm font-semibold text-gray-400 ${
											l_name_error && 'text-red-500'
										}`}
									>
										Last Name
									</label>
									<input
										className={`px-4 py-2 bg-transparent border rounded ${
											l_name_error && 'border-red-500'
										}`}
										type='text'
										value={lastName}
										name='lastName'
										onChange={handleChange}
									/>
									{l_name_error && (
										<small className='text-xs text-red-500'>
											Please enter your last name
										</small>
									)}
								</div>
								{/* End Last Name */}
							</div>

							{/* Start username  */}
							<div className='flex flex-col gap-1'>
								<label
									className={`
									text-sm font-semibold text-gray-400 ${emailError && 'text-red-500'}
								`}
								>
									Username
								</label>
								<input
									className={`first-letter:uppercase px-4 py-2 bg-transparent border rounded ${
										usernameError && 'border-red-500'
									}`}
									type='text'
									value={username}
									name='username'
									onChange={handleChange}
								/>
								{usernameError && (
									<small className='text-xs text-red-500'>{errorText}</small>
								)}
							</div>
							{/* End username  */}

							{/* Start Email */}
							<div className='flex flex-col gap-1'>
								<label
									className={`
									text-sm font-semibold text-gray-400 ${emailError && 'text-red-500'}
								`}
								>
									Email
								</label>
								<input
									className={`first-letter:uppercase px-4 py-2 bg-transparent border rounded ${
										emailError && 'border-red-500'
									}`}
									type='email'
									value={email}
									name='email'
									onChange={handleChange}
								/>
								{emailError && (
									<small className='text-xs text-red-500'>
										Please enter a valid email address
									</small>
								)}
							</div>
							{/* End Email */}

							{/* Country */}

							<div>
								<CountrySelect
									countries={countries}
									country={country}
									setCountry={setCountry}
								/>
							</div>
							{/* End Country */}

							{/*Start Phone */}
							<div className='space-y-4 text-white '>
								<div className='relative flex flex-col gap-1 '>
									<label
										className={`text-sm font-semibold text-gray-400
									${phoneError && 'text-red-500'}
									`}
									>
										Phone number
									</label>
									<PhoneInput
										placeholder='Enter phone number'
										value={phone}
										onChange={(phoneNumber) =>
											handlePhoneNumberChange(phoneNumber)
										}
										country={code}
										dropdownStyle={{
											backgroundColor: '#05003A',
											color: 'gray',
										}}
										inputStyle={{
											backgroundColor: 'transparent',
											color: ` ${phoneError ? 'red' : '#fff'}`,
											width: '100%',
											height: '45px',
											border: ` ${
												phoneError ? '1px solid red' : '1px solid #fff'
											}`,
											borderRadius: '5px',
										}}
										buttonStyle={{
											backgroundColor: 'transparent',
											borderColor: ` ${phoneError ? 'red' : '#fff'}`,
										}}
										countryCodeEditable={false}
										disableDropdown={true}
									/>

									{phoneError && (
										<small className='text-xs text-red-500'>{phoneError}</small>
									)}
								</div>
							</div>
							{/* End Phone */}

							{/* Referral ID */}

							{/* Password */}
							<div className='relative flex flex-col gap-1'>
								<label
									className={`
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
									onChange={handleChange}
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
								{passwordError && (
									<small className='text-xs text-red-500'>{errorText}</small>
								)}
							</div>

							<div className='relative flex flex-col gap-1'>
								<label
									className={`
									text-sm font-semibold text-gray-400 ${confirmPasswordError && 'text-red-500'}
								`}
								>
									Confirm Password
								</label>
								<input
									className={`px-4 py-2 bg-transparent border rounded ${
										confirmPasswordError && 'border-red-500'
									}`}
									type={showPassword ? 'text' : 'password'}
									name='confirmPassword'
									value={confirmPassword}
									onChange={handleChange}
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
								{confirmPasswordError && (
									<small className='text-xs text-red-500'>{errorText}</small>
								)}
							</div>

							{/* End Password */}

							<div className='flex flex-col gap-1'>
								<label className='text-sm font-semibold text-gray-400 '>
									Referral ID (OPtional)
								</label>
								<input
									className='px-4 py-2 bg-transparent border rounded'
									type='text'
									name='referralCode'
									value={referralCode}
									onChange={handleChange}
									readOnly={referralId ? true : false}
								/>
							</div>

							{/* End Referral ID */}
							<div className='my-6 space-y-4'>
								<div className='flex items-center'>
									<input
										id='checked-checkbox'
										type='checkbox'
										checked={isChecked}
										onChange={handleCheckbox}
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									/>
									<label
										htmlFor='checked-checkbox'
										className='ml-2 text-xs font-medium text-white dark:text-gray-300'
									>
										By clicking on the "Next" button below, you agree to our{' '}
										<Link href='/privacy' className='text-cyan-600'>
											Privacy Policy
										</Link>
									</label>
								</div>

								{checkedError && (
									<small className='text-xs text-red-600 '>
										You need to accept our terms and privacy policy to create an
										account.
									</small>
								)}

								<button className='w-full py-3 font-semibold text-gray-100 rounded bg-btn disabled:opacity-50 disabled:cursor-not-allowed'>
									{isLoading ? (
										<div className='flex items-center justify-center '>
											<PulseLoader color='white' size={10} />
										</div>
									) : (
										'Sign Up'
									)}
								</button>
								{/* if already have an account */}
								<div>
									<p className='text-xs text-center text-gray-400'>
										Already have an account?{' '}
										<Link href='/login'>
											<span className='underline text-cyan-600'>Login</span>
										</Link>
									</p>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
