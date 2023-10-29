import React from 'react';
import Image from 'next/image';

//icons
import { SlSocialTwitter, SlSocialYoutube } from 'react-icons/sl';
import { FaFacebookF, FaTelegram, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const communities = [
	{
		id: 1,
		name: 'Facebook',
		icon: <FaFacebookF />,
		url: 'https://t.me/expresslifeukofficial',
	},
	{
		id: 2,
		name: 'Twitter',
		icon: <SlSocialTwitter />,
		url: 'https://t.me/expresslifeukofficial',
	},

	{
		id: 4,
		name: 'Youtube',
		icon: <SlSocialYoutube />,
		url: 'https://t.me/expresslifeukofficial',
	},

	{
		id: 6,
		name: 'Telegram',
		icon: <FaTelegram />,
		url: 'https://t.me/expresslifeukofficial',
	},
];
const Footer = () => {
	return (
		<div className='px-4 py-8 text-white'>
			<div className='grid gap-4 md:grid-cols-2 '>
				<div className='mb-6 space-y-4 '>
					<div className='w-full mx-auto '>
						<div className='flex items-center w-full gap-2 '>
							<Image src='/logo.png' alt='logo' width={100} height={100} />
							<h2 className='text-2xl font-bold gradient-text '>
								Express Life
							</h2>
						</div>
					</div>
					<div className='md:w-9/12 '>
						<p className=' text-cyan-500'>
							Learn more about Express Life, chat with the team, others in the
							community, and have your say in shaping the future of crypto.
						</p>
					</div>
					<div className='flex gap-4 md:w-9/12 '>
						<button className='w-6/12 py-2 font-bold rounded-md bg-btn'>
							<Link href='/about'>About Us</Link>
						</button>
						<button className='w-6/12 py-2 font-bold rounded-md bg-btn'>
							<Link href='/terms-conditions'>Terms & Conditions</Link>
						</button>
					</div>
				</div>

				<div className='self-center space-y-6 md:mx-auto md:w-6/12 '>
					<div>
						<h2 className='text-2xl text-center '>Community</h2>
					</div>
					<div className='flex items-center justify-between '>
						{communities.map((community) => {
							return (
								<button key={community.id} className=''>
									<a
										href={community.url}
										target='_blank'
										rel='noopener noreferrer'
										className='text-2xl'
									>
										{community.icon}
									</a>
								</button>
							);
						})}
					</div>
				</div>
			</div>
			<div className='border-t mt-8 border-[#272A2E]  flex items-center justify-center'>
				<p className='mt-4 gradient-text '>Express Life &#169; 2023</p>
			</div>
		</div>
	);
};

export default Footer;
