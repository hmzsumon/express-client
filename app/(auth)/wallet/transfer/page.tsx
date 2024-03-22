'use client';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { ClipLoader, PulseLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import TableBox from '@/components/Box/TableBox';
import Select from 'react-select';
import { useWalletTransferMutation } from '@/redux/features/transfer/transferApi';

import { useLoadUserQuery } from '@/redux/features/auth/authApi';

const customStyles = {
	control: (base: any, state: any) => ({
		...base,
		background: 'transparent',
		// match with the menu
		borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
		color: 'white',
		borderColor: 'gray',
		// Removes weird border around container
		boxShadow: state.isFocused ? null : null,
		'&:hover': {
			// Overwrittes the different states of border
			borderColor: 'blue',
		},
	}),
	menu: (base: any) => ({
		...base,
		// override border radius to match the box
		borderRadius: 0,
		// kill the gap
		marginTop: 0,
	}),
	menuList: (base: any) => ({
		...base,
		// kill the white space on first and last option
		padding: 0,
	}),

	singleValue: (base: any) => ({
		...base,
		color: 'white',
	}),
};

const options = [
	{ value: 'main', label: 'Main Balance' },
	{ value: 'earn', label: 'Earn Balance' },
];

const WalletTransfer = () => {
	useLoadUserQuery();
	const [walletTransfer, { isLoading, isError, isSuccess, error }] =
		useWalletTransferMutation();
	const { user } = useSelector((state: any) => state.auth);
	const [amount, setAmount] = useState<number>(0);
	const [transferAmount, setTransferAmount] = useState<number>(0);
	const [to_wallet, setToWallet] = useState<string>('');
	const [from_wallet, setFromWallet] = useState<string>('');

	const options2 = [
		{
			value: 'chocolate',
			label: `Withdraw : $${Number(user?.w_balance).toFixed(2)}`,
		},
	];

	const [selectedOption, setSelectedOption] = useState(null);

	// console.log('from_wallet', from_wallet);
	// console.log('to_wallet', to_wallet);

	// handle from wallet change
	const handleFromWalletChange: any = (value: any) => {
		setFromWallet(value);
	};

	// handle amount change
	const handleAmountChange = (e: any) => {
		const { value } = e.target;
		if (value < 0) {
			toast.error('Amount cannot be negative');
			return;
		}
		setAmount(value);
		setTransferAmount(value - value * 0.1);
	};

	// handle convert
	const handleConvert = () => {
		if (!amount || amount < 1) {
			toast.error('Please enter amount');
			return;
		}
		// check if user balance
		if (from_wallet === 'main') {
			if (amount > user?.m_balance) {
				toast.error('Insufficient balance');
				return;
			}
		} else if (from_wallet === 'earn') {
			if (amount > user?.e_balance) {
				toast.error('Insufficient balance');
				return;
			}
		}

		const data = {
			from_wallet,
			to_wallet: 'withdraw', // "withdraw" or "deposit
			amount,
			transferAmount,
		};

		// console.log('data', data);
		walletTransfer(data);
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
			<div className=' px-2  md:h-auto withdraw-wrapper'>
				<div className='relative py-6 mx-auto rounded-lg '>
					<div className='flex items-center justify-between mb-4'>
						<div className='ml-2 '>
							<h1 className='text-xl font-bold  text-white '>
								Wallet Transfer
							</h1>
						</div>
					</div>

					<div className='space-y-4 '>
						<div className='  '>
							<div className='py-2 space-y-2 text-blue-gray-300'>
								{/* Start From */}
								<div className='grid grid-cols-7'>
									<div className='col-span-2 '>
										<h2 className=' text-white'>From </h2>
									</div>

									<div className='col-span-5 '>
										<div className='w-full'>
											<Select
												defaultValue={selectedOption}
												onChange={(e) => handleFromWalletChange(e?.value)}
												options={options}
												className=' bg-transparent'
												styles={customStyles}
											/>
										</div>
									</div>
								</div>
								{/* Icon  */}
								<div className='grid grid-cols-7'>
									<div className='col-span-2'></div>
									<div className=' col-span-5 flex items-center justify-center '>
										<FaLongArrowAltDown className=' text-white' />
									</div>
								</div>
								{/* Start To */}
								<div className='grid grid-cols-7'>
									<div className='col-span-2 '>
										<h2 className=' text-white'>To </h2>
									</div>

									<div className='col-span-5 '>
										<div className='w-full'>
											<Select
												defaultValue={options2[0]}
												styles={customStyles}
												isDisabled={true}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Start amount */}
					<div className='my-6 '>
						<div className=''>
							<input
								type='text'
								color='blue'
								placeholder='Enter Amount'
								className=' bg-transparent rounded-md text-white w-full '
								value={amount}
								onChange={handleAmountChange}
							/>

							<small className='flex items-center justify-between px-1 mt-1 text-white'>
								{from_wallet === 'main' && (
									<span className=''>
										Main Balance
										{user?.m_balance >= 0 ? (
											<span className='mx-1 text-blue-gray-300'>
												{Number(user?.m_balance).toFixed(2)}
											</span>
										) : (
											<PulseLoader size={10} color={'#fff'} />
										)}
										USDT
									</span>
								)}
								{from_wallet === 'earn' && (
									<span className=''>
										Earned Balance
										{user?.m_balance >= 0 ? (
											<span className='mx-1 text-blue-gray-300'>
												{Number(user?.e_balance).toFixed(2)}
											</span>
										) : (
											<PulseLoader size={10} color={'#fff'} />
										)}
										USDT
									</span>
								)}
							</small>
						</div>
					</div>
					<hr className='my-2 border border-blue-gray-900 ' />
					<div className='grid grid-cols-2 gap-4 '>
						<div className='space-y-1 '>
							<p className='text-xs text-white'>Convert Amount</p>
							<p className='font-bold text-white'>
								<span>{Number(transferAmount).toFixed(2)}</span> USDT
							</p>
							<p className='text-xs text-white'>
								Transfer fee:{' '}
								<span className='italic font-bold text-blue-gray-300'>10%</span>{' '}
							</p>
						</div>

						<div className='flex items-center justify-center '>
							<button
								className='w-full py-2 font-bold bg-btn rounded-sm text-white disabled:opacity-50 disabled:cursor-not-allowed '
								disabled={!amount || amount < 1 || isLoading}
								onClick={handleConvert}
							>
								{isLoading ? (
									<ClipLoader size={20} color={'#fff'} />
								) : (
									<span>Transfer</span>
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</TableBox>
	);
};

export default WalletTransfer;
