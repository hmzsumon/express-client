import React, { use, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

const Header = (props: { onClickOutside: any }) => {
	const { isAuthenticated } = useSelector((state: any) => state.auth);

	let isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
	const [open, setOpen] = useState(isTabletMid ? true : false);
	const ref = useRef<HTMLDivElement>(null);
	const { onClickOutside } = props;

	useEffect(() => {
		const handleClickOutside = (event: { target: any }) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setOpen(false);
			}
		};
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, [onClickOutside]);
	const handleOpen = () => {
		console.log('Open');
		setOpen(!open);
	};
	useEffect(() => {
		if (isTabletMid) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	}, [isTabletMid]);

	return (
		<div
			ref={ref}
			className='px-4 text-white py-3 register-wrapper border-b
			border-[#2D333B] 
		'
		>
			<div className='flex items-center justify-between'>
				<Image src='/logo_white_2.png' alt='Logo' width={80} height={100} />
				{isAuthenticated ? (
					<div className='space-x-4 '>
						<Link
							href={{
								pathname: '/dashboard',
							}}
							className='px-3 py-1 font-semibold text-gray-800 bg-yellow-700 rounded '
						>
							Dashboard
						</Link>
					</div>
				) : (
					<div className='space-x-4 '>
						<Link href='/login'>
							<span>Login</span>
						</Link>
						<Link
							href='/register'
							className='px-3 py-1 font-semibold text-gray-100 rounded bg--gradient '
						>
							Register
						</Link>
					</div>
				)}
				{/* <div className=' md:hidden'>
					{open ? (
						<AiOutlineClose
							className='text-2xl text-red-500 '
							onClick={handleOpen}
						/>
					) : (
						<AiOutlineMenu className='text-2xl ' onClick={handleOpen} />
					)}
				</div> */}
			</div>
			{/* Start Mobile Menu */}

			{/* <div
				className={`md:hidden fixed  inset-0 max-h-screen top-0 left-0 z-[998]  bg-[#1E2329] w-[70%] transition-all duration-300 ease-in-out ${
					open ? 'translate-x-0' : '-translate-x-[100%]'
				}`}
			>
				<div>
					<nav className='h-full mt-10 '>
						<ul className=''>
							{menuitems.map((item) => (
								<li
									key={item.id}
									className=' cursor-pointer items-center justify-between px-4 hover:bg-[#181A20] py-2 border-b border-[#2D333B] '
								>
									<div>
										<div className='flex items-center justify-between w-full '>
											<Link
												href={item.url}
												className='flex items-center gap-4 mx-2'
												onClick={() => setOpen(false)}
											>
												{item.icon}
												{item.title}
											</Link>
										</div>
									</div>
								</li>
							))}
							{submenuItems.map((item) => (
								<div
									key={item.id}
									className=' cursor-pointer items-center justify-between px-4 hover:bg-[#181A20] py-2 border-b border-[#2D333B] '
								>
									<Submenu item={item} />
								</div>
							))}
						</ul>
					</nav>
				</div>
			</div> */}

			{/* End Mobile Menu */}
		</div>
	);
};

export default Header;
