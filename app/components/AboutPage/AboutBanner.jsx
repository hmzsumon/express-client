import Link from 'next/link';

const AboutBanner = () => {
	return (
		<div className='pt-32 pb-10'>
			<div className='container mx-auto'>
				<h5 className='text-3xl font-bold text-center text-white'>About Us</h5>
				<div className='text-sm breadcrumbs mx-auto w-[fit-content] text-white font-semibold'>
					<ul>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>About Us</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AboutBanner;
