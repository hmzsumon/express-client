import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import { LuPhoneCall } from 'react-icons/lu';
import { GiImperialCrown } from 'react-icons/gi';
import Logo from '@/public/assets/Express Life uk new logo file 01 1.png';
import Image from 'next/image';

import { TfiEmail } from 'react-icons/tfi';
import {
	FaFacebookF,
	FaInstagram,
	FaMapLocationDot,
	FaTwitter,
} from 'react-icons/fa6';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div>
			<div className=' justify-between mx-auto navbar header__bg'>
				<div className=''>
					<Link href='/' className='flex items-center gap-2 w-75 bordered'>
						<Image className='w-24' src={Logo} alt='' />
						<h3 className='text-2xl font-bold text-white border-dashed sm:text-base md:text-3xl lg:flex md:flex sm:flex brand__style w-50'>
							Express Life
						</h3>
					</Link>
				</div>

				<div className='hidden lg:flex'>
					<ul className='px-1 menu menu-horizontal'>
						<li>
							<Link className='nav__link' href='/'>
								Home
							</Link>
						</li>
						<li className='nav__link menu-dropdown'>
							About
							<ul className='space-y-3 hidden-dropdown'>
								<li>
									<Link href='/aboutUs' className='nav__link'>
										About Us
									</Link>
								</li>
								<li>
									<Link className='nav__link' href='/ourTeam'>
										Our Team
									</Link>
								</li>
								<li>
									<Link className='nav__link' href='/privacyPolicy'>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link className='nav__link' href='/termsCondition'>
										Terms and Conditions
									</Link>
								</li>
							</ul>
						</li>
						<li className='nav__link menu-dropdown'>
							Features
							<ul className='space-y-3 hidden-dropdown '>
								<li>
									<Link className='nav__link' href='/features'>
										Features
									</Link>
								</li>
								<li>
									<Link className='nav__link' href='/featuresDetails'>
										Features Details
									</Link>
								</li>
								<li>
									<Link className='nav__link' href='/projects'>
										Projects
									</Link>
								</li>
								<li>
									<Link className='nav__link' href='/projectsDetails'>
										Projects Details
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link className='nav__link' href='/package'>
								Package
							</Link>
						</li>
						<li>
							<Link href='/faq' className='nav__link'>
								FAQ
							</Link>
						</li>
						<li>
							<Link href='/contact' className='nav__link'>
								Contact
							</Link>
						</li>
					</ul>
				</div>

				<div className='hidden lg:flex'>
					{/* Side Bar Big Device */}
					<div className='mr-5 drawer'>
						<input id='my-drawer' type='checkbox' className='drawer-toggle' />
						<div className='drawer-content'>
							<label
								htmlFor='my-drawer'
								className='text-3xl font-bold cursor-pointer text-[#D02EF0]'
							>
								<HiMiniBars3CenterLeft />
							</label>
						</div>
						<div className='drawer-side'>
							<label
								htmlFor='my-drawer'
								aria-label='close sidebar'
								className='drawer-overlay'
							></label>
							<div className='min-h-full p-4 text-center w-96 drawer__bg text-base-content'>
								<img className='mx-auto w-52' src={Logo} alt='' />
								<div className='mt-16 space-y-5 text-white font-OutFit'>
									<h2 className='text-3xl font-bold font-OutFit'>
										Contact Information
									</h2>
									<p className='custom__bg__color p-7 mx-auto rounded text-5xl w-[fit-content] '>
										<GiImperialCrown />
									</p>
									<p className='text-xl'>
										<a href='tel:07209264'>07209264</a>
									</p>
									<p className='custom__bg__color p-7 mx-auto rounded text-5xl w-[fit-content] '>
										<TfiEmail />
									</p>
									<p className='text-xl'>
										<a href='mailto:support@expresslife.uk'>
											support@expresslife.uk
										</a>
									</p>
									<p className='custom__bg__color p-7 mx-auto rounded text-5xl w-[fit-content] '>
										<FaMapLocationDot />
									</p>
									<p className='text-xl'>
										16 Harrison Road, Fulwood, Preston, Lancashire, England, PR2
										9QH
									</p>
									<div className='flex justify-center gap-2 drawer__icons'>
										<a className='border drawer__icon rounded p-4 text-2xl border-[#d02ef0]'>
											<FaFacebookF />
										</a>
										<a className='border rounded p-4 text-2xl border-[#d02ef0]'>
											<FaInstagram />
										</a>
										<a className='border rounded p-4 text-2xl border-[#d02ef0]'>
											<FaTwitter />
										</a>
									</div>
									<p className='text-center font-OutFit '>
										Copyright © 2024{' '}
										<Link
											href='/'
											className='text-white nav__link text-nowrap font-OutFit'
										>
											Express Life.
										</Link>
										All rights reserved.
									</p>
								</div>
							</div>
						</div>
					</div>

					<Link
						href='/login'
						className='px-6 py-4 mr-3 rounded cursor-pointer btn__bg text-nowrap font-OutFit'
					>
						Login
					</Link>
					<Link
						href='/sign-up'
						className='border border-[#d02ef0] py-4 text-white px-6 rounded text-nowrap cursor-pointer font-OutFit'
					>
						Sign Up
					</Link>
				</div>

				{/* Side Bar Samll Device */}
				<div className='justify-between drawer lg:hidden'>
					<input id='nav-drawer' type='checkbox' className='drawer-toggle' />
					<div className='drawer-content'>
						<label
							htmlFor='nav-drawer'
							className='text-3xl font-bold cursor-pointer text-[#D02EF0]'
						>
							<HiMiniBars3CenterLeft />
						</label>
					</div>
					<div className='drawer-side'>
						<label
							htmlFor='nav-drawer'
							aria-label='close sidebar'
							className='drawer-overlay'
						></label>
						<ul className='min-h-full p-4 space-y-3 menu menu-vertical w-80 bg-base-200 drawer__bg text-base-content'>
							<img className='w-32 mx-auto mb-5' src={Logo} alt='' />
							<li>
								<Link className='nav__link' href='/'>
									Home
								</Link>
							</li>
							<li>
								<details>
									<summary className='nav__link'>About</summary>
									<ul className='p-2'>
										<li>
											<Link href='/aboutUs' className='nav__link'>
												About Us
											</Link>
										</li>
										<li>
											<Link className='nav__link' href='/ourTeam'>
												Our Team
											</Link>
										</li>
										<li>
											<Link className='nav__link' href='/privacyPolicy'>
												Privacy Policy
											</Link>
										</li>
										<li>
											<Link className='nav__link' href='/termsCondition'>
												Terms and Conditions
											</Link>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<details>
									<summary className='nav__link'>Features</summary>
									<ul className='p-2 space-y-3'>
										<li>
											<Link className='nav__link' href='/features'>
												Features
											</Link>
										</li>
										<li>
											<Link className='nav__link' href='/featuresDetails'>
												Features Details
											</Link>
										</li>
										<li>
											<Link className='nav__link' href='/projects'>
												Projects
											</Link>
										</li>
										<li>
											<Link className='nav__link' href='/projectsDetails'>
												Projects Details
											</Link>
										</li>
									</ul>
								</details>
							</li>

							<li>
								<Link className='nav__link' href='/package'>
									Package
								</Link>
							</li>
							<li>
								<Link href='/faq' className='nav__link'>
									FAQ
								</Link>
							</li>
							<li>
								<Link href='/contact' className='nav__link'>
									Contact
								</Link>
							</li>

							<div className='flex pt-5'>
								<Link
									href='/login'
									className='btn__bg py-4 px-6 mr-3 rounded text-nowrap cursor-pointer w-[fit-content] font-OutFit'
								>
									Login
								</Link>
								<Link
									href='/sign-up'
									className='border border-[#d02ef0] py-4 text-white px-6 w-[fit-content] rounded text-nowrap cursor-pointer font-OutFit'
								>
									Sign Up
								</Link>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
