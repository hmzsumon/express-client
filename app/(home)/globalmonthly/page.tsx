import Link from 'next/link';
import React from 'react';

const GlobalMonthly = () => {
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				{/* <Navbar /> */}
			</div>
			<div className='pt-32 pb-10'>
				<div className='container mx-auto'>
					<h5 className='text-white text-3xl font-bold text-center'>
						Global Monthly Subscription Earning{' '}
					</h5>
				</div>
			</div>
			<div className='container mx-auto text-white py-10 px-5 md:px-20'>
				<h3 className='text-2xl font-bold mb-3'>
					Global Monthly Subscription Earning: A Gateway to Unceasing Financial
					Triumph
				</h3>
				<p>
					Express Life proudly introduces the Global Monthly Subscription
					Earning, a revolutionary avenue propelling you towards unparalleled
					financial prosperity. This dynamic program is meticulously designed to
					ensure continuous income growth, offering a wealth of opportunities as
					you navigate through its innovative structure.
				</p>
				<p className='mt-3'>
					<span className='font-bold'>
						Unmatched Earning Potential at Every Level:
					</span>

					<span>
						Embark on a journey of financial ascent with our tiered earning
						structure spanning LEVEL - 1 to LEVEL - 13. At each level, you're
						not just earning, but exponentially expanding your financial
						horizons.
					</span>
				</p>
				<p className='mt-5 font-semibold text-xl'>Levels and Bonuses:</p>
				<p className='py-3 font-bold '>Level 1:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						<span className='font-bold'>Requirement: </span>
						<span>02 Members</span>
					</li>
					<li>
						<span className='font-bold'>Bonus: </span>
						<span>0.20 USDT</span>
					</li>
				</ul>
				<p className='py-3 font-bold '>Level 2:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						<span className='font-bold'>Requirement: </span>
						<span>04 Members</span>
					</li>
					<li>
						<span className='font-bold'>Bonus: </span>
						<span>0.40 USDT</span>
					</li>
				</ul>

				<p className='py-3 font-bold '>Level 3:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						<span className='font-bold'>Requirement: </span>
						<span>08 Members</span>
					</li>
					<li>
						<span className='font-bold'>Bonus: </span>
						<span>0.80 USDT</span>
					</li>
				</ul>

				<p className='py-3 font-bold '>Level 4:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						<span className='font-bold'>Requirement: </span>
						<span>16 Members</span>
					</li>
					<li>
						<span className='font-bold'>Bonus: </span>
						<span>1.60 USDT</span>
					</li>
				</ul>

				<p className='py-3 font-bold '>Level 5:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						<span className='font-bold'>Requirement: </span>
						<span>32 Members</span>
					</li>
					<li>
						<span className='font-bold'>Bonus: </span>
						<span>3.20 USDT</span>
					</li>
				</ul>

				<p className='py-3 font-bold '>Level 6:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						<span className='font-bold'>Requirement: </span>
						<span>64 Members</span>
					</li>
					<li>
						<span className='font-bold'>Bonus: </span>
						<span>6.40 USDT</span>
					</li>
				</ul>

				<p className='py-3 font-bold '>Level 7:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						<span className='font-bold'>Requirement: </span>
						<span>128 Members</span>
					</li>
					<li>
						<span className='font-bold'>Bonus: </span>
						<span>12.80 USDT</span>
					</li>
				</ul>

				<p className='py-3 font-bold '>Level 8:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						<span className='font-bold'>Requirement: </span>
						<span>256 Members</span>
					</li>
					<li>
						<span className='font-bold'>Bonus: </span>
						<span>25.60 USDT</span>
					</li>
				</ul>

				<p className='py-3 font-bold '>Level 9:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						<span className='font-bold'>Requirement: </span>
						<span>512 Members</span>
					</li>
					<li>
						<span className='font-bold'>Bonus: </span>
						<span>51.20 USDT</span>
					</li>
				</ul>

				<p className='py-3 font-bold '>Level 10:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						<span className='font-bold'>Requirement: </span>
						<span>1024 Members</span>
					</li>
					<li>
						<span className='font-bold'>Bonus: </span>
						<span>102.40 USDT</span>
					</li>
				</ul>

				<p className='py-3 font-bold '>Level 11:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						<span className='font-bold'>Requirement: </span>
						<span>2048 Members</span>
					</li>
					<li>
						<span className='font-bold'>Bonus: </span>
						<span>204.80 USDT</span>
					</li>
				</ul>

				<p className='py-3 font-bold '>Level 12:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						<span className='font-bold'>Requirement: </span>
						<span>4096 Members</span>
					</li>
					<li>
						<span className='font-bold'>Bonus: </span>
						<span>409.60 USDT</span>
					</li>
				</ul>

				<p className='py-3 font-bold '>Level 13:</p>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						<span className='font-bold'>Requirement: </span>
						<span>8192 Members</span>
					</li>
					<li>
						<span className='font-bold'>Bonus: </span>
						<span>819.20 USDT</span>
					</li>
				</ul>
				<div className='mt-5 space-y-3'>
					<p>
						<span className='font-bold'>
							Bonus Incentives for Monthly Commitment:
						</span>
						<span>
							For every user committing to the monthly subscription fee, a bonus
							of 0.10 USDT is unlocked. This simple commitment transforms into a
							powerful catalyst for sustained and ever-increasing earnings.
						</span>
					</p>
					<p>
						<span className='font-bold'>Global Income Unleashed:</span>
						<span>
							Experience the exhilarating potential of global income as your
							network expands. The program's cumulative effect can reach up to a
							staggering 1638.20 USDT, establishing a global network that
							transcends geographical boundaries.
						</span>
					</p>
					<p>
						<span className='font-bold'>Collaborative Team Rewards: </span>
						<span>
							Foster teamwork and shared success with the Team Monthly
							Subscription Earning bonus. Earn 0.16 USDT for each team member
							contributing to the monthly subscription, creating a cohesive
							network of financial achievers.
						</span>
					</p>
					<p>
						<span className='font-bold'>Sustainable Financial Growth: </span>
						<span>
							Unlike traditional models, the Global Monthly Subscription Earning
							program ensures a constant stream of income with a modest 5 USDT
							monthly subscription fee. Witness your financial garden flourish
							with consistent and sustainable growth.
						</span>
					</p>
					<p>
						<span className='font-bold'>Strategic Coin Price Increase: </span>
						<span>
							Managed by the company, the program incorporates a strategic coin
							price increase, adding a layer of stability to your financial
							journey.
						</span>
					</p>
					<p>
						Join Express Life now to unlock the door to a world where your
						financial dreams are not merely aspirations but tangible realities.
						Whether you're new to the entrepreneurial scene or a seasoned
						professional, our platform equips you with the tools and
						opportunities to turn your financial aspirations into
						accomplishments. Express Life: Where every month is an opportunity
						for financial triumph.
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
		</div>
	);
};

export default GlobalMonthly;
