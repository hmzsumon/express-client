import { useSelector } from 'react-redux';

import UserLayout from '@/components/layout/UserLayout';
import { useGet13LevelTreeQuery } from '@/features/auth/authApi';
import React from 'react';
import { SyncLoader } from 'react-spinners';
import { FiUserPlus } from 'react-icons/fi';

import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { formDate } from '@/utils/functions';
import { BsFillSendFill } from 'react-icons/bs';

const darkTheme = createTheme({
	palette: {
		mode: 'dark', // Set the mode to dark
		// You can further customize colors, typography, etc. here if needed
	},
});

const GlobalUsers = () => {
	const { user } = useSelector((state: any) => state.auth);

	const { data, isLoading } = useGet13LevelTreeQuery(undefined);
	const { users } = data || [];
	const { length } = data || { length: 0 };

	const columns: GridColDef[] = [
		{
			field: 'join_date',
			headerName: 'Join Date',
			width: 150,
		},
		{
			field: 'username',
			headerName: 'Username',
			width: 150,
		},
		{
			field: 'name',
			headerName: 'Name',
			width: 150,
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 200,
		},
		{
			field: 'is_active',
			headerName: 'Status',
			width: 150,
			renderCell: (params) => {
				return (
					<div className='flex items-center justify-center'>
						{params.row.is_active ? (
							<span className='px-2 py-1 text-xs text-green-500 bg-green-100 rounded-full'>
								Active
							</span>
						) : (
							<span className='px-2 py-1 text-xs text-red-500 bg-red-100 rounded-full'>
								Inactive
							</span>
						)}
					</div>
				);
			},
		},
		{
			field: 'country',
			headerName: 'Country',
			width: 150,
		},
	];

	const rows: any[] = [];

	users &&
		users.map((user: any) => {
			return rows.push({
				id: user._id,
				username: user.username,
				name: user.full_name, // Corrected from user.full_name
				email: user.email,
				country: user.country,
				is_active: user.is_active,
				join_date: formDate(user.createdAt), // Corrected from user.createdAt
				ref_by: user.ref_by, // Corrected from user.sponsor?.username
			});
		});

	return (
		<UserLayout>
			<div className='px-4 py-4'>
				{isLoading ? (
					<div className='flex items-center justify-center '>
						<SyncLoader color='#EAB308' size={10} />
					</div>
				) : (
					<>
						<div className='flex items-center gap-2 pl-3 mt-4 '>
							<FiUserPlus className='inline-block mr-2 text-2xl text-gray-400 cursor-pointer md:text-2xl ' />
							<h1 className='text-xl font-bold md:text-2xl '>
								Users <span>{length}</span>
							</h1>
						</div>

						<div className='px-1 mt-4 '>
							<ThemeProvider theme={darkTheme}>
								<Box sx={{ height: 650, width: '100%' }}>
									<DataGrid
										rows={rows}
										columns={columns}
										initialState={{
											pagination: {
												paginationModel: {
													pageSize: 10,
												},
											},
										}}
										pageSizeOptions={[10]}
										disableRowSelectionOnClick
									/>
								</Box>
							</ThemeProvider>
						</div>
					</>
				)}
			</div>
		</UserLayout>
	);
};

export default GlobalUsers;
