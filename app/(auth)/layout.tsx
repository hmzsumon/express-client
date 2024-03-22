'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '../components/Shared/Footer/Footer';
import { Button, Modal } from 'flowbite-react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const AuthLayout = ({ children }: any) => {
	const { user } = useSelector((state: any) => state.auth);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	// for modal
	useEffect(() => {
		if (!user?.is_activation_done || !user?.is_subscribe_done) {
			setOpenModal(true);
		}
	}, []);
	return (
		<div className='flex h-screen overflow-hidden'>
			{/* <!-- ===== Sidebar Start ===== --> */}
			<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
			{/* <!-- ===== Sidebar End ===== --> */}
			<div className='relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto'>
				{/* <!-- ===== Header Start ===== --> */}
				<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
				{/* <!-- ===== Header End ===== --> */}

				{/* <!-- ===== Main Content Start ===== --> */}
				<main>
					<div className='p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10'>
						{children}
					</div>
				</main>

				{/* <!-- ===== Main Content End ===== --> */}
				<Footer></Footer>
			</div>
			{/* AStart Model */}
			<>
				<Modal
					show={openModal}
					onClose={() => setOpenModal(false)}
					position={'center'}
					className='mt-24 '
				>
					<Modal.Header>
						{!user?.is_activation_done && <span>Activate your account</span>}
						{!user?.is_subscribe_done && <span>Subscribe to a plan</span>}
					</Modal.Header>
					<Modal.Body
						className='flex flex-col items-center justify-center text-black'
						style={{ padding: '2rem' }}
					>
						{!user?.is_activation_done && (
							<p>
								You need to activate your account to access the full features of
								the app. Please check your email and click on the activation
								link
							</p>
						)}
						{!user?.is_subscribe_done && (
							<p>
								You need to subscribe to a plan to access the full features of
								the app. Please check the plans and choose one that suits you
							</p>
						)}
					</Modal.Body>
					<Modal.Footer>
						{!user?.is_activation_done ? (
							<Link href='/activation'>
								<Button onClick={() => setOpenModal(false)} className='mr-4'>
									Active
								</Button>
							</Link>
						) : (
							<Link href='/subscription'>
								<Button onClick={() => setOpenModal(false)}>
									Subscription
								</Button>
							</Link>
						)}
					</Modal.Footer>
				</Modal>
			</>
		</div>
	);
};

export default AuthLayout;
