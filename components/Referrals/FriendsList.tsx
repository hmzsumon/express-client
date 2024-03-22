import Link from 'next/link';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import {
	DataGrid,
	GridRowsProp,
	GridColDef,
	GridToolbar,
	GridFilterModel,
	GridToolbarContainer,
	GridToolbarQuickFilter,
} from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { formDateWithTime, formatDate } from '@/lib/functions';

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

const FriendsList = ({ users }: any) => {
	const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
		items: [],
		quickFilterValues: [''],
	});
	const [ignoreDiacritics, setIgnoreDiacritics] = React.useState(true);

	const columns: GridColDef<any>[] = [
		{
			field: 'slNo',
			headerName: 'SL No',
			width: 75,
		},
		{
			field: 'name',
			headerName: 'Name',
			width: 200,
		},

		{
			field: 'created_at',
			headerName: 'Created At',
			width: 150,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					{/* {params.row.active_date === null ? (
						<p>{params.row.created_at}</p>
					) : (
						<p>{params.row.active_date}</p>
					)} */}
					<p>{params.row.created_at}</p>
				</div>
			),
		},

		{
			field: 'email',
			headerName: 'Email',
			width: 300,
		},

		{
			field: 'is_active',
			headerName: 'Status',
			width: 100,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					{params.row.is_active ? (
						<p className='text-green-500'>Active</p>
					) : (
						<p className='text-red-500'>Inactive</p>
					)}
				</div>
			),
		},

		{
			field: 'is_activation_done',
			headerName: 'Activation',
			width: 100,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					{params.row.is_activation_done ? (
						<p className='text-green-500'>Done</p>
					) : (
						<p className='text-red-500'>Not Done</p>
					)}
				</div>
			),
		},
		{
			field: 'is_subscribe_done',
			headerName: 'Subscribe',
			width: 100,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					{params.row.is_subscribe_done ? (
						<p className='text-green-500'>Done</p>
					) : (
						<p className='text-red-500'>Not Done</p>
					)}
				</div>
			),
		},
	];

	const rows: any = [];

	users &&
		users.map((user: any, index: number) => {
			rows.push({
				id: index,
				slNo: index + 1,
				name: user.full_name,
				email: user.email,
				phone: user.phone,
				is_active: user.is_active,
				is_subscribe: user.is_subscribe,
				created_at: formatDate(user.created_at),
				is_activation_done: user.is_activation_done,
				is_subscribe_done: user.is_subscribe_done,
				active_date: formatDate(user.active_date),
			});
		});
	return (
		<div>
			<ThemeProvider theme={theme}>
				<DataGrid
					key={ignoreDiacritics.toString()}
					rows={rows}
					columns={columns}
					filterModel={filterModel}
					onFilterModelChange={setFilterModel}
					disableColumnSelector
					disableDensitySelector
					// hideFooter
					slots={{ toolbar: CustomToolbar }}
					slotProps={{ toolbar: { showQuickFilter: true } }}
					ignoreDiacritics={ignoreDiacritics}
				/>
			</ThemeProvider>
		</div>
	);
};

export default FriendsList;
