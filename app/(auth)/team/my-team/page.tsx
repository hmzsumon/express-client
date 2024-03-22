'use client';
import TableBox from '@/components/Box/TableBox';
import React from 'react';
import {
	DataGrid,
	GridRowsProp,
	GridColDef,
	GridToolbar,
	GridFilterModel,
	GridToolbarContainer,
	GridToolbarQuickFilter,
} from '@mui/x-data-grid';
import { useGetUsersQuery } from '@/redux/features/admin/adminUsersApi';
import { formDateWithTime, formatDate } from '@/lib/functions';
import Link from 'next/link';
import { AiFillEye } from 'react-icons/ai';
import { SyncLoader } from 'react-spinners';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useGetMyTeamQuery } from '@/redux/features/auth/authApi';
import { TbUsersGroup } from 'react-icons/tb';

const theme = createTheme({
	palette: {
		mode: 'dark', // Default to 'light' mode
		// You can customize other palette settings here
	},
});

const CustomToolbar = () => {
	return (
		<GridToolbarContainer
			sx={{
				display: 'flex',
				justifyContent: 'end', // This spaces out the children elements
				alignItems: 'center',
				padding: '10px 24px', // Example padding, adjust as needed
				// Add any other styles you want for the toolbar here
			}}
		>
			<GridToolbarQuickFilter className='mr-6 border ' />
			{/* Add any other buttons or functionality you need here, excluding export */}
		</GridToolbarContainer>
	);
};

const MyTeam = () => {
	const { user } = useSelector((state: any) => state.auth);
	const { data, isLoading, isSuccess, isError, error } = useGetMyTeamQuery(
		user?._id
	);

	const { teamLevels } = data || [];
	// console.log('team', teamLevels);

	const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
		items: [],
		quickFilterValues: [''],
	});
	const [ignoreDiacritics, setIgnoreDiacritics] = React.useState(true);

	const columns: GridColDef<any>[] = [
		{
			field: 'level',
			headerName: 'Level',
			width: 150,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>{params.row.level}</p>
				</div>
			),
		},

		{
			field: 'users',
			headerName: 'Users',
			width: 150,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>{params.row.users}</p>
					<TbUsersGroup />
				</div>
			),
		},

		{
			field: 'activeUsers',
			headerName: 'Active Users',
			width: 150,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>{params.row.activeUsers}</p>
					<TbUsersGroup />
				</div>
			),
		},

		{
			field: 'j_earn',
			headerName: 'J. Earning',
			width: 130,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>
						{Number(params.row.j_earn || 0).toLocaleString('en-US', {
							maximumFractionDigits: 6,
							minimumFractionDigits: 2,
						})}{' '}
						USDT
					</p>
				</div>
			),
		},

		{
			field: 's_earn',
			headerName: 'S. Earning',
			width: 130,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>
						{Number(params.row.s_earn || 0).toLocaleString('en-US', {
							maximumFractionDigits: 6,
							minimumFractionDigits: 2,
						})}{' '}
						USDT
					</p>
				</div>
			),
		},
		{
			field: 'pull_earn',
			headerName: 'P. Earning',
			width: 130,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>
						{Number(params.row.pull_earn || 0).toLocaleString('en-US', {
							maximumFractionDigits: 6,
							minimumFractionDigits: 2,
						})}{' '}
						USDT
					</p>
				</div>
			),
		},
		{
			field: 'totalEarning',
			headerName: 'Total Earning',
			width: 130,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>
						{Number(params.row.totalEarning || 0).toLocaleString('en-US', {
							maximumFractionDigits: 6,
							minimumFractionDigits: 2,
						})}{' '}
						USDT
					</p>
				</div>
			),
		},
	];

	const rows: any = [];

	teamLevels &&
		teamLevels.map((record: any) => {
			return rows.push({
				id: record.id,
				level: record.level,
				users: record.usersLength,
				activeUsers: record.activeMembers,
				j_earn: record.j_earning,
				s_earn: record.s_earning,
				p_earn: record.p_earning,
				totalEarning: record.j_earning + record.s_earning + record.p_earning,
			});
		});
	return (
		<div>
			{isLoading ? (
				<div className='flex items-center justify-center '>
					<SyncLoader color='#EAB308' size={10} />
				</div>
			) : (
				<ThemeProvider theme={theme}>
					<DataGrid
						key={ignoreDiacritics.toString()}
						rows={rows}
						columns={columns}
						filterModel={filterModel}
						onFilterModelChange={setFilterModel}
						disableColumnSelector
						disableDensitySelector
						hideFooter
						slots={{ toolbar: CustomToolbar }}
						slotProps={{ toolbar: { showQuickFilter: true } }}
						ignoreDiacritics={ignoreDiacritics}
					/>
				</ThemeProvider>
			)}
		</div>
	);
};

export default MyTeam;
