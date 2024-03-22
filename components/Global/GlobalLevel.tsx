'use client';

import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const headers = [
	{
		id: 1,
		name: 'Level',
		class: 'text-left',
	},

	{
		id: 2,
		name: 'Default Users',
		class: 'text-center',
	},

	{
		id: 3,
		name: 'Users',
		class: 'text-right',
	},
];

const GlobalLevel = ({ length }: any) => {
	const records = [
		{
			id: 1,
			level: 'Level-01',
			default_user: 2,
			current_user: length > 2 ? 2 : length < 2 ? 0 : length - 2,
			is_complete: length > 2 ? true : false,
		},
		{
			id: 2,
			level: 'Level-02',
			default_user: 4,
			current_user: length > 4 ? 4 : length < 2 ? 0 : length - 2,
			is_complete: length > 4 ? true : false,
		},
		{
			id: 3,
			level: 'Level-03',
			default_user: 8,
			current_user: length > 8 ? 8 : length < 4 ? 0 : length - 4,
			is_complete: length > 8 ? true : false,
		},
		{
			id: 4,
			level: 'Level-04',
			default_user: 16,
			current_user: length > 16 ? 16 : length < 8 ? 0 : length - 8,
			is_complete: length > 16 ? true : false,
		},
		{
			id: 5,
			level: 'Level-05',
			default_user: 32,
			current_user: length > 32 ? 32 : length < 16 ? 0 : length - 16,
			is_complete: length > 32 ? true : false,
		},
		{
			id: 6,
			level: 'Level-06',
			default_user: 64,
			current_user: length > 64 ? 64 : length < 32 ? 0 : length - 32,
			is_complete: length > 64 ? true : false,
		},
		{
			id: 7,
			level: 'Level-07',
			default_user: 128,
			current_user: length > 128 ? 128 : length < 64 ? 0 : length - 64,
			is_complete: length > 128 ? true : false,
		},
		{
			id: 8,
			level: 'Level-08',
			default_user: 256,
			current_user: length > 256 ? 256 : length < 128 ? 0 : length - 128,
			is_complete: length > 256 ? true : false,
		},
		{
			id: 9,
			level: 'Level-09',
			default_user: 512,
			current_user: length > 512 ? 512 : length < 256 ? 0 : length - 256,
			is_complete: length > 512 ? true : false,
		},
		{
			id: 10,
			level: 'Level-10',
			default_user: 1024,
			current_user: length > 1024 ? 1024 : length < 512 ? 0 : length - 512,
			is_complete: length > 1024 ? true : false,
		},
		{
			id: 11,
			level: 'Level-11',
			default_user: 2048,
			current_user: length > 2048 ? 2048 : length < 1024 ? 0 : length - 1024,
			is_complete: length > 2048 ? true : false,
		},
		{
			id: 12,
			level: 'Level-12',
			default_user: 4096,
			current_user: length > 4096 ? 4096 : length < 2048 ? 0 : length - 2048,
			is_complete: length > 4096 ? true : false,
		},
		{
			id: 13,
			level: 'Level-13',
			default_user: 8192,
			current_user: length > 8192 ? 8192 : length < 4096 ? 0 : length - 4096,
			is_complete: length > 8192 ? true : false,
		},
	];
	return (
		<div>
			<div className='mx-auto'>
				<div className='w-full h-full bg-black_2'>
					<div className='rounded '>
						<div className='w-full '>
							<div className='bg-[#071832] rounded-t-md'>
								<div className='grid grid-cols-3 list-none '>
									{headers.map((head) => {
										return (
											<li key={head.id} className={`py-4  px-4 `}>
												<h2
													className={`
                      ${head.class} text-lg font-semibold leading-none text-white opacity-70`}
												>
													{head.name}
												</h2>
											</li>
										);
									})}
								</div>
							</div>

							<div>
								{records?.map((record: any, index: number) => {
									const { level, id, default_user, current_user } = record;
									const oddEven =
										index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900';

									return (
										<div
											key={id}
											className={`
                    ${oddEven} grid grid-cols-3  list-none justify-between items-center px-4 py-2  transition-colors text-blue-gray-200 cursor-pointer 
                    `}
										>
											<li className=''>
												<p className='font-normal text-left'>{level}</p>
											</li>

											<li className='text-center '>
												<div className='flex-col md:flex'>
													<p>{default_user}</p>
												</div>
											</li>

											<li className='flex items-center justify-end mr-5'>
												<div className='flex-col md:flex'>
													{record.is_complete ? (
														<p className=' text-green-500'>Complete</p>
													) : (
														<p className=' text-orange-500'>Pending</p>
													)}
												</div>
											</li>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GlobalLevel;
