import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { m } from 'framer-motion';
const headers = [
	{
		id: 1,
		name: 'Level',
		class: 'text-left',
	},

	{
		id: 2,
		name: 'Friends',
		class: 'text-center',
	},

	{
		id: 3,
		name: 'Earnings',
		class: 'text-center',
	},

	{
		id: 4,
		name: 'Details',
		class: 'text-right',
	},
];

const FriendsList = ({ team }: any) => {
	const records = [
		{
			id: 1,
			level: 'Level-01',
			value: 'level_1',
			amount: team?.level_1?.users?.length || 0,
			j_earn: team?.level_1?.j_earnings || 0,
			s_earn: team?.level_1?.s_earnings || 0,
		},
		{
			id: 2,
			level: 'Level-02',
			value: 'level_2',
			amount: team?.level_2?.users?.length || 0,
			j_earn: team?.level_2?.j_earnings || 0,
			s_earn: team?.level_2?.s_earnings || 0,
		},
		{
			id: 3,
			level: 'Level-03',
			value: 'level_3',
			amount: team?.level_3?.users?.length || 0,
			j_earn: team?.level_3?.j_earnings || 0,
			s_earn: team?.level_3?.s_earnings || 0,
		},
		{
			id: 4,
			level: 'Level-04',
			value: 'level_4',
			amount: team?.level_4?.users?.length || 0,
			j_earn: team?.level_4?.j_earnings || 0,
			s_earn: team?.level_4?.s_earnings || 0,
		},
		{
			id: 5,
			level: 'Level-05',
			value: 'level_5',
			amount: team?.level_5?.users?.length || 0,
			j_earn: team?.level_5?.j_earnings || 0,
			s_earn: team?.level_5?.s_earnings || 0,
		},
		{
			id: 6,
			level: 'Level-06',
			value: 'level_6',
			amount: team?.level_6?.users?.length || 0,
			j_earn: team?.level_6?.j_earnings || 0,
			s_earn: team?.level_6?.s_earnings || 0,
		},
		{
			id: 7,
			level: 'Level-07',
			value: 'level_7',
			amount: team?.level_7?.users?.length || 0,
			j_earn: team?.level_7?.j_earnings || 0,
			s_earn: team?.level_7?.s_earnings || 0,
		},
		{
			id: 8,
			level: 'Level-08',
			value: 'level_8',
			amount: team?.level_8?.users?.length || 0,
			j_earn: team?.level_8?.j_earnings || 0,
			s_earn: team?.level_8?.s_earnings || 0,
		},
		{
			id: 9,
			level: 'Level-09',
			value: 'level_9',
			amount: team?.level_9?.users?.length || 0,
			j_earn: team?.level_9?.j_earnings || 0,
			s_earn: team?.level_9?.s_earnings || 0,
		},
		{
			id: 10,
			level: 'Level-10',
			value: 'level_10',
			amount: team?.level_10?.users?.length || 0,
			j_earn: team?.level_10?.j_earnings || 0,
			s_earn: team?.level_10?.s_earnings || 0,
		},
		{
			id: 11,
			level: 'Level-11',
			value: 'level_11',
			amount: team?.level_11?.users?.length || 0,
			j_earn: team?.level_11?.j_earnings || 0,
			s_earn: team?.level_11?.s_earnings || 0,
		},
		{
			id: 12,
			level: 'Level-12',
			value: 'level_12',
			amount: team?.level_12?.users?.length || 0,
			j_earn: team?.level_12?.j_earnings || 0,
			s_earn: team?.level_12?.s_earnings || 0,
		},
	];
	return (
		<div>
			<div className='mx-auto'>
				<h2 className='my-2 text-lg font-semibold text-center text-white'>
					Total Team Earnings:{' '}
					<span className='text-blue-500'>
						{Number(team?.total_team_earings).toLocaleString('en-US', {
							maximumFractionDigits: 6,
							minimumFractionDigits: 2,
						})}{' '}
						USDT
					</span>
				</h2>
				<div className='w-full h-full bg-black_2'>
					<div className='rounded '>
						<div className='w-full '>
							<div className='bg-[#071832] rounded-t-md'>
								<div className='grid grid-cols-4 list-none '>
									{headers.map((head) => {
										return (
											<li key={head.id} className={`py-4  px-4 `}>
												<Typography
													variant='small'
													color='blue-gray'
													className={`
                      ${head.class} font-semibold leading-none text-white opacity-70`}
												>
													{head.name}
												</Typography>
											</li>
										);
									})}
								</div>
							</div>

							<div>
								{records?.map(
									(
										record: {
											amount: number;
											level: string;
											j_earn: number;
											s_earn: number;
											id: number;
											value: string;
										},
										index: number
									) => {
										const { amount, level, id, j_earn, s_earn, value } = record;
										const oddEven =
											index % 2 === 0 ? 'bg-blue-gray-800' : 'bg-blue-gray-900';

										return (
											<div
												key={id}
												className={`
                    ${oddEven} grid grid-cols-4  list-none justify-between items-center px-4 py-2  transition-colors text-blue-gray-200 cursor-pointer 
                    `}
											>
												<li className=''>
													<p className='font-normal text-left'>{level}</p>
												</li>

												<li className='text-center '>
													<div className='flex-col md:flex'>
														<p>{amount}</p>
													</div>
												</li>

												<li className='flex items-center justify-center text-xs'>
													<div className='flex-col md:flex'>
														<li className='flex gap-1'>
															<p className='font-normal'>J</p>
															<p>
																{Number(j_earn).toLocaleString('en-US', {
																	maximumFractionDigits: 6,
																	minimumFractionDigits: 2,
																})}{' '}
																USDT
															</p>
														</li>
														<li className='flex gap-1'>
															<p className='font-normal'>S</p>
															<p>
																{Number(s_earn).toLocaleString('en-US', {
																	maximumFractionDigits: 6,
																	minimumFractionDigits: 2,
																})}{' '}
																USDT
															</p>
														</li>
													</div>
												</li>

												<li className='text-right '>
													<Link
														href={`/friends/${value}`}
														className='flex items-center justify-end gap-2'
													>
														Details
														<span className='text-blue-500 hover:text-blue-700'>
															<FiExternalLink />
														</span>
													</Link>
												</li>
											</div>
										);
									}
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FriendsList;
