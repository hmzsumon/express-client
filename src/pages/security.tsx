import DeviceAndActivity from '@/components/Security/DeviceAndActivities';
import Header from '@/components/Security/Header';
import SecurityNotice from '@/components/Security/SecurityNotice';
import TwoFactorAuth from '@/components/Security/TwoFactorAuth';
import UserLayout from '@/components/layout/UserLayout';
import React from 'react';

const Security = () => {
	return (
		<UserLayout>
			<div>
				<Header />
			</div>
			<div className='px-6 py-8 '>
				{/* <div>
					<SecurityNotice />
				</div> */}
				<div>
					<TwoFactorAuth />
				</div>
				<div>
					<DeviceAndActivity />
				</div>
			</div>
		</UserLayout>
	);
};

export default Security;
