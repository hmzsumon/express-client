import Link from 'next/link';
import React from 'react';

const Mining = () => {
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				{/* <Navbar /> */}
			</div>
			<div className='pt-32 pb-10'>
				<div className='container mx-auto'>
					<h5 className='text-white text-3xl font-bold text-center'>Mining</h5>
				</div>
			</div>
			<div className='py-10 text-white container mx-auto px-5 md:px-20'>
				<h3 className='font-bold text-2xl mt-5 mb-3'>ELC Coin Overview:</h3>
				<p>
					<span className='font-semibold'>Name:</span> ELC Coin
				</p>
				<p>
					<span className='font-semibold'> Mining Mechanism:</span> Free
					registration allows users to mine 0.08 ELC Coins every hour. Users can
					start mining for a continuous 24-hour cycle by clicking the "Start
					Mining" button.
				</p>
				<h3 className='font-bold text-2xl mt-5 mb-3'>
					Free Registration and Hourly Mining:{' '}
				</h3>
				<p>
					Express Life takes pride in breaking down entry barriers by offering
					free registration to all users. This inclusive approach ensures that
					anyone, regardless of their financial capacity, can participate in the
					platform. Upon registration, users gain the privilege of mining 0.08
					ELC Coins every hour.
				</p>
				<h3 className='font-bold text-2xl mt-5 mb-3'>Hourly Mining Cycle:</h3>
				<p>
					What sets Express Life apart is its user-friendly approach to mining.
					By clicking the "Start Mining" button, participants initiate a 24-hour
					mining cycle. During this cycle, they continuously accumulate ELC
					Coins at the rate of 0.08 per hour. This mechanism simplifies the
					mining process, making it accessible even to those new to
					cryptocurrency.
				</p>
				<h3 className='text-2xl font-bold mt-5 mb-3'>
					Automated Mining Cycles:
				</h3>
				<p>
					Express Life values the time and effort of its users. After the
					24-hour mining cycle concludes, mining stops automatically. To resume
					the mining process, users need only click the "Start Mining" button
					again. This automated cycling ensures a hassle-free and convenient
					experience for participants.
				</p>
				<h3 className='text-2xl font-bold mt-5 mb-3'>ELC Coin as a Utility:</h3>
				<p>
					The ELC Coin extends beyond being a mere tradable asset; it serves as
					a utility within the Express Life ecosystem. Users can utilize their
					accumulated ELC Coins for various purposes, including transactions
					within the platform, accessing exclusive features, and participating
					in promotions. This utility enhances the practicality and versatility
					of ELC Coins within the Express Life experience.
				</p>
				<h3 className='text-2xl font-bold mt-5 mb-3'>
					Democratizing Cryptocurrency:
				</h3>
				<p>
					Express Life's commitment to democratizing cryptocurrency is evident
					through its free registration and accessible mining process. The goal
					is to make cryptocurrency ownership and participation in the ecosystem
					inclusive, ensuring that financial opportunities are available to a
					broad spectrum of users.
				</p>
				<h3 className='text-2xl font-bold mt-5 mb-3'>
					Incentives for Participation:
				</h3>
				<p>
					Participation in ELC Coin mining not only results in financial rewards
					but also aligns with the broader incentive structure of Express Life.
					Users actively engaged in the platform position themselves for
					additional income streams through the diverse avenues provided by the
					compensation plan.
				</p>
				<h3 className='text-2xl font-bold mt-5 mb-3'>
					Scalability and Long-Term Rewards:
				</h3>
				<p>
					The scalability of ELC Coin mining aligns with the long-term goals of
					both Express Life and its participants. As the user base expands and
					the platform introduces new features, the potential for ELC Coin
					appreciation and increased utility within the ecosystem grows. This
					long-term perspective encourages sustained engagement and commitment
					from users.
				</p>
				<h3 className='text-2xl font-bold mt-5 mb-3'>
					User-Friendly Experience:
				</h3>
				<p>
					Express Life prioritizes a user-friendly experience by implementing an
					intuitive design for the platform and mining process. The simplicity
					of initiating a 24-hour mining cycle with a single click ensures that
					users, regardless of their familiarity with cryptocurrencies, can
					seamlessly participate in the ELC Coin mining process.
				</p>
				<h3 className='font-bold text-2xl mt-5 mb-3'>
					Community Building Through ELC Coin:
				</h3>
				<p>
					The introduction of ELC Coin not only provides a financial instrument
					but also serves as a catalyst for community building within the
					Express Life platform. Users, united by their common interest in ELC
					Coins, foster a sense of community and collaboration as they actively
					contribute to the growth and success of the network.
				</p>
				<h3 className='text-2xl font-bold mt-5 mb-3'>Conclusion:</h3>
				<p>
					Express Life's ELC Coin mining feature stands as a testament to the
					platform's commitment to accessibility, simplicity, and inclusivity.
					By offering a 24-hour mining cycle initiated with a single click,
					Express Life ensures that users can effortlessly accumulate ELC Coins.
					Join Express Life, click "Start Mining," and embark on a journey where
					every hour contributes not only to your financial independence but
					also to the collective success of a global community. The future of
					cryptocurrency mining is here, and it's designed to be accessible to
					everyone.
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

export default Mining;
