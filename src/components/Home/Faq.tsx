import React from 'react';
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react';
import { InnerFaq } from './InnerFaq';

const allFaq = [
	{
		id: 1,
		question: `General Information:`,
		answer: [
			{
				id: 1,
				question: `What is Express Life?`,
				answer: [
					`Express Life is a dynamic network marketing company that provides individuals with opportunities to earn income through various programs, including direct referrals, global joining income, and monthly subscriptions.
`,
				],
			},
			{
				id: 2,
				question: `How can I join Express Life?`,
				answer: [
					'You can become a member of Express Life in two ways:',
					'1. Pay a one-time Joining Amount of 10 USDT.',
					'2. Optionally, subscribe to the Monthly Subscription for 5 USDT.',
				],
			},
			{
				id: 3,
				question: `Express Life available worldwide?`,
				answer: [
					'Yes, Express Life is a global platform that welcomes participants from around the world, subject to local laws and regulations.',
				],
			},
			{
				id: 4,
				question: `Can I join without any prior experience in network marketing?`,
				answer: [
					'Absolutely, Express Life encourages individuals with various levels of experience to join. We offer training and support to assist you in your journey to success.',
				],
			},
		],
	},
	{
		id: 2,
		question: `Earning Opportunities:`,
		answer: [
			{
				id: 1,
				question: `How can I earn with Express Life?`,
				answer: [
					'You can earn through six different avenues:',
					'1. Direct Referrals',
					'2. Global Joining Income',
					'3. Team Joining Income',
					'4. Global Monthly Subscription Earnings',
					'5. Team Monthly Subscription Earnings',
					'6. Rank and Incentives',
				],
			},
			{
				id: 2,
				question: `What is the Global Joining Income?`,
				answer: [
					'The Global Joining Income rewards you for each user who pays the joining fee. Your commission increases with the number of referrals and their levels within your network.',
				],
			},
			{
				id: 3,
				question: `What are the Monthly Subscription Earnings?`,
				answer: [
					'Monthly Subscription Earnings allow you to earn a bonus for each user who pays the monthly subscription fee. This income is based on the size and depth of your team.',
				],
			},
		],
	},

	{
		id: 3,
		question: `Rank and Incentives:`,
		answer: [
			{
				id: 1,
				question: `What are the different ranks in Express Life?`,
				answer: [
					' Express Life offers several ranks, including Brand Promoter (BP), Senior Brand Promoter (SBP), Domestic Promoter (DP), Senior Domestic Promoter (SDP), Country Promoter (CP), and Senior Country Promoter (SCP).',
				],
			},
			{
				id: 2,
				question: `How can I qualify for a higher rank?`,
				answer: [
					'Achieving a higher rank requires meeting specific criteria, such as the number of direct referrals and the structure of your team.',
				],
			},
		],
	},

	{
		id: 4,
		question: `Fees and Charges:`,
		answer: [
			{
				id: 1,
				question: `Are there any fees or charges?`,
				answer: [
					'There is a 1 USDT withdrawal charge per transaction and a 5% transaction fee for peer-to-peer transactions within the platform.',
				],
			},
			{
				id: 2,
				question: `How and when will I receive my earnings?`,
				answer: [
					'Earnings are typically credited to your account within 24H, and you can request a withdrawal once they reach the minimum withdrawal amount.',
				],
			},
			{
				id: 3,
				question: `Is there a minimum withdrawal amount?`,
				answer: [
					'Yes, there is a minimum withdrawal amount, which is 5 USDT. You can request a withdrawal once your earnings reach this threshold.',
				],
			},
			{
				id: 4,
				question: `Can I change my payment method for withdrawals?`,
				answer: [
					'You can change your payment method for withdrawals by updating your payment information in your account settings.',
				],
			},
		],
	},

	{
		id: 5,
		question: `Joining and Registration:`,
		answer: [
			{
				id: 1,
				question: `Do I need to provide any personal information during registration?`,
				answer: [
					'Yes, during registration, you will be required to provide accurate personal information for verification purposes.',
				],
			},
			{
				id: 2,
				question: `Is there a limit to the number of direct referrals I can have?`,
				answer: [
					'There is no limit to the number of direct referrals you can have. You can refer as many people as you like.',
				],
			},
		],
	},

	{
		id: 6,
		question: `Monthly Subscription:`,
		answer: [
			{
				id: 1,
				question: `What is the benefit of subscribing to the Monthly Subscription?`,
				answer: [
					'Subscribing to the Monthly Subscription allows you to earn additional income and unlock higher earning potential within our program.',
				],
			},
			{
				id: 2,
				question: `Can I cancel the Monthly Subscription at any time?`,
				answer: [
					' Yes, you can cancel your Monthly Subscription at any time. The cancellation will take effect at the end of your current subscription period.',
				],
			},
		],
	},

	{
		id: 7,
		question: `Team Building:`,
		answer: [
			{
				id: 1,
				question: `How do I build and grow my team?`,
				answer: [
					'You can build your team by referring new members and helping them refer others. Our team joining income and team monthly subscription earnings are designed to reward team growth.',
				],
			},
			{
				id: 2,
				question: `What support and resources are available for team building?`,
				answer: [
					'We offer training materials, webinars, and support to help you build and manage your team effectively.',
				],
			},
		],
	},

	{
		id: 8,
		question: `Data Privacy and Security:`,
		answer: [
			{
				id: 1,
				question: `How is my personal information protected?`,
				answer: [
					'Express Life takes data privacy seriously and employs security measures to protect your personal information. Please refer to our Privacy Policy for more details.',
				],
			},
		],
	},

	{
		id: 9,
		question: `Termination and Account Recovery:`,
		answer: [
			{
				id: 1,
				question: `What happens if my account is terminated, and how can I recover it?`,
				answer: [
					'In case of account termination, please contact our support team to discuss the situation and explore possible solutions for account recovery.',
				],
			},
		],
	},

	{
		id: 10,
		question: `Refunds:`,
		answer: [
			{
				id: 1,
				question: `Is there a refund policy for payments made to Express Life?`,
				answer: [
					`Express Life's refund policy, if applicable, should be clearly outlined in the Terms and Conditions.`,
				],
			},
		],
	},
];

function Icon({ id, open }: any) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={2}
			stroke='currentColor'
			className={`${
				id === open ? 'rotate-180' : ''
			} h-5 w-5 transition-transform`}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M19.5 8.25l-7.5 7.5-7.5-7.5'
			/>
		</svg>
	);
}

const Faq = () => {
	const [open, setOpen] = React.useState(0);

	const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
	return (
		<div>
			{allFaq?.map((item: any) => (
				<Accordion
					key={item.id}
					open={open === item.id}
					// icon={<Icon id={item.id} open={open} />}
				>
					<AccordionHeader onClick={() => handleOpen(item.id)}>
						<span className=' text-blue-gray-200'>{item.question}</span>
					</AccordionHeader>
					<AccordionBody>
						<div className='my-1 text-blue-gray-400'>
							<InnerFaq items={item.answer} />
						</div>
					</AccordionBody>
				</Accordion>
			))}
		</div>
	);
};

export default Faq;
