import UserLayout from '@/components/layout/UserLayout';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useGetMembersByLevelQuery } from '@/features/auth/authApi';
import { formDate } from '@/utils/functions';
import { SyncLoader } from 'react-spinners';

import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
		mode: 'dark', // Set the mode to dark
		// You can further customize colors, typography, etc. here if needed
	},
});

const Friends = () => {
	const router = useRouter();
	const { level } = router.query;

	const { data, isLoading } = useGetMembersByLevelQuery(level as string);

	const { members } = data || [];
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
						{params.value ? (
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
			field: 'ref_by',
			headerName: 'Ref. By',
			width: 150,
		},
	];

	const rows: any[] = [];

	members &&
		members.map((user: any) => {
			return rows.push({
				id: user._id,
				username: user.username,
				name: user.name, // Corrected from user.full_name
				email: user.email,
				is_active: user.is_active,
				join_date: formDate(user.join_date), // Corrected from user.createdAt
				ref_by: user.ref_by, // Corrected from user.sponsor?.username
			});
		});

	return (
		<UserLayout>
			{isLoading ? (
				<div className='flex items-center justify-center '>
					<SyncLoader color='#EAB308' size={10} />
				</div>
			) : (
				<div className='px-2 mt-4 '>
					<ThemeProvider theme={darkTheme}>
						<Box sx={{ height: 400, width: '100%' }}>
							<DataGrid
								rows={rows}
								columns={columns}
								initialState={{
									pagination: {
										paginationModel: {
											pageSize: 5,
										},
									},
								}}
								pageSizeOptions={[5]}
								disableRowSelectionOnClick
							/>
						</Box>
					</ThemeProvider>
				</div>
			)}
		</UserLayout>
	);
};

export default Friends;
