import React from 'react';
import Image from 'next/image';
import bep20 from '@public/method-logo/bep20-logo.png';
import erc20 from '@public/method-logo/erc20-logo.png';
import trc20 from '@public/method-logo/trc20-logo.png';
import polygon from '@public/method-logo/polygon-logo.png';
import solana from '@public/method-logo/solana-logo.png';
import { selectMethod } from '@redux/depositMethodSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useGetActiveDepositMethodQuery } from '@/redux/features/deposit/depositApi';

const depositMethods = [
	{
		id: 'trc20',
		name: 'TRC20',
		logo: trc20,
	},

	{
		id: 'solana',
		name: 'Solana',
		logo: solana,
	},

	{
		id: 'erc20',
		name: 'ERC20',
		logo: erc20,
	},

	{
		id: 'polygon',
		name: 'Polygon',
		logo: polygon,
	},

	{
		id: 'bep20',
		name: 'BEP20',
		logo: bep20,
	},
];

const DepositMethod = () => {
	// get active deposit method
	const {
		data: methodData,
		isLoading: m_isLoading,
		refetch: m_refetch,
	} = useGetActiveDepositMethodQuery(undefined);
	const { method } = methodData || {};
	console.log('method', method);
	const { methodId } = useSelector((state: any) => state.depositMethod);
	// Redux
	const dispatch = useDispatch();

	// Select Method
	const handleSelectMethod = (id: string) => {
		let wallet =
			method.wallets &&
			method.wallets.find((wallet: any) => wallet.wallet_id === id);
		// console.log('wallet', wallet);
		wallet = { ...wallet, owner_name: method.username };
		dispatch(selectMethod(wallet));
	};

	return (
		<div>
			<h1 className='text-2xl font-bold text-center text-white'>
				{' '}
				Select Deposit Method
			</h1>
			<div className='grid  gap-4 mt-4'>
				{depositMethods.map((method) => (
					<button
						key={method.id}
						type='button'
						className={`flex  items-center justify-between px-4 py-1 ${
							methodId === method.id ? 'bg-blue-500' : 'bg-gray-800'
						} rounded-md w-full`}
						onClick={() => handleSelectMethod(method.id)}
					>
						<h2 className='text-lg font-bold text-white uppercase '>
							{method.name}{' '}
						</h2>
						<Image src={method.logo} alt='bep20' width={50} height={50} />
					</button>
				))}
			</div>
		</div>
	);
};

export default DepositMethod;
