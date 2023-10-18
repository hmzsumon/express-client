import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import Global from '../../pages/global/index';

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
		},
		{
			id: 2,
			level: 'Level-02',
			default_user: 4,
			current_user: length > 4 ? 4 : length < 2 ? 0 : length - 2,
		},
		{
			id: 3,
			level: 'Level-03',
			default_user: 8,
			current_user: length > 8 ? 8 : length < 4 ? 0 : length - 4,
		},
		{
			id: 4,
			level: 'Level-04',
			default_user: 16,
			current_user: length > 16 ? 16 : length < 8 ? 0 : length - 8,
		},
		{
			id: 5,
			level: 'Level-05',
			default_user: 32,
			current_user: length > 32 ? 32 : length < 16 ? 0 : length - 16,
		},
		{
			id: 6,
			level: 'Level-06',
			default_user: 64,
			current_user: length > 64 ? 64 : length < 32 ? 0 : length - 32,
		},
		{
			id: 7,
			level: 'Level-07',
			default_user: 128,
			current_user: length > 128 ? 128 : length < 64 ? 0 : length - 64,
		},
		{
			id: 8,
			level: 'Level-08',
			default_user: 256,
			current_user: length > 256 ? 256 : length < 128 ? 0 : length - 128,
		},
		{
			id: 9,
			level: 'Level-09',
			default_user: 512,
			current_user: length > 512 ? 512 : length < 256 ? 0 : length - 256,
		},
		{
			id: 10,
			level: 'Level-10',
			default_user: 1024,
			current_user: length > 1024 ? 1024 : length < 512 ? 0 : length - 512,
		},
		{
			id: 11,
			level: 'Level-11',
			default_user: 2048,
			current_user: length > 2048 ? 2048 : length < 1024 ? 0 : length - 1024,
		},
		{
			id: 12,
			level: 'Level-12',
			default_user: 4096,
			current_user: length > 4096 ? 4096 : length < 2048 ? 0 : length - 2048,
		},
		{
			id: 13,
			level: 'Level-13',
			default_user: 8192,
			current_user: length > 8192 ? 8192 : length < 4096 ? 0 : length - 4096,
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
										index % 2 === 0 ? 'bg-blue-gray-800' : 'bg-blue-gray-900';

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
													<p>{current_user}</p>
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
