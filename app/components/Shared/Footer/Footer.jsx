import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Logo from '@/public/assets/Express Life uk new logo file 01 1.png';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className='container pb-10 mx-auto'>
			<img className='w-32 mx-auto' src={Logo} alt='' />
			<div className='items-center flex-none gap-4 my-5 md:flex'>
				<div className='w-full h-[1px] bg-slate-300'></div>
				<div className='flex flex-wrap text-xs font-bold items-center justify-center gap-6 md:flex-nowrap my-2'>
					<Link
						href={`/aboutUs`}
						className='text-white nav__link text-nowrap font-OutFit'
					>
						About Us
					</Link>
					<Link
						href={`/features`}
						className='text-white nav__link text-nowrap font-OutFit'
					>
						Features
					</Link>
					<Link
						href={`/projects`}
						className='text-white nav__link text-nowrap font-OutFit'
					>
						Project
					</Link>
					<Link
						href={`/privacyPolicy`}
						className='text-white nav__link text-nowrap font-OutFit'
					>
						Privacy Policy
					</Link>
					<Link
						href={`/termsCondition`}
						className='text-white nav__link text-nowrap font-OutFit'
					>
						Tearms & Condition
					</Link>
					<Link
						href={`/contact`}
						className='text-white nav__link text-nowrap font-OutFit'
					>
						Contact
					</Link>
				</div>
				<div className='w-full h-[1px] bg-slate-300'></div>
			</div>
			<div className='flex items-center justify-center gap-3 mb-5'>
				<a className='p-5 text-2xl rounded btn__bg'>
					<FaFacebook />
				</a>
				<a className='p-5 text-2xl rounded btn__bg'>
					<FaTwitter />
				</a>
				<a className='p-5 text-2xl rounded btn__bg'>
					<FaInstagram />
				</a>
			</div>
			<p className='text-center text-xs font-bold  font-OutFit '>
				Copyright © 2024{' '}
				<Link href='/' className='text-white nav__link text-nowrap font-OutFit'>
					Express Life.
				</Link>
				All rights reserved.
			</p>
		</div>
	);
};

export default Footer;
