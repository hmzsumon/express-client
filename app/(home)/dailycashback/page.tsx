import Link from 'next/link';
import React from 'react';

const DailyCashBack = () => {
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				{/* <Navbar /> */}
			</div>
			<div className='pt-32 pb-10'>
				<div className='container mx-auto'>
					<h5 className='text-white text-3xl font-bold text-center'>
						Daily Cash Back
					</h5>
				</div>
			</div>
			<div className='container py-10 mx-auto px-5 md:px-20 text-white'>
				<h3 className='text-2xl font-bold mb-3'>
					Daily Cashback Offer for Business and Premium Packages:
				</h3>
				<p>
					Express Life goes beyond conventional income streams by introducing a
					lucrative Daily Cashback Offer, specifically designed for participants
					opting for the Business and Premium packages. This innovative feature
					adds a consistent and predictable element to the participants'
					earnings, enhancing the overall financial experience within the
					platform.
				</p>
				<h3 className='text-2xl font-bold mb-3 mt-5'>
					Business and Premium Packages:
				</h3>

				<ol className='list-inside list-decimal'>
					<li className='text-xl font-bold'>Business Package:</li>
					<ul className='list-inside list-disc pl-5 space-y-2 mt-4'>
						<li>
							<span className='font-bold'>Cost:</span> $40 + (1 USDT Processing
							fee)
						</li>

						<li>
							<span className='font-bold'>Subscription Duration:</span> 6 months
						</li>

						<li>
							<span className='font-bold'>Daily Cashback:</span> $0.02 per day
						</li>
					</ul>

					<li className='text-xl font-bold'>Premium Package:</li>
					<ul className='list-inside list-disc pl-5 space-y-2 mt-4'>
						<li>
							<span className='font-bold'>Cost:</span> $70 + (1 USDT Processing
							fee)
						</li>

						<li>
							<span className='font-bold'>Subscription Duration:</span> 12
							months
						</li>

						<li>
							<span className='font-bold'>Daily Cashback:</span> $0.05 per day
						</li>
					</ul>
				</ol>
				<h3 className='font-bold text-2xl mb-3 mt-5'>
					How the Daily Cashback Works:
				</h3>
				<ol className='list-inside list-decimal space-y-2'>
					<li>
						<span className='italic'> Business Package:</span>
						<p>
							Participants who opt for the Business Package enjoy a 6-month
							subscription period. During this duration, they receive a daily
							cashback of $0.02. This means that every day, participants in the
							Business Package are entitled to earn $0.02 as a cashback
							incentive.
						</p>
					</li>
					<li>
						<span className='italic'> Premium Package:</span>
						<p>
							For participants choosing the Premium Package, the subscription
							period extends to 12 months. In return for their commitment, they
							receive a more substantial daily cashback of $0.05. This daily
							cashback adds up over time, contributing to a consistent and
							predictable income for participants throughout the one-year
							subscription period.
						</p>
					</li>
				</ol>
				<h3 className='font-bold text-2xl mb-3 mt-5'>
					Key Features of the Daily Cashback Offer:
				</h3>
				<ol className='list-inside list-decimal space-y-2 '>
					<li>
						<span className='font-bold text-xl'>Predictable Income:</span>
						<ul className='list-inside list-disc pl-5 mt-2'>
							<li>
								The daily cashback feature provides participants with a
								predictable income stream, allowing for better financial
								planning and stability.
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Long-Term Duration:</span>
						<ul className='list-inside list-disc pl-5 mt-2'>
							<li>
								Participants in both the Business and Premium Packages benefit
								from a continuous cashback offer throughout their respective
								subscription periods of 6 months and 12 months.
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Package Flexibility:</span>
						<ul className='list-inside list-disc pl-5 mt-2'>
							<li>
								Users have the flexibility to choose the package that aligns
								with their preferences and financial goals, whether it's the
								6-month Business Package or the 12-month Premium Package.
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Enhanced Earnings:</span>
						<ul className='list-inside list-disc pl-5 mt-2'>
							<li>
								The daily cashback offer complements other income streams within
								the Express Life platform, contributing to an overall enhanced
								earnings experience for participants.
							</li>
						</ul>
					</li>
				</ol>
				<h3 className='font-bold text-2xl mb-3 mt-5'>How to Participate:</h3>
				<ol className='list-inside list-decimal space-y-2 '>
					<li>
						<span className='font-bold text-xl'>Choose Your Package:</span>
						<ul className='list-inside list-disc pl-5 mt-2'>
							<li>
								Select either the Business or Premium Package based on your
								subscription preference and financial objectives.
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Complete Registration:</span>
						<ul className='list-inside list-disc pl-5 mt-2'>
							<li>
								Complete the registration process, ensuring you are an active
								participant within the Express Life platform.
							</li>
						</ul>
					</li>
					<li>
						<span className='font-bold text-xl'>Enjoy Daily Cashback:</span>
						<ul className='list-inside list-disc pl-5 mt-2'>
							<li>
								Once registered and subscribed to the Business or Premium
								Package, participants automatically start receiving daily
								cashback according to the package's specified rate.
							</li>
						</ul>
					</li>
				</ol>
				<h3 className='text-2xl font-bold mb-3 mt-5'>Conclusion:</h3>
				<p>
					Express Life's introduction of the Daily Cashback Offer for the
					Business and Premium Packages is a testament to the platform's
					commitment to providing diverse and rewarding income opportunities.
					Participants not only benefit from the daily cashback but also enjoy
					the flexibility of choosing a subscription package that suits their
					preferences and financial plans. Whether opting for the 6-month
					Business Package with a daily cashback of $0.02 or the 12-month
					Premium Package with a daily cashback of $0.05, participants can
					experience a consistent and reliable income stream, contributing to
					their financial success within the Express Life network. Join Express
					Life, choose your package, and embark on a journey where daily
					cashback becomes a key element in your financial independence and
					wealth-building strategy.
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

export default DailyCashBack;
