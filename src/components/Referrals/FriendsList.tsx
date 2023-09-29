import { Typography } from '@material-tailwind/react';
import React from 'react';
const headers = [
	{
		id: 1,
		name: 'Level',
		class: 'text-left',
	},

	{
		id: 4,
		name: 'Friends',
		class: 'text-center',
	},
	{
		id: 5,
		name: 'Amount',
		class: 'text-center',
	},
	{
		id: 6,
		name: 'Details',
		class: 'text-right',
	},
];

const records = [
	{
		id: 1,
		level: 'Level-01',
		amount: 1000,
		url: 'https://www.google.com',
	},
];

const FriendsList = () => {
	return (
		<div>
			<div className=' px-4'>
				<div className='mx-auto'>
					<div className='w-full h-full bg-black_2'>
						<div className='my-4 rounded '>
							<div className='w-full '>
								<div className='bg-[#071832] rounded-t-md'>
									<div className='grid grid-cols-4 list-none '>
										{headers.map((head, index) => {
											return (
												<li key={head.id} className={`py-4  px-2 `}>
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
											tnx: {
												amount: number;
												createdAt: Date;
												transactionType: string;
												_id: string;
											},
											index: number
										) => {
											const { amount, createdAt, transactionType, _id } = tnx;
											const oddEven =
												index % 2 === 0
													? 'bg-blue-gray-800'
													: 'bg-blue-gray-900';

											return (
												<>
													<div
														key={_id}
														className={`
                    ${oddEven} grid grid-cols-4  list-none justify-between items-center px-2 py-2 text-[0.6rem] transition-colors text-blue-gray-200 cursor-pointer 
                    `}
													>
														<li className=''>
															<p className='text-[0.6rem] font-normal text-left'>
																Level-01
															</p>
														</li>

														<li className=''>
															<div className='flex-col md:flex'>
																<p>1000</p>
															</div>
														</li>
														<li className=''>link</li>
													</div>
												</>
											);
										}
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FriendsList;
