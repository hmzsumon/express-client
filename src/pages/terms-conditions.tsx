import { useRouter } from 'next/router';
import React from 'react';
import { HiArrowSmLeft } from 'react-icons/hi';

const Privacy = () => {
	const router = useRouter();
	return (
		<div className='px-4 py-6 text-blue-gray-200 bg-black_2'>
			<div className='flex gap-4'>
				<HiArrowSmLeft
					className='text-2xl cursor-pointer text-blue-gray-300 hover:text-blue-700'
					onClick={() => router.back()}
				/>
				<p>
					<span className='text-xl font-bold'>Terms and Conditions of Use</span>
				</p>
			</div>
			<div>
				<br />{' '}
				<span className='font-bold underline '>
					1. Eligibility for Participation:
				</span>{' '}
				<ul className='ml-6 list-disc'>
					<li>
						Participants must be at least 18 years of age to join Express Life.
					</li>
					<li>
						Participants must comply with all local and international laws and
						regulations governing their participation.
					</li>
				</ul>
				<br />{' '}
				<span className='font-bold underline '>2. Registration and Fees:</span>{' '}
				<ul className='ml-6 list-disc'>
					<li>
						Participants can choose from two methods of registration: by paying
						a one-time Joining Amount of 10 USDT and an optional Monthly
						Subscription Fee of 5 USDT.
					</li>
					<li>
						All fees paid to Express Life are non-refundable unless otherwise
						specified in the Refund Policy.
					</li>
				</ul>
				<br />{' '}
				<span className='font-bold underline '>3. Direct Referral Earning</span>{' '}
				<ul className='ml-6 list-disc'>
					<li>
						Participants can earn 4 USDT for each direct referral they introduce
						to the Express Life network.
					</li>
					<li>
						Commissions are subject to a minimum threshold for withdrawal as
						specified in the Withdrawal Policy.
					</li>
				</ul>
				<br />{' '}
				<span className='font-bold underline '>4. Global Joining Income</span>{' '}
				<ul className='ml-6 list-disc'>
					<li>
						Participants can earn from the Global Joining Income, which offers a
						tiered commission structure based on the number of people they refer
						and their position within the network.
					</li>
					<li>
						Commission calculations and payment frequency will be outlined in
						the Compensation Plan.
					</li>
				</ul>{' '}
				<br />{' '}
				<span className='font-bold underline '>5. Team Joining Income</span>
				<ul className='ml-6 list-disc'>
					<li>
						Members can earn a bonus of 0.20 USDT for each person who joins
						their team up to level 12.
					</li>
					<li>
						Bonus qualification and payment conditions are described in the
						Compensation Plan.
					</li>
				</ul>{' '}
				<br />
				<span className='font-bold underline '>
					6. Global Monthly Subscription Earning
				</span>
				<ul className='ml-6 list-disc'>
					<li>
						To earn from the Global Monthly Subscription Earning, participants
						must pay a monthly subscription fee of 5 USDT.
					</li>
					<li>
						Participants can earn 0.10 USDT for each user who pays the monthly
						subscription fee. The earning potential increases with the growth of
						their team.
					</li>
					<li>
						Additional details about this income stream are available in the
						Compensation Plan.
					</li>
				</ul>{' '}
				<br />
				<span className='font-bold underline '>
					7. Team Monthly Membership Earning
				</span>
				<ul className='ml-6 list-disc'>
					<li>
						Participants can earn a bonus of 0.16 USDT for each user in their
						team who pays the monthly subscription fee, up to 12 levels deep.
					</li>
					<li>
						The eligibility criteria and earnings structure can be found in the
						Compensation Plan.
					</li>
				</ul>{' '}
				<br />{' '}
				<span className='font-bold underline '>8. Rank and Incentives</span>{' '}
				<ul className='ml-6 list-disc'>
					<li>
						Express Life offers a ranking system with associated incentives.
						Participants can achieve various ranks, such as Brand Promoter (BP),
						Senior Brand Promoter (SBP), Domestic Promoter (DP), Senior Domestic
						Promoter (SDP), Country Promoter (CP), and Senior Country Promoter
						(SCP).
					</li>

					<li>
						Each rank comes with specific requirements and rewards as outlined
						in the Compensation Plan.
					</li>
				</ul>{' '}
				<br />
				<span className='font-bold underline '>9. Withdrawal Charges</span>
				<ul className='ml-6 list-disc'>
					<li>
						A withdrawal charge of 1 USDT per transaction applies when
						participants request to withdraw their earnings.
					</li>
					<li>
						Additional withdrawal terms and conditions are specified in the
						Withdrawal Policy.
					</li>
				</ul>{' '}
				<br />
				<span className='font-bold underline '>10. P2P Transactions</span>
				<ul className='ml-6 list-disc'>
					<li>
						A 5% transaction fee is applicable to peer-to-peer (P2P)
						transactions within the Express Life platform.
					</li>
					<li>
						Details regarding P2P transaction limits and fees can be found in
						the P2P Transaction Policy.
					</li>
				</ul>{' '}
				<br />
				<span className='font-bold underline '>
					11. Compliance with Company Policies
				</span>
				<ul className='ml-6 list-disc'>
					<li>
						Participants must adhere to all company policies, terms, and
						conditions.
					</li>
					<li>
						Engaging in fraudulent or unethical activities may result in account
						suspension or termination.
					</li>
				</ul>{' '}
				<br />
				<span className='font-bold underline '>
					12. Termination and Refund Policy
				</span>
				<ul className='ml-6 list-disc'>
					<li>
						Express Life reserves the right to terminate a participant's account
						for any violations of the terms and conditions.
					</li>
					<li>
						Refund policies, if applicable, are outlined in the Refund Policy.
					</li>
				</ul>{' '}
				<br />
				<span className='font-bold underline '>13. Dispute Resolution</span>
				<ul className='ml-6 list-disc'>
					<li>
						Participants should follow the dispute resolution process outlined
						in the Dispute Resolution Policy to address any issues or conflicts.
					</li>
				</ul>{' '}
				<br />
				<span className='font-bold underline '>
					14. Changes to Terms and Conditions
				</span>
				<ul className='ml-6 list-disc'>
					<li>
						Express Life may modify the terms and conditions at its discretion.
						Participants will be notified of changes via their registered email
						addresses.
					</li>
					<li>
						Participants are responsible for regularly reviewing the terms and
						conditions for updates.
					</li>
				</ul>{' '}
				<br />
				<span className='font-bold underline '>15. Contact Us</span>
				<ul className='ml-6 list-disc'>
					<li>
						For questions, concerns, or requests related to this Terms and
						Conditions , please contact us at
						<a
							className='text-blue-500 underline'
							href='mailto:support@expresslife.uk'
						>
							{' '}
							Express Life Support
						</a>
						.
					</li>
				</ul>{' '}
			</div>
		</div>
	);
};

export default Privacy;
