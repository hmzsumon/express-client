import React, { use, useEffect } from 'react';
import UserHeader from './UserHeader/UserHeader';
import UserSide from './UserSide/UserSide';
import { useSelector } from 'react-redux';
import {
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
	DialogHeader,
} from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
	const { user } = useSelector((state: any) => state.auth);
	const router = useRouter();
	// path

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(!open);

	// check if user is activated
	useEffect(() => {
		if (
			user &&
			!user.is_active &&
			router.pathname !== '/wallet/deposit' &&
			router.pathname !== '/activate'
		) {
			setOpen(true);
		}
	}, [user]);

	return (
		<div>
			<UserHeader />
			<div className='flex min-h-screen '>
				<UserSide />
				<div className='flex-1 overflow-auto '>{children}</div>
			</div>
			<>
				<Dialog
					open={open}
					handler={handleOpen}
					size='xs'
					className='border-[#2e72d2] border rounded bg-[rgb(17,15,41)]'
				>
					<DialogHeader className=' text-blue-gray-100'>
						Activation!
					</DialogHeader>
					<hr className=' border border-[#2e72d2] ' />
					<DialogBody>
						<p className='text-blue-gray-100'>
							Your account is not activated yet. Please active your account and
							earn more.
						</p>
					</DialogBody>

					<DialogFooter>
						<Button
							variant='text'
							color='red'
							onClick={handleOpen}
							className='mr-1'
						>
							<span>Cancel</span>
						</Button>
						<Link href={user?.m_balance < 11 ? '/wallet/deposit' : '/activate'}>
							<Button
								variant='gradient'
								onClick={handleOpen}
								className='bg-btn'
							>
								<span>Activate</span>
							</Button>
						</Link>
					</DialogFooter>
				</Dialog>
			</>
		</div>
	);
};

export default UserLayout;
