import { apiSlice } from '../api/apiSlice';

export const packageApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// get my packages
		getMyPackages: builder.query<any, any>({
			query: () => '/my-package',
			providesTags: ['Package'],
		}),
	}),
});

export const { useGetMyPackagesQuery } = packageApi;
