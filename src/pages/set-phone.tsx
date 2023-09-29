import UserLayout from '@/components/layout/UserLayout';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import PhoneInput from 'react-phone-input-2';

import { useAddPhoneNumberMutation } from '@/features/auth/authApi';
import { useRouter } from 'next/router';
import { CloseIcon, EditIcon } from '@/utils/icons/CommonIcons';
import { EmailIcon, PhoneIcon } from '@/utils/icons/SecurityIcons';
import { maskEmail, maskPhoneNumber } from '@/utils/functions';
import { ScaleLoader } from 'react-spinners';
const SetPhoneNumber = () => {
	const router = useRouter();
	const { user } = useSelector((state: any) => state.auth);
	const [addPhoneNumber, { isLoading, isError, isSuccess, error }] =
		useAddPhoneNumberMutation();
	const [phoneNumber, setPhoneNumber] = React.useState('');
	const [errorText, setErrorText] = useState<string>('');
	const [stateError, setStateError] = useState<boolean>(false);

	const handlePhoneNumberChange = (value: string) => {
		setPhoneNumber(value);
	};

	// submit phone number
	const handleSubmit = () => {
		if (!phoneNumber) {
			setStateError(true);
			setErrorText('Please enter your phone number');
			return;
		}
		addPhoneNumber({ phone: phoneNumber, id: user?._id });
	};

	React.useEffect(() => {
		if (isError) {
			setStateError(true);
			setErrorText('Phone number already exists');
		}

		if (isSuccess) {
			toast.success('Phone number added successfully');
			router.push('/security');
		}
	}, [isError, isSuccess]);

	return (
		<UserLayout>
			{user?.phone ? (
				<div className='mx-auto my-20 space-y-4 md:w-6/12'>
					<h1 className='text-2xl font-semibold text-center '>
						Change your phone number
					</h1>
					<div className='flex items-center justify-center gap-10'>
						<div className='flex items-center gap-2 '>
							<PhoneIcon h={20} w={20} />
							<p>
								{user?.email ? maskPhoneNumber(user?.phone) : 'No phone found'}
							</p>
						</div>
						<div onClick={() => console.log('clicked')}>
							<EditIcon />
						</div>
					</div>
				</div>
			) : (
				<div className='flex flex-col items-center justify-center h-screen'>
					<h1 className='text-2xl font-semibold'>
						Please Add Your Phone Number
					</h1>
					<div className='w-full px-4 my-8 md:w-[50vw]'>
						<div className='space-y-4 text-white '>
							<div className='relative flex flex-col gap-1 '>
								<label className='text-sm font-semibold text-gray-400 '>
									Please enter a valid phone number
								</label>
								<PhoneInput
									placeholder='Enter phone number'
									value={phoneNumber}
									onChange={(phoneNumber) =>
										handlePhoneNumberChange(phoneNumber)
									}
									country={'us'}
									dropdownStyle={{
										backgroundColor: '#1f1f1f',
										color: 'gray',
									}}
									inputStyle={{
										backgroundColor: '#1f1f1f',
										color: 'gray',
										width: '100%',
										height: '45px',
									}}
									buttonStyle={{
										backgroundColor: '#1f1f1f',
									}}
								/>
								<span
									className='absolute right-0 cursor-pointer flex items-center px-4 text-gray-600 top-[34px]'
									onClick={() => setPhoneNumber('')}
								>
									<CloseIcon h={6} w={6} color={'gray'} />
								</span>

								{stateError && (
									<small className='text-xs text-red-500'>{errorText}</small>
								)}
							</div>

							<div className='my-6 space-y-4'>
								<button
									className='w-full py-3 font-semibold text-gray-800 bg-yellow-600 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-700'
									disabled={isLoading || phoneNumber.length < 10}
									onClick={handleSubmit}
								>
									{isLoading ? (
										<div className='flex justify-center'>
											<ScaleLoader color={'#ffffff'} loading={true} />
										</div>
									) : (
										'Submit'
									)}
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</UserLayout>
	);
};

export default SetPhoneNumber;
