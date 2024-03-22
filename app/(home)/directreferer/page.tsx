import Link from 'next/link';
import React from 'react';

const DirectRefer = () => {
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				{/* <Navbar /> */}
			</div>
			<div className='pt-32 pb-10'>
				<div className='container mx-auto'>
					<h5 className='text-white text-3xl font-bold text-center'>
						Direct Referral Income Overview
					</h5>
				</div>
			</div>
			<div className='container mx-auto py-10 px-5 md:px-10 text-white'>
				<h3 className='text-2xl font-bold mb-3'>
					Direct Referral Income Overview:
				</h3>
				<p>
					One of the key pillars of Express Life's rewarding compensation plan
					is the Direct Referral Income, a robust system designed to acknowledge
					and compensate participants for their individual recruitment efforts.
					This income stream empowers members to amplify their earnings by
					introducing others to the platform, creating a network that fosters
					growth and collaboration.
				</p>
				<h3 className='text-2xl font-bold mt-5 mb-3 '>
					How Direct Referral Income Works:
				</h3>
				<p className='font-semibold'>**1. Earning Per Direct Referral:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						For every direct referral, participants earn a lucrative bonus of 4
						USDT, providing a direct and immediate reward for each new member
						they bring into the Express Life community.
					</li>
				</ul>
				<p className='font-semibold'>**2. Unlimited Referral Potential:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						There is no cap on the number of referrals a participant can make.
						This unlimited earning potential allows individuals to continuously
						expand their network and maximize their Direct Referral Income.
					</li>
				</ul>
				<h3 className='text-2xl font-bold mt-5 mb-3 '>
					Benefits of Direct Referral Income:
				</h3>
				<p className='font-semibold'>**1. Instant Earnings:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						Direct Referral Income ensures participants receive instant earnings
						for each new member they personally introduce to the platform. This
						immediate reward structure contributes to a dynamic and responsive
						compensation plan.
					</li>
				</ul>
				<p className='font-semibold'>**2. Encourages Network Growth:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						By incentivizing direct referrals, Express Life encourages members
						to actively participate in the growth of the community. This creates
						a vibrant network of like-minded individuals, fostering a sense of
						community and shared success.
					</li>
				</ul>
				<p className='font-semibold'>**3. Unlocks the Power of Networking:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						Networking is at the core of Express Life's success, and the Direct
						Referral Income mechanism amplifies the power of word-of-mouth
						referrals. Participants become advocates for the platform,
						attracting new members and building a resilient and expanding
						network.
					</li>
				</ul>
				<h3 className='text-2xl font-bold mt-5 mb-3'>
					Direct Referral Income in Action:
				</h3>
				<p>
					Let's break down the potential earnings based on the Direct Referral
					Income structure:
				</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						<span className='font-bold'>Direct Referral Bonus:</span>
						<span>4 USDT per direct referral</span>
					</li>
				</ul>
				<h3 className='text-2xl font-bold mt-5 mb-3'>Example Scenario:</h3>
				<ol className='list-inside list-decimal space-y-2'>
					<li>
						Participant A refers 10 new members to Express Life.
						<ul className='pl-5 list-inside list-disc space-y-2'>
							<li>Earnings: 10 referrals * 4 USDT = 40 USDT</li>
						</ul>
					</li>
					<li>
						Participant B, inspired by the potential earnings, refers 20 new
						members.
						<ul className='pl-5 list-inside list-disc space-y-2'>
							<li>Earnings: 20 referrals * 4 USDT = 80 USDT</li>
						</ul>
					</li>
					<li>
						Participant C, witnessing the community's growth, refers 50 new
						members.
						<ul className='pl-5 list-inside list-disc space-y-2'>
							<li>Earnings: 50 referrals * 4 USDT = 200 USDT</li>
						</ul>
					</li>
				</ol>
				<h3 className='font-bold text-2xl mt-5 mb-3'>
					Unleashing Financial Potential:
				</h3>
				<p>
					With each referral, participants not only contribute to the expansion
					of the Express Life network but also unlock their financial potential
					through the Direct Referral Income. This income stream is designed to
					empower individuals, providing them with tangible rewards for their
					role in shaping the community's success.
				</p>
				<h3 className='font-bold text-2xl mt-5 mb-3'>Conclusion:</h3>
				<p>
					Express Life's Direct Referral Income is a cornerstone of the
					platform's commitment to rewarding individual efforts and promoting
					active participation. As participants continue to bring new members
					into the fold, they not only earn immediate bonuses but also
					contribute to the vibrancy and success of the Express Life community.
					Join Express Life today, embrace the power of direct referrals, and
					embark on a journey where your network growth translates into
					substantial and rewarding income opportunities.
				</p>
				<div>
					<Link
						href='/'
						className='btn__bg w-[fit-content] py-3 px-5 rounded mt-10'
					>
						Go Back
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DirectRefer;
