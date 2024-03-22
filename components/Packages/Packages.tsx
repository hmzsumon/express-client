'use client';
import { LuMoveRight } from 'react-icons/lu';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { TbFreeRights } from 'react-icons/tb';
import { MdWorkspacePremium } from 'react-icons/md';
import { BsRocketTakeoff } from 'react-icons/bs';
import { RiExchangeDollarFill } from 'react-icons/ri';
import weelImg from '@/public/assets/weel.png';
import Image from 'next/image';
import SinglePackage from './SinglePackage';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useLoadUserQuery } from '@/redux/features/auth/authApi';

const Packages = ({ purpose }: any) => {
	useLoadUserQuery();
	const { user } = useSelector((state: any) => state.auth);
	// check use is_activation_done and is_subscription_done is true or not if true then redirect to subscription-record page
	const router = useRouter();
	useEffect(() => {
		if (user?.is_activation_done && user?.is_subscribe_done) {
			router.push('/subscription-record');
		}
	}, [user]);
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	const packages = [
		// {
		// 	id: 1,
		// 	title: 'Free',
		// 	price: 0,
		// 	features: ['UNLOCK MINING', '24/7 EMAIL SUPPORT'],
		// 	icon: <TbFreeRights />,
		// 	bg_color: 'bg-primary',
		// 	subTitle: 'ONLY SIGNUP',
		// 	packageType: 'free',
		// },
		{
			id: 2,
			title: 'Basic',
			price: purpose === 'a' ? 12 : 5,
			token: 100,
			features: [
				'1 MONTH REGISTRATION',
				'UNLOCK MINING',
				`${purpose === 'a' ? '100 ELC TOKEN' : '0 ELC TOKEN'}`,
				'ALL EARNING UNLOCK',
				'24/7 EMAIL SUPPORT',
			],
			icon: <RiExchangeDollarFill />,
			bg_color: 'bg-warning',
			subTitle:
				purpose === 'a'
					? ' REGISTRATION & 1 MONTH SUBSCRIPTION'
					: '1 MONTH SUBSCRIPTION',
			packageType: 'basic',
			purpose,
			subscriptionFor: 1, // subscription for 1 month
		},
		{
			id: 3,
			title: 'Business',
			price: purpose === 'a' ? 42 : 30,
			token: 650,
			features: [
				`${purpose === 'a' ? 7 : 6} MONTH SUBSCRIPTION`,
				'UNLOCK MINING',
				'650 ELC TOKEN',
				'ALL EARNING UNLOCK',
				'DAILY CASH BACK ($0.02 PER DAY)',
				'24/7 EMAIL SUPPORT',
			],
			icon: <BsRocketTakeoff />,
			bg_color: 'bg-accent',
			subTitle:
				purpose === 'a'
					? 'REGISTRATION & 6 MONTH SUBSCRIPTION'
					: '6 MONTH SUBSCRIPTION',
			packageType: 'business',
			purpose,
			subscriptionFor: purpose === 'a' ? 7 : 6, // subscription for 7 months
		},
		{
			id: 4,
			title: 'Premium',
			price: purpose === 'a' ? 72 : 60,
			token: 1250,
			features: [
				`${purpose === 'a' ? 13 : 12} MONTH SUBSCRIPTION`,
				'UNLOCK MINING',
				'1250 ELC TOKEN',
				'ALL EARNING UNLOCK',
				'DAILY CASH BACK ($0.05 PER DAY)',
				'24/7 EMAIL SUPPORT',
			],
			icon: <MdWorkspacePremium />,
			bg_color: 'bg-info',
			subTitle:
				purpose === 'a'
					? 'REGISTRATION & 12 MONTH SUBSCRIPTION'
					: '12 MONTH SUBSCRIPTION',
			packageType: 'premium',
			purpose,
			subscriptionFor: purpose === 'a' ? 13 : 12, // subscription for 13 months
		},
	];
	return (
		<div className='container relative  mx-auto text-white'>
			<h2
				data-aos='flip-up'
				className='py-2 text-3xl font-bold text-center font-OutFit p-sm'
			>
				Check Out The Most Creative Packages
			</h2>
			<p data-aos='flip-up' className='text-center p-sm'>
				Metaverse is a marketplace dedicated to the digital world.
			</p>
			<Image
				data-aos='zoom-in-up'
				className='rotate__animate absolute top-0 right-0 left-0 md:left-[30%]'
				src={weelImg}
				alt=''
			/>
			<div className='relative grid grid-cols-1 gap-5 px-5 mt-10 md:grid-cols-2 lg:grid-cols-3 md:px-0'>
				{packages.map((pack) => (
					<SinglePackage key={pack.id} pack={pack} />
				))}
			</div>
		</div>
	);
};

export default Packages;
