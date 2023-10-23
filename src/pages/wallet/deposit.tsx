import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchBaseQueryError } from '@/services/helpers';
import UserLayout from '@/components/layout/UserLayout';
import {
	useCreateDepositRequestMutation,
	useGetActiveDepositMethodQuery,
	useGetMyDepositsQuery,
} from '@/features/deposit/depositApi';

import { Dialog, DialogBody } from '@material-tailwind/react';
import { useRouter } from 'next/router';

import { IoCloseCircleOutline } from 'react-icons/io5';
import { ScaleLoader, SyncLoader } from 'react-spinners';
import { HiArrowSmLeft } from 'react-icons/hi';
import { HistoryIcon } from '@/global/icons/CommonIcons';
import CopyToClipboard from '@/utils/CopyToClipboard';
import DepositRecords from '@/components/Deposits/DepositRecords';
import { m } from 'framer-motion';
import ioBaseUrl from '@/config/ioBaseUrl';
import socketIOClient from 'socket.io-client';
const Deposit = () => {
	const [createDepositRequest, { isError, isSuccess, isLoading, error }] =
		useCreateDepositRequestMutation();
	const router = useRouter();

	const {
		data,
		refetch,
		isLoading: h_isLoading,
		isSuccess: h_isSuccess,
	} = useGetMyDepositsQuery(undefined);

	// get active deposit method
	const {
		data: methodData,
		isLoading: m_isLoading,
		refetch: m_refetch,
	} = useGetActiveDepositMethodQuery(undefined);
	const { method } = methodData || {};

	const { deposits } = data || [];
	// console.log('deposits', deposits);

	const [depositMethod, setDepositMethod] = useState<any>(method);
	const [textError, setTextError] = useState<string>('');
	const [tnxError, setTnxError] = useState<string>('');
	const [amount, setAmount] = useState<number>(11);
	const [transactionId, setTransactionId] = useState<string>('');
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [bonusTex, setBonusTex] = useState<boolean>(false);
	const [is_bonus, setIs_bonus] = useState<boolean>(false);

	const handleOpen = () => setOpen(!open);
	const handleOpen2 = () => {
		setOpen2(!open2);
		refetch();
	};

	const handleChange = (e: any) => {
		setAmount(e.target.value);
		if (e.target.value < 11) {
			setTextError('Minimum amount is $10');
		} else {
			setTextError('');
		}

		if (e.target.value >= 11) {
			setBonusTex(true);
		} else {
			setBonusTex(false);
		}
	};

	const handleSubmit = async () => {
		if (amount < 10) {
			setTextError('Minimum amount is $11');
		} else if (!transactionId) {
			setTnxError('Please enter a valid transaction id');
			return;
		} else {
			setTextError('');
			const data = {
				amount: amount,
				transactionId: transactionId,
				is_bonus: is_bonus,
				method,
			};

			// console.log('data', data);

			createDepositRequest(data);
			setAmount(10);
		}
	};

	useEffect(() => {
		if (isError && error) {
			if (
				typeof error === 'object' &&
				'status' in error &&
				(error.status as number) === 405
			) {
				setTnxError('The Transaction id is already used');
			} else {
				toast.error((error as fetchBaseQueryError).data.message);
			}
		}
		if (isSuccess) {
			setOpen(false);
			toast.success('Deposit request created successfully');
			setTransactionId('');
			setTnxError('');
		}
	}, [isError, isSuccess, error]);

	useEffect(() => {
		const socket = socketIOClient(ioBaseUrl, {
			transports: ['websocket', 'polling'],
		});

		socket.on('connect', () => {
			console.log('connected');
		});
		socket.on('deposit-method', (method: any) => {
			console.log('notification', method);
			// setDepositMethod(method);
			m_refetch();
		});

		socket.on('disconnect', () => {
			console.log('disconnected');
		});

		return () => {
			socket.disconnect();
		};
	}, [m_refetch]);

	return (
		<UserLayout>
			<div>
				<div className='px-2 py-5 md:py-10 '>
					<div className='px-4 py-4 mx-auto  md:w-6/12  border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
						<div className='flex items-center justify-between '>
							<div className=''>
								<HiArrowSmLeft
									className='text-2xl cursor-pointer text-blue-gray-300 hover:text-blue-700'
									onClick={() => router.back()}
								/>
							</div>
							<div className=''>
								<h2 className='text-xl text-center text-blue-gray-300'>
									Deposit USDT
								</h2>
							</div>
							<div className='cursor-pointer '>
								<span onClick={handleOpen2}>
									<HistoryIcon h={6} w={6} color={'gray'} />
								</span>
							</div>
						</div>

						{/* Method */}
						{m_isLoading ? (
							<div className='flex items-center justify-center '>
								<SyncLoader color='#EAB308' size={10} />
							</div>
						) : (
							<div>
								<div className='flex flex-col items-center justify-center my-4 '>
									<img
										src={method?.qr_code_url}
										alt='Deposit'
										className=' w-36 md:w-60'
									/>
									<p className='my-3 text-blue-gray-400'>
										Send only USDT to this address
									</p>
								</div>
								<hr className='border border-[#2e72d2]' />
								<div className='my-6 space-y-4 '>
									<div>
										<p className='text-sm text-blue-gray-400'>Network</p>
										<p className='text-blue-gray-100'>Tron (TRC20)</p>
									</div>
									<div>
										<p className='text-sm text-blue-gray-400'>Wallet Address</p>
										<div className='flex items-center justify-between'>
											<p className='text-sm text-blue-gray-100'>
												{method?.trx_address}
											</p>
											<CopyToClipboard
												text={method?.trx_address}
												size='text-md'
											/>
										</div>
									</div>

									{/* Confirm Form */}
									<div className='mt-10 space-y-4 '>
										<div className='relative flex flex-col gap-1 '>
											<label className='mb-1 ml-1 text-sm font-semibold text-gray-400 '>
												Enter Amount
											</label>
											<input
												placeholder='Enter Amount >11'
												className={`px-4 py-1 ${
													textError && 'border-red-500'
												} text-blue-gray-200 bg-transparent border rounded focus:outline-none`}
												type='number'
												value={amount}
												onChange={(e) => handleChange(e)}
											/>

											{textError && (
												<p className='text-xs text-red-500'>{textError}</p>
											)}
										</div>

										<div className='relative flex flex-col gap-1 '>
											<label className='mb-1 ml-1 text-sm font-semibold text-gray-400 '>
												Trx ID / Order ID
											</label>
											<input
												className={`px-4 py-1 text-blue-gray-200 bg-transparent border rounded  focus:outline-none`}
												type='text'
												value={transactionId}
												onChange={(e) => setTransactionId(e.target.value)}
											/>

											<div className='flex items-center justify-between '>
												{tnxError ? (
													<p className='text-xs text-red-500'>{tnxError}</p>
												) : (
													<small>
														Please enter a valid transaction id otherwise your
														deposit will be rejected.
													</small>
												)}
											</div>
										</div>
									</div>
									{/*End Confirm Form */}

									<div className='px-4 py-4 space-y-2 text-xs bg-[#030039] md:text-md'>
										<div className='flex items-center justify-between '>
											<p className='text-blue-gray-400 '>Minimum deposit</p>
											<p className='text-blue-gray-100 '> &gt;10 USDT </p>
										</div>
										<div className='flex items-center justify-between '>
											<p className='text-blue-gray-400 '>Expected arrival</p>
											<p className='text-blue-gray-100 '>
												{' '}
												1 network confirmation{' '}
											</p>
										</div>
										<div className='flex items-center justify-between '>
											<p className='text-blue-gray-400 '>Expected unlock</p>
											<p className='text-blue-gray-100 '>
												{' '}
												1 network confirmation{' '}
											</p>
										</div>
									</div>
								</div>
							</div>
						)}

						<div className=''>
							<button
								className='w-full py-1 font-bold rounded-sm bg-btn text-blue-gray-100 disabled:opacity-50 disabled:cursor-not-allowed '
								onClick={handleSubmit}
								disabled={isLoading || amount < 10 || !transactionId}
							>
								Confirm
							</button>
						</div>
					</div>

					{/* for history */}
					<>
						<Dialog
							open={open2}
							handler={handleOpen2}
							className='px-0 overflow-auto text-white bg-black_2'
						>
							<div className='flex items-center justify-center py-3 '>
								<h4 className='text-2xl font-bold text-center text-blue-gray-200'>
									My Deposit Records
								</h4>
								<IoCloseCircleOutline
									className='absolute text-2xl cursor-pointer text-blue-gray-600 right-3 top-2 hover:text-red-500'
									onClick={handleOpen2}
								/>
							</div>
							<hr className='my-2 border border-black_3' />
							<DialogBody className='px-0 overflow-auto '>
								<DepositRecords records={deposits} />
							</DialogBody>
						</Dialog>
					</>
				</div>
			</div>
		</UserLayout>
	);
};

export default Deposit;
