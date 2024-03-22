import {
	useActivateUserMutation,
	useLoadUserQuery,
	useReactivationUserMutation,
} from '@/redux/features/auth/authApi';
import React, { use, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Modal, Spinner } from 'flowbite-react';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import { useRouter } from 'next/navigation';
// Define the structure of the 'pack' prop
interface Pack {
	id: number;
	title: string;
	price: number;
	token: number;
	features: string[];
	icon: JSX.Element;
	bg_color: string;
	subTitle: string;
	packageType: string;
	purpose: string;
	subscriptionFor: number;
}

// Define the props for the SinglePackage component
interface SinglePackageProps {
	pack: Pack;
}

const SinglePackage: React.FC<SinglePackageProps> = ({ pack }) => {
	useLoadUserQuery();
	const router = useRouter();
	const { user } = useSelector((state: any) => state.auth);

	const [activateUser, { isLoading, isError, error, isSuccess }] =
		useActivateUserMutation();

	const [
		reactivationUser,
		{
			isLoading: r_isLoading,
			isError: r_isError,
			error: r_error,
			isSuccess: r_isSuccess,
		},
	] = useReactivationUserMutation();

	const [packagePrice, setPackagePrice] = useState<number>(0);
	const [token, setToken] = useState<number>(0);
	const [packageType, setPackageType] = useState<string>('');
	const [openModal, setOpenModal] = useState(false);

	// handle select package
	const handleSelectPackage = (p: SinglePackageProps) => {
		if (user?.m_balance < p.pack.price) {
			toast.error('Insufficient balance');
			return;
		}
		setPackagePrice(p.pack.price);
		setPackageType(p.pack.packageType);
		setToken(p.pack.token);
		setOpenModal(true);
	};

	// confirm handler
	const handleConfirm = () => {
		const data = {
			packageType,
			packagePrice,
			month: pack.subscriptionFor,
			token,
		};

		if (pack.purpose === 'a') {
			activateUser(data);
		} else {
			reactivationUser(data);
		}
	};

	useEffect(() => {
		if (isSuccess) {
			setOpenModal(false);
			toast.success('Package activated successfully');
			router.push('/subscription-record');
		}
		if (isError) {
			setOpenModal(false);
			toast.error((error as fetchBaseQueryError).data?.message);
		}
	}, [isSuccess, isError]);

	useEffect(() => {
		if (r_isSuccess) {
			setOpenModal(false);
			toast.success('Package activated successfully');
			router.push('/subscription-record');
		}
		if (r_isError) {
			setOpenModal(false);
			toast.error((r_error as fetchBaseQueryError).data?.message);
		}
	}, [r_isSuccess, r_isError]);

	return (
		<>
			<div className='pb-10 overflow-hidden nft__card'>
				<div className='h-full text-center rounded-t bg-slate-900'>
					<div className={`p-3 text-center rounded-t ${pack.bg_color}`}>
						<span className='text-8xl w-[fit-content] mx-auto block py-5'>
							{pack.icon}
						</span>
						<h2 className='mb-3 text-3xl font-bold uppercase font-OutFit'>
							{pack.title}
						</h2>
					</div>
					<h2 className='mt-5 mb-3 text-4xl font-bold font-OutFit'>
						${pack.price}
					</h2>
					<p className='text-xs mb-3 font-semibold uppercase'>
						{pack.subTitle}
					</p>
					<ul className='px-3 space-y-2 text-left uppercase list-disc list-inside '>
						{pack.features.map((feature, index) => (
							<li key={index} className='text-[12px] font-semibold'>
								{feature}
							</li>
						))}
					</ul>
				</div>
				<div className=''>
					<button
						className='w-full flex items-center justify-center py-2 rounded-b btn__bg'
						onClick={() => handleSelectPackage({ pack })}
					>
						{pack.purpose === 'a' ? 'Get Started' : 'Subscribe'}
					</button>
				</div>
			</div>

			{/* Start Model */}
			<Modal
				show={openModal}
				onClose={() => setOpenModal(false)}
				position={'center'}
				className='mt-24'
			>
				{isLoading ? (
					<Modal.Body
						className='flex flex-col items-center justify-center text-black h-40'
						style={{ padding: '2rem' }}
					>
						<Spinner aria-label='Extra large spinner example' size='xl' />
						<p className='mt-3'>Please wait while we process your request...</p>
					</Modal.Body>
				) : (
					<>
						<Modal.Header>
							<span>Confirm Purchase</span>
						</Modal.Header>
						<Modal.Body
							className='flex flex-col items-center justify-center text-black'
							style={{ padding: '2rem' }}
						>
							<p>
								Are you sure you want to subscribe to the {packageType} package
								for ${packagePrice}?
							</p>
							<div className='flex justify-center mt-5'>
								<Button
									onClick={() => setOpenModal(false)}
									className='mr-5'
									color='secondary'
								>
									Cancel
								</Button>
								<Button
									onClick={handleConfirm}
									color='primary'
									className='btn__bg'
								>
									Confirm
								</Button>
							</div>
						</Modal.Body>
					</>
				)}
			</Modal>
		</>
	);
};

export default SinglePackage;
