'use client';
/* eslint-disable react/no-unescaped-entities */
import Navbar from '../Shared/Navbar/Navbar';
import { useEffect } from 'react';
import $ from 'jquery';
import Footer from '../Shared/Footer/Footer';
import Link from 'next/link';

const TeamJoining = () => {
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
						Team Joining Earning Overview
					</h5>
				</div>
			</div>
			<div className='container px-5 py-10 mx-auto text-white md:px-20'>
				<h3 className='mb-3 text-2xl font-bold'>
					Team Joining Earning Overview:
				</h3>
				<p>
					Express Life introduces an exciting and collaborative income
					opportunity – the Team Joining Earning feature. This innovative
					element of the platform's compensation plan is designed to reward
					participants not only for their individual efforts but also for
					fostering team growth. As members actively build and expand their
					teams, the Team Joining Earning feature ensures that their dedication
					is acknowledged and generously compensated.
				</p>
				<h3 className='mt-5 mb-3 text-2xl font-bold'>
					How Team Joining Earning Works:
				</h3>

				<p>
					The Team Joining Earning feature operates on a dynamic bonus system,
					providing participants with bonuses for each new member joining their
					team up to the 12th level. This creates a structure that not only
					incentivizes individual recruitment but also encourages team building.
					Let's explore the specifics of this collaborative income stream:
				</p>
				<h3 className='mt-5 mb-3 text-2xl font-bold'>
					Team Joining Bonus Structure:
				</h3>
				<ul className='pl-5 space-y-2 list-disc list-inside'>
					<li>
						When someone joins your team, participants receive a bonus of 0.20
						USDT.
					</li>
					<li>
						The bonus is applicable for each team member joining up to the 12th
						level.
					</li>
				</ul>
				<h3 className='mt-5 mb-3 text-2xl font-bold'>
					Level-wise Team Joining Earning:
				</h3>
				<ol className='space-y-2 list-decimal list-inside'>
					<li>
						<span className='text-xl font-bold '> Level 1:</span>
						<ul className='pl-5 list-disc list-inside'>
							<li>
								<span className='font-bold'>Bonus:</span>
								<span>0.20 USDT per joining member</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='text-xl font-bold '> Level 2:</span>
						<ul className='pl-5 list-disc list-inside'>
							<li>
								<span className='font-bold'>Bonus:</span>
								<span>0.20 USDT per joining member</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='text-xl font-bold '> Level 3:</span>
						<ul className='pl-5 list-disc list-inside'>
							<li>
								<span className='font-bold'>Bonus:</span>
								<span>0.20 USDT per joining member</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='text-xl font-bold '> Level 4:</span>
						<ul className='pl-5 list-disc list-inside'>
							<li>
								<span className='font-bold'>Bonus:</span>
								<span>0.20 USDT per joining member</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='text-xl font-bold '> Level 5:</span>
						<ul className='pl-5 list-disc list-inside'>
							<li>
								<span className='font-bold'>Bonus:</span>
								<span>0.20 USDT per joining member</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='text-xl font-bold '> Level 6:</span>
						<ul className='pl-5 list-disc list-inside'>
							<li>
								<span className='font-bold'>Bonus:</span>
								<span>0.20 USDT per joining member</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='text-xl font-bold '> Level 7:</span>
						<ul className='pl-5 list-disc list-inside'>
							<li>
								<span className='font-bold'>Bonus:</span>
								<span>0.20 USDT per joining member</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='text-xl font-bold '> Level 8:</span>
						<ul className='pl-5 list-disc list-inside'>
							<li>
								<span className='font-bold'>Bonus:</span>
								<span>0.20 USDT per joining member</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='text-xl font-bold '> Level 9:</span>
						<ul className='pl-5 list-disc list-inside'>
							<li>
								<span className='font-bold'>Bonus:</span>
								<span>0.20 USDT per joining member</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='text-xl font-bold '> Level 10:</span>
						<ul className='pl-5 list-disc list-inside'>
							<li>
								<span className='font-bold'>Bonus:</span>
								<span>0.20 USDT per joining member</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='text-xl font-bold '> Level 11:</span>
						<ul className='pl-5 list-disc list-inside'>
							<li>
								<span className='font-bold'>Bonus:</span>
								<span>0.20 USDT per joining member</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='text-xl font-bold '> Level 12:</span>
						<ul className='pl-5 list-disc list-inside'>
							<li>
								<span className='font-bold'>Bonus:</span>
								<span>0.20 USDT per joining member</span>
							</li>
						</ul>
					</li>
				</ol>
				<h3 className='mt-5 mb-3 text-2xl font-bold'>
					Scalability and Collaboration:
				</h3>
				<p>
					As participants actively build and expand their teams, the Team
					Joining Earning feature offers a scalable income opportunity. The
					bonus structure encourages participants to focus not only on personal
					recruitment but also on supporting and nurturing the growth of their
					team members.
				</p>
				<h3 className='mt-5 mb-3 text-2xl font-bold'>
					Recognition and Collaboration:
				</h3>
				<ul className='pl-5 space-y-2 list-disc list-inside'>
					<li>
						The Team Joining Earning feature is not just about individual
						achievements; it's about collaborative success.
					</li>
					<li>
						Participants receive recognition for their role in team building,
						creating a sense of shared accomplishment within the Express Life
						community.
					</li>
				</ul>
				<h3 className='mt-5 mb-3 text-2xl font-bold'>
					Incentives for Team Growth:
				</h3>
				<ul className='pl-5 space-y-2 list-disc list-inside'>
					<li>
						The bonus structure provides a tangible incentive for participants
						to foster team growth up to the 12th level.
					</li>
					<li>
						Encourages participants to actively mentor and support their team
						members in their journey with Express Life.
					</li>
				</ul>
				<h3 className='mt-5 mb-3 text-2xl font-bold'>Conclusion:</h3>
				<p>
					In conclusion, the Team Joining Earning feature adds a collaborative
					dimension to Express Life's compensation plan. It transforms team
					building into a rewarding and scalable income opportunity, emphasizing
					the platform's commitment to fostering a supportive community. As
					participants actively build and nurture their teams, they not only
					earn bonuses but also contribute to the overall growth and success of
					the Express Life network. Join Express Life, engage in team building,
					and witness your efforts translate into a world of financial
					opportunities, recognition, and shared success within the Express Life
					community.
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

export default TeamJoining;
