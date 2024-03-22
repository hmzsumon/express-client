'use client';
import Link from 'next/link';
import React from 'react';
import { FaHandHoldingUsd, FaCoins, FaWallet } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';
import { RiGlobalFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { FcMoneyTransfer } from 'react-icons/fc';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { BsFillSendFill } from 'react-icons/bs';

const Overview = () => {
	const { user } = useSelector((state: any) => state.auth);
	return (
		<>
			<div>
				<div className='px-4 py-4'>
					<div className='grid gap-4 md:grid-cols-3'>
						<div className='flex items-start space-x-4 p-4  border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
							<FaWallet className='text-3xl text-[#2e72d2]' />
							<div className='space-y-2 '>
								<h1 className='text-xl font-bold '>Your Balance</h1>
								<p>
									{Number(user?.m_balance).toLocaleString('en-US', {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}{' '}
									USDT
								</p>
							</div>
						</div>

						{/*Start  earn balance */}
						<div className='flex items-start space-x-4 p-4  border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
							<FaWallet className='text-3xl text-[#2e72d2]' />
							<div className='space-y-2 '>
								<h1 className='text-xl font-bold '>Your Earn Balance</h1>
								<p>
									{Number(user?.e_balance).toLocaleString('en-US', {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}{' '}
									USDT
								</p>
							</div>
						</div>
						{/*End  earn balance */}

						{/*Start  withdraw balance */}
						<div className='flex items-start space-x-4 p-4  border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
							<FaWallet className='text-3xl text-[#2e72d2]' />
							<div className='space-y-2 '>
								<h1 className='text-xl font-bold '>Withdraw Balance</h1>
								<p>
									{Number(user?.w_balance).toLocaleString('en-US', {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}{' '}
									USDT
								</p>
							</div>
						</div>
						{/*End  withdraw balance */}

						{/* ELC*/}
						<div className='flex items-start space-x-4 p-4 border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
							<FaCoins className='text-3xl text-[#2e72d2]' />
							<div className='space-y-2 '>
								<h1 className='text-xl font-bold '>
									Total ELC <sup className='text-xs text-blue-800'>(CT)</sup>
								</h1>
								<p>
									{Number(
										user?.elc_coin ? user?.total_earing : 0
									).toLocaleString('en-US', {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}{' '}
									USDT
								</p>
							</div>
						</div>

						{/* Earing */}
						<div className='flex items-start space-x-4 p-4 border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
							<FaHandHoldingUsd className='text-4xl text-[#2e72d2]' />
							<div className='space-y-2 '>
								<h1 className='text-xl font-bold '>Total Earning</h1>
								<p>
									{Number(
										user?.total_earing ? user?.total_earing : 0
									).toLocaleString('en-US', {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}{' '}
									USDT
								</p>
							</div>
						</div>
						{/* Total Deposit */}
						<div className='flex items-start space-x-4 p-4 border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
							<GiPayMoney className='text-4xl text-[#2e72d2]' />
							<div className='space-y-2 '>
								<h1 className='text-xl font-bold '>Total Deposit</h1>
								<p>
									{Number(user?.total_deposit).toLocaleString('en-US', {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}{' '}
									USDT
								</p>
							</div>
						</div>

						{/* Total Withdraw */}
						<div className='flex items-start space-x-4 p-4 border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
							<GiReceiveMoney className='text-4xl text-[#2e72d2]' />
							<div className='space-y-2 '>
								<h1 className='text-xl font-bold '>Total Withdraw</h1>
								<p>
									{Number(user?.total_withdraw).toLocaleString('en-US', {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}{' '}
									USDT
								</p>
							</div>
						</div>

						{/* Total Send Money */}
						<div className='flex items-start space-x-4 p-4 border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
							<BsFillSendFill className='text-3xl text-[#2e72d2]' />
							<div className='space-y-2 '>
								<h1 className='text-xl font-bold '>Total Send Money</h1>
								<p>
									{Number(user?.total_send_amount).toLocaleString('en-US', {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}{' '}
									USDT
								</p>
							</div>
						</div>

						{/* Total Receive Money */}
						<div className='flex items-start space-x-4 p-4 border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
							<GiReceiveMoney className='text-4xl text-[#2e72d2]' />
							<div className='space-y-2 '>
								<h1 className='text-xl font-bold '>Total Receive Money</h1>
								<p>
									{Number(user?.total_receive_amount).toLocaleString('en-US', {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}{' '}
									USDT
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Overview;
