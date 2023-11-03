import UserInfo from '@/components/Dashboard.tsx/UserInfo';
import Mining from '@/components/Mining/Mining';
import UserLayout from '@/components/layout/UserLayout';
import {
	useGetUserDemoCountQuery,
	useLoadUserQuery,
} from '@/features/auth/authApi';
import { getCookie } from '@/utils/cookie';
import { HomeIcon } from '@/utils/icons/CommonIcons';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TawkTo3 from '../global/TawkTo3';
import { useRouter } from 'next/router';

const dashboard = () => {
	const { user } = useSelector((state: any) => state.auth);
	useLoadUserQuery(undefined, { refetchOnMountOrArgChange: true });

	// check if user is_block or not
	const router = useRouter();
	useEffect(() => {
		if (user?.is_block) {
			router.push('/suspended');
		}
	}, [user]);

	return (
		<UserLayout>
			<div>
				<UserInfo />
				<div className=''>
					<Mining />
				</div>
			</div>
			<TawkTo3 />
		</UserLayout>
	);
};

export default dashboard;
