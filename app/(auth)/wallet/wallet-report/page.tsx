'use client';
import { useGetAllTransactionsQuery } from '@/redux/features/auth/authApi';
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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TbUsersGroup } from 'react-icons/tb';
import { SyncLoader } from 'react-spinners';
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

const WalletReport = () => {
	const { data, isLoading } = useGetAllTransactionsQuery(undefined);
	const { transactions: records } = data || [];
	// console.log(records);

	const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
		items: [],
		quickFilterValues: [''],
	});
	const [ignoreDiacritics, setIgnoreDiacritics] = React.useState(true);

	const columns: GridColDef<any>[] = [
		{
			field: 'slNo',
			headerName: 'SL No',
			width: 100,
		},
		{
			field: 'date',
			headerName: 'Date',
			width: 150,
		},

		{
			field: 'description',
			headerName: 'Description',
			width: 350,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs uppercase'>
					<p>{params.row.description}</p>
				</div>
			),
		},

		{
			field: 'credit',
			headerName: 'Credit',
			width: 150,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					{params.row.type === 'cashIn' ? (
						<p>
							{Number(params.row.amount).toLocaleString('en-US', {
								maximumFractionDigits: 6,
								minimumFractionDigits: 2,
							})}{' '}
							USDT
						</p>
					) : (
						<p>
							{Number(0).toLocaleString('en-US', {
								maximumFractionDigits: 2,
								minimumFractionDigits: 2,
							})}{' '}
							USDT
						</p>
					)}
				</div>
			),
		},

		{
			field: 'debit',
			headerName: 'Debit',
			width: 150,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					{params.row.type === 'cashOut' ? (
						<p>
							{Number(params.row.amount).toLocaleString('en-US', {
								maximumFractionDigits: 6,
								minimumFractionDigits: 2,
							})}{' '}
							USDT
						</p>
					) : (
						<p>
							{Number(0).toLocaleString('en-US', {
								maximumFractionDigits: 2,
								minimumFractionDigits: 2,
							})}{' '}
							USDT
						</p>
					)}
				</div>
			),
		},
	];

	const rows: any = [];

	records &&
		records.map((record: any, index: number) => {
			rows.push({
				id: record._id,
				slNo: index + 1,
				date: formatDate(record.createdAt),
				description: record.description,
				type: record.transactionType,
				amount: record.amount,
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
						// hideFooter
						slots={{ toolbar: CustomToolbar }}
						slotProps={{ toolbar: { showQuickFilter: true } }}
						ignoreDiacritics={ignoreDiacritics}
					/>
				</ThemeProvider>
			)}
		</div>
	);
};

export default WalletReport;
