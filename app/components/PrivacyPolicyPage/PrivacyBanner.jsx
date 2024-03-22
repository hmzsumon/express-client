import Link from 'next/link';

const PrivacyBanner = () => {
	return (
		<div className='pt-32 pb-10'>
			<div className='container mx-auto'>
				<h5 className='text-3xl font-bold text-center text-white'>
					Privacy Policy
				</h5>
				<div className='text-sm breadcrumbs mx-auto w-[fit-content] text-white font-semibold'>
					<ul>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PrivacyBanner;
