import Link from 'next/link';
import React from 'react';

const GlobalJoining = () => {
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				{/* <Navbar /> */}
			</div>
			<div className='pt-32 pb-10'>
				<div className='container mx-auto'>
					<h5 className='text-white text-3xl font-bold text-center'>
						Global Joining Earning Overview
					</h5>
				</div>
			</div>
			<div className='container mx-auto py-10 px-5 md:px-20 text-white'>
				<h3 className='text-2xl font-bold mb-3'>
					Global Joining Earning Overview:
				</h3>
				<p>
					Express Life introduces a groundbreaking income opportunity – the
					Global Joining Earning feature. This unique component of the
					platform's compensation plan is designed to reward participants for
					their global recruitment efforts, fostering a sense of community and
					collaboration. As members actively contribute to the growth of the
					platform by bringing in new participants, the Global Joining Earning
					feature ensures that their efforts are not only recognized but also
					generously compensated.
				</p>
				<h3 className='text-2xl font-bold mb-3 mt-5'>
					How Global Joining Earning Works:
				</h3>
				<p>
					The Global Joining Earning feature operates on a structured bonus
					system, rewarding participants for each level of recruitment within
					their network. The more individuals a participant introduces to the
					platform, the higher their earning potential becomes. Let's delve into
					the specifics of this exciting income stream:
				</p>
				<h3 className='text-2xl font-bold mb-3 mt-5'>Levels and Bonuses:</h3>
				<ol className='list-inside list-decimal space-y-2'>
					<li>
						<span className='font-bold text-xl'>Level 1:</span>
						<ul className='list-inside list-disc pl-5 space-y-2'>
							<li>
								<span className='font-bold'>Requirement: </span>
								<span>02 Members</span>
							</li>
							<li>
								<span className='font-bold'>Bonus: </span>
								<span>0.40 USDT</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Level 2:</span>
						<ul className='list-inside list-disc pl-5 space-y-2'>
							<li>
								<span className='font-bold'>Requirement: </span>
								<span>04 Members</span>
							</li>
							<li>
								<span className='font-bold'>Bonus: </span>
								<span>0.80 USDT</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Level 3:</span>
						<ul className='list-inside list-disc pl-5 space-y-2'>
							<li>
								<span className='font-bold'>Requirement: </span>
								<span>08 Members</span>
							</li>
							<li>
								<span className='font-bold'>Bonus: </span>
								<span>1.60 USDT</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Level 4:</span>
						<ul className='list-inside list-disc pl-5 space-y-2'>
							<li>
								<span className='font-bold'>Requirement: </span>
								<span>16 Members</span>
							</li>
							<li>
								<span className='font-bold'>Bonus: </span>
								<span>3.20 USDT</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Level 5:</span>
						<ul className='list-inside list-disc pl-5 space-y-2'>
							<li>
								<span className='font-bold'>Requirement: </span>
								<span>32 Members</span>
							</li>
							<li>
								<span className='font-bold'>Bonus: </span>
								<span>6.40 USDT</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Level 6:</span>
						<ul className='list-inside list-disc pl-5 space-y-2'>
							<li>
								<span className='font-bold'>Requirement: </span>
								<span>64 Members</span>
							</li>
							<li>
								<span className='font-bold'>Bonus: </span>
								<span>12.80 USDT</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Level 7:</span>
						<ul className='list-inside list-disc pl-5 space-y-2'>
							<li>
								<span className='font-bold'>Requirement: </span>
								<span>128 Members</span>
							</li>
							<li>
								<span className='font-bold'>Bonus: </span>
								<span>25.60 USDT</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Level 8:</span>
						<ul className='list-inside list-disc pl-5 space-y-2'>
							<li>
								<span className='font-bold'>Requirement: </span>
								<span>256 Members</span>
							</li>
							<li>
								<span className='font-bold'>Bonus: </span>
								<span>51.20 USDT</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Level 9:</span>
						<ul className='list-inside list-disc pl-5 space-y-2'>
							<li>
								<span className='font-bold'>Requirement: </span>
								<span>512 Members</span>
							</li>
							<li>
								<span className='font-bold'>Bonus: </span>
								<span>102.40 USDT</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Level 10:</span>
						<ul className='list-inside list-disc pl-5 space-y-2'>
							<li>
								<span className='font-bold'>Requirement: </span>
								<span>1024 Members</span>
							</li>
							<li>
								<span className='font-bold'>Bonus: </span>
								<span>204.80 USDT</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Level 11:</span>
						<ul className='list-inside list-disc pl-5 space-y-2'>
							<li>
								<span className='font-bold'>Requirement: </span>
								<span>2048 Members</span>
							</li>
							<li>
								<span className='font-bold'>Bonus: </span>
								<span>409.60 USDT</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Level 12:</span>
						<ul className='list-inside list-disc pl-5 space-y-2'>
							<li>
								<span className='font-bold'>Requirement: </span>
								<span>4096 Members</span>
							</li>
							<li>
								<span className='font-bold'>Bonus: </span>
								<span>819.20 USDT</span>
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Level 13:</span>
						<ul className='list-inside list-disc pl-5 space-y-2'>
							<li>
								<span className='font-bold'>Requirement: </span>
								<span>8192 Members</span>
							</li>
							<li>
								<span className='font-bold'>Bonus: </span>
								<span>1638.20 USDT</span>
							</li>
						</ul>
					</li>
				</ol>
				<h3 className='text-2xl font-bold mb-3 mt-5'>
					Additional Bonus Details:
				</h3>
				<ul className='list-inside list-disc pl-5 space-y-2'>
					<li>
						For every user paying the joining fee, participants receive a bonus
						of 0.20 USDT.
					</li>
					<li>
						The cumulative global income is calculated based on the total number
						of users paying the joining fee within the entire network.
					</li>
				</ul>
				<h3 className='font-bold text-2xl mb-3 mt-5'>
					Scalability and Recognition:
				</h3>
				<p>
					As participants progress through the levels, their earning potential
					scales exponentially. This scalability encourages sustained effort in
					global recruitment, and as participants reach higher levels, they not
					only accumulate substantial bonuses but also gain recognition within
					the Express Life community.
				</p>
				<h3 className='text-2xl font-bold mb-3 mt-5'>
					Global Joining Earning as a Core Income Stream:
				</h3>
				<p>
					Global Joining Earning serves as a core income stream within the
					Express Life compensation plan. It reflects the platform's commitment
					to rewarding participants for actively contributing to the growth and
					vitality of the network. The transparent and structured bonus system
					ensures that participants understand their earning potential as they
					advance through the various levels.
				</p>
				<h3 className='text-2xl font-bold mb-3 mt-5'>
					Incentives for Active Participation:
				</h3>
				<ul className='list-inside list-disc space-y-2 pl-5'>
					<li>
						The Global Joining Earning feature is designed to incentivize active
						participation in network building.
					</li>
					<li>
						Participants not only earn bonuses for their direct efforts but also
						benefit from the efforts of their entire network, creating a
						collaborative and mutually beneficial environment.
					</li>
				</ul>
				<h3 className='text-2xl font-bold mt-5 mb-3'>Conclusion:</h3>
				<p>
					In conclusion, the Global Joining Earning feature is a cornerstone of
					Express Life's compensation plan. It transforms the act of global
					recruitment into a rewarding and scalable income opportunity,
					emphasizing the platform's commitment to financial empowerment and
					community building. As participants unlock new levels and accumulate
					bonuses, they become integral contributors to the success of Express
					Life, creating a vibrant and thriving network of entrepreneurs. Join
					Express Life, embark on the journey of global joining earning, and
					witness your efforts unfold into a world of financial opportunities
					and recognition.
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

export default GlobalJoining;
