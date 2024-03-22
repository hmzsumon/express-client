'use client';
import { useGetMyNotificationsQuery } from '@/redux/features/notify/notificationApi';
import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { formDateWithTime, formatDate } from '@/lib/functions';

const theme = createTheme({
	palette: {
		mode: 'dark', // Default to 'light' mode
		// You can customize other palette settings here
	},
});

const Notifications = () => {
	const {
		data,
		refetch,
		isLoading,
		isError,
		error,
		isSuccess: n_isSuccess,
	} = useGetMyNotificationsQuery(undefined);
	const { notifications } = data || [];
	console.log('notifications', notifications);

	const columns: GridColDef<any>[] = [
		{
			field: 'date',
			headerName: 'Date',
			width: 200,
			renderCell: (params: any) => {
				return formDateWithTime(params.value);
			},
		},
		{ field: 'title', headerName: 'Title', width: 200 },
		{ field: 'description', headerName: 'Description', width: 300 },

		{
			field: 'status',
			headerName: 'Status',
			width: 200,
			renderCell: (params: any) => {
				return params.value ? 'Read' : 'Unread';
			},
		},
	];

	const rows: any = [];

	notifications &&
		notifications.map((notifications: any) => {
			return rows.push({
				id: notifications._id,
				title: notifications.subject,
				description: notifications.description,
				date: notifications.createdAt,
				status: notifications.is_read,
			});
		});

	return (
		<div>
			<h2>Notifications</h2>
			<ThemeProvider theme={theme}>
				<div style={{ height: 400, width: '100%' }}>
					<DataGrid rows={rows} columns={columns} />
				</div>
			</ThemeProvider>
		</div>
	);
};

export default Notifications;
