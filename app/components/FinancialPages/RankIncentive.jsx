'use client';
/* eslint-disable react/no-unescaped-entities */
import Navbar from '../Shared/Navbar/Navbar';
import { useEffect } from 'react';
import $ from 'jquery';
import Footer from '../Shared/Footer/Footer';
import Link from 'next/link';

const RankIncentive = () => {
	useEffect(() => {
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 50) {
				$('.header').addClass('header__bg');
			} else {
				$('.header').removeClass('header__bg');
			}
		});
	}, []);
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				<Navbar />
			</div>
			<div className='pt-32 pb-10'>
				<div className='container mx-auto'>
					<h5 className='text-3xl font-bold text-center text-white'>
						Rank and Incentive
					</h5>
				</div>
			</div>
			<div className='container px-5 py-10 mx-auto text-white md:px-20'>
				<h3 className='mb-3 text-2xl font-bold'>
					Rank and Incentive: Elevate Your Success Journey with Express Life
				</h3>
				<p>
					Embark on a rewarding journey with Express Life's Rank and Incentive
					program, where your dedication and achievements are not just
					recognized but celebrated. This structured and motivating system is
					designed to propel you through various ranks, each unlocking a new
					level of incentives that align with your commitment to success.
				</p>
				<p className='mt-3 font-semibold'>1. Brand Promoter (BP):</p>
				<ul className='space-y-2 list-disc list-inside '>
					<li>
						<span className='font-bold'>Requirement:</span>
						<span>Direct Referral of 20 users.</span>
					</li>
					<li>
						<span className='font-bold'>Incentive:</span>
						<span>
							Step into the world of recognition with a 10 USDT incentive. Your
							journey begins with a notable achievement and a glimpse of the
							rewards to come.
						</span>
					</li>
				</ul>
				<p className='mt-3 font-semibold'>2. Sr. Brand Promoter (SBP):</p>
				<ul className='space-y-2 list-disc list-inside '>
					<li>
						<span className='font-bold'>Requirement:</span>
						<span>Direct Referral of 50 users and 2 BPs below you.</span>
					</li>
					<li>
						<span className='font-bold'>Incentive:</span>
						<span>
							Progress to the Sr. Brand Promoter level and claim a 20 USDT
							incentive. Your leadership is acknowledged, and you're on the path
							to greater rewards.
						</span>
					</li>
				</ul>
				<p className='mt-3 font-semibold'>3. Domestic Promoter (DP):</p>
				<ul className='space-y-2 list-disc list-inside '>
					<li>
						<span className='font-bold'>Requirement:</span>
						<span>Direct Referral of 100 users and 2 SBPs below you.</span>
					</li>
					<li>
						<span className='font-bold'>Incentive:</span>
						<span>
							Reach the Domestic Promoter rank and enjoy the rewards of a
							domestic tour. Your dedication to building a robust network is now
							matched with exciting experiences.
						</span>
					</li>
				</ul>
				<p className='mt-3 font-semibold'>4. Sr. Domestic Promoter (SDP):</p>
				<ul className='space-y-2 list-disc list-inside '>
					<li>
						<span className='font-bold'>Requirement:</span>
						<span>Direct Referral of 200 users and 2 DPs below you.</span>
					</li>
					<li>
						<span className='font-bold'>Incentive:</span>
						<span>
							Elevate to Sr. Domestic Promoter status and receive a cutting-edge
							smartphone. Your commitment to leadership and growth is now
							reflected in the technology you carry.
						</span>
					</li>
				</ul>
				<p className='mt-3 font-semibold'>5. Country Promoter (CP):</p>
				<ul className='space-y-2 list-disc list-inside '>
					<li>
						<span className='font-bold'>Requirement:</span>
						<span>Direct Referral of 400 users and 3 SDPs below you.</span>
					</li>
					<li>
						<span className='font-bold'>Incentive:</span>
						<span>
							Attain the prestigious Country Promoter rank and be rewarded with
							a high-performance laptop. Your influence expands, and so do the
							perks.
						</span>
					</li>
				</ul>
				<p className='mt-3 font-semibold'>6. Sr. Country Promoter (SCP):</p>
				<ul className='space-y-2 list-disc list-inside '>
					<li>
						<span className='font-bold'>Requirement:</span>
						<span>Direct Referral of 600 users and 4 CPs below you.</span>
					</li>
					<li>
						<span className='font-bold'>Incentive:</span>
						<span>
							Reach the summit as Sr. Country Promoter and be prepared for an
							international tour. Your success story now spans borders, and the
							world becomes your playground.
						</span>
					</li>
				</ul>
				<p className='mt-3'>
					Express Life's Rank and Incentive program not only recognizes your
					achievements but also provides tangible rewards that mirror the
					milestones you've conquered. Join us in shaping a future where success
					is not just a destination but a journey enriched with incentives.
					Express Life: Where each rank achieved is a step closer to the life
					you envision.
				</p>
				<div>
					<Link
						href={`/`}
						className='btn__bg w-[fit-content] py-3 px-5 rounded mt-10'
					>
						Go Back
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default RankIncentive;
