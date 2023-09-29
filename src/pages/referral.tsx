import UserHeader from '@/components/layout/UserHeader/UserHeader';
import React from 'react';
import { RiFileCopyFill } from 'react-icons/ri';
import { FaQrcode } from 'react-icons/fa';
import Image from 'next/image';
import MyReferrals from '@/components/Referrals/MyReferrals';
import MyTask from '@/components/Referrals/MyTask';
import { useSelector } from 'react-redux';
import CopyToClipboard from '@/utils/CopyToClipboard';
import { RightArrowIcon } from '@/utils/icons/CommonIcons';
import { BiChevronRight } from 'react-icons/bi';
import Link from 'next/link';
import { RWebShare } from 'react-web-share';

const Referral = () => {
	const { user } = useSelector((state: any) => state.auth);

	// get host
	const host = window.location.host;
	// create referral link wit user customer_id
	let referralLink = '';
	if (process.env.NODE_ENV === 'development') {
		referralLink = `http://${host}/register?referral_id=${user?.customer_id}`;
	} else {
		referralLink = `https://${host}/register?referral_id=${user?.customer_id}`;
	}
	// short referral link
	const shortReferralLink = referralLink.slice(0, 15) + '...';
	return (
		<>
			<UserHeader />
			<div className='px-4 py-2 md:px-8'>
				<div className='grid items-center gap-6 py-20  '>
					<div className='p-8  w-full bg-[rgba(46,114,210,.1)] border-[#2e72d2] border rounded-xl'>
						<h2 className='mb-6 text-xl font-bold '>Default Referral</h2>
						<div className='space-y-10 '>
							<div className='flex items-center justify-between p-4 bg-[#191a6c] rounded-xl '>
								<p>Invite ID</p>
								<div className='flex items-center space-x-4 '>
									<p>{user?.customer_id}</p>
									<CopyToClipboard text={user?.customer_id} />
								</div>
							</div>

							<div className='flex items-center justify-between p-4 bg-[#191a6c] rounded-xl '>
								<p>Invite Link</p>
								<div className='flex items-center space-x-4 '>
									<p>{shortReferralLink}</p>
									<CopyToClipboard text={referralLink} />
								</div>
							</div>

							<RWebShare data={{ url: referralLink }}>
								<div className='flex items-center grid-cols-8 gap-4 cursor-pointer '>
									<div className='relative flex-1 col-span-7 p-4 bg-btn rounded-xl'>
										<div className='absolute hidden md:block bottom-1'>
											<Image
												src='/images/referrals/icon.png'
												width={120}
												height={50}
												alt='coin'
											/>
										</div>
										<div>
											<h2 className='text-2xl font-bold text-center text-gray-100 '>
												Invite Friend{' '}
											</h2>
										</div>
									</div>
								</div>
							</RWebShare>
						</div>
					</div>
				</div>
			</div>
			<div className='px-4 py-4 space-y-6 md:px-20'>
				<div>
					<MyReferrals />
				</div>
			</div>
		</>
	);
};

export default Referral;
