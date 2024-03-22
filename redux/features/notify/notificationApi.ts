import { apiSlice } from '../api/apiSlice';

export const notificationApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getNotifications: builder.query({
			query: () => '/user-notifications',
			providesTags: ['Notification'],
		}),

		// updateNotification
		updateNotification: builder.mutation({
			query: () => ({
				url: `/update/notifications`,
				method: 'PUT',
			}),
			invalidatesTags: ['Notification'],
		}),

		// logged in user notifications
		getMyNotifications: builder.query({
			query: () => '/my-notifications',
			providesTags: ['Notification'],
		}),
	}),
});

export const {
	useGetNotificationsQuery,
	useUpdateNotificationMutation,
	useGetMyNotificationsQuery,
} = notificationApi;
