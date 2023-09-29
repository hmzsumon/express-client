import UserInfo from '@/components/Dashboard.tsx/UserInfo';
import Mining from '@/components/Mining/Mining';
import UserLayout from '@/components/layout/UserLayout';
import { useLoadUserQuery } from '@/features/auth/authApi';
import { getCookie } from '@/utils/cookie';
import { HomeIcon } from '@/utils/icons/CommonIcons';
import React from 'react';
import { useSelector } from 'react-redux';

const dashboard = () => {
	const { user } = useSelector((state: any) => state.auth);
	useLoadUserQuery(user?._id);
	return (
		<UserLayout>
			<div>
				<UserInfo />
				<div className=''>
					<Mining />
				</div>
			</div>
		</UserLayout>
	);
};

export default dashboard;
