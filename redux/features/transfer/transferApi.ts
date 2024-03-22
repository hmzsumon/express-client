import { apiSlice } from '../api/apiSlice';

export const transferApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// send money
		sendMoney: builder.mutation<any, any>({
			query: (body) => ({
				url: '/send-money',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['User'],
		}),

		// wallet transfer
		walletTransfer: builder.mutation<any, any>({
			query: (body) => ({
				url: '/wallet-transfer',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['User'],
		}),

		// earn to main balance transfer
		earnToMain: builder.mutation<any, any>({
			query: (body) => ({
				url: '/earn-to-main-wallet-transfer',
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['User'],
		}),
	}),
});

export const {
	useSendMoneyMutation,
	useWalletTransferMutation,
	useEarnToMainMutation,
} = transferApi;
