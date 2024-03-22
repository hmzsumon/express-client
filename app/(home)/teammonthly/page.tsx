import Link from 'next/link';
import React from 'react';

const TeamMonthly = () => {
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				{/* <Navbar /> */}
			</div>
			<div className='pt-32 pb-10'>
				<div className='container mx-auto'>
					<h5 className='text-white text-3xl font-bold text-center'>
						Team Monthly Subscription Earnings
					</h5>
				</div>
			</div>
			<div className='container mx-auto py-10 px-5 md:px-20 text-white'>
				<h3 className='text-2xl font-bold mb-3'>
					Team Monthly Subscription Earnings: Collaborative Triumphs in
					Financial Success
				</h3>
				<p>
					Express Life proudly presents the Team Monthly Subscription Earnings,
					a groundbreaking initiative that transforms individual success into a
					collective journey of financial triumph. This program is tailored to
					encourage teamwork, creating a synergy where each member's commitment
					contributes to the prosperity of the entire team.
				</p>
				<p className='py-3'>
					<span className='font-bold'>Unified Earnings for Team Success: </span>
					<span>
						{' '}
						Unlock a new dimension of earning as your team grows and flourishes.
						With Team Monthly Subscription Earnings, each member's contribution
						to the monthly subscription fee becomes a source of collective
						wealth.
					</span>
				</p>
				<p className='py-3'>
					<span className='font-bold'>
						0.16 USDT Bonus for Every Team Member:
					</span>
					<span>
						Experience the power of collaboration with a bonus of 0.16 USDT for
						each team member who actively participates in the monthly
						subscription. This not only strengthens your team bonds but also
						fuels a steady stream of earnings.
					</span>
				</p>
				<p className='py-3'>
					<span className='font-bold'>
						Cohesive Network, Continuous Rewards:
					</span>
					<span>
						As your team expands, so does the potential for financial rewards.
						The Team Monthly Subscription Earnings program fosters a cohesive
						network where the success of one directly contributes to the success
						of all, ensuring a continuous flow of income.
					</span>
				</p>
				<p className='py-3'>
					<span className='font-bold'>Strategic Growth with Express Life:</span>
					<span>
						Benefit from a strategic approach to financial growth managed by
						Express Life. The program's structure is designed not just for
						individual gain but for the collective prosperity of your entire
						team.
					</span>
				</p>
				<p className='py-3'>
					<span className='font-bold'>
						Seamless Integration into Your Financial Journey:{' '}
					</span>
					<span>
						Whether you're a seasoned network marketer or just stepping into the
						world of financial opportunities, Team Monthly Subscription Earnings
						seamlessly integrates into your journey, offering a supportive
						environment where success is shared and celebrated.
					</span>
				</p>
				<p>
					Join Express Life today and be part of a community where your success
					is not only individual but also a shared accomplishment. Team Monthly
					Subscription Earnings is more than a program; it's a testament to the
					belief that collective efforts lead to collective triumphs in the
					realm of financial success. Express Life: Where teams rise, and
					prosperity follows.
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

export default TeamMonthly;
