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
				<span className='font-bold underline '>1. Acceptance of Terms:</span>{' '}
				<ul className='ml-6 list-disc'>
					<li>
						By using any services provided by Express Life, you agree to abide
						by these terms and conditions.
					</li>
				</ul>
				<br /> <span className='font-bold underline '>2. Use of Services</span>{' '}
				<ul className='ml-6 list-disc'>
					<li>
						You agree to use our services only for lawful purposes. You shall
						not use our services to engage in any illegal or unauthorized
						activities.
					</li>
				</ul>
				<br /> <span className='font-bold underline '>3. Privacy</span>{' '}
				<ul className='ml-6 list-disc'>
					<li>
						We respect your privacy. Our Privacy Policy outlines how we collect,
						use, and protect your personal information.
					</li>
				</ul>
				<br />{' '}
				<span className='font-bold underline '>
					4. Registration and Account Security
				</span>{' '}
				<ul className='ml-6 list-disc'>
					<li>
						You are responsible for maintaining the security of your account.
						You agree to provide accurate and up-to-date information during
						registration.
					</li>
				</ul>{' '}
				<br />{' '}
				<span className='font-bold underline '>
					5. Payment and Subscription
				</span>
				<ul className='ml-6 list-disc'>
					<li>
						Fees associated with our services are detailed on our website. By
						subscribing, you agree to pay the fees associated with your chosen
						plan.
					</li>
				</ul>{' '}
				<br />
				<span className='font-bold underline '>6. Intellectual Property</span>
				<ul className='ml-6 list-disc'>
					<li>
						All content and materials on our platform are owned or licensed by
						Express Life and are protected by intellectual property laws.
					</li>
				</ul>{' '}
				<br />
				<span className='font-bold underline '>7. Limitation of Liability</span>
				<ul className='ml-6 list-disc'>
					<li>
						Express Life is not liable for any direct, indirect, incidental, or
						consequential damages.
					</li>
				</ul>{' '}
				<br /> <span className='font-bold underline '>8. Termination</span>{' '}
				<ul className='ml-6 list-disc'>
					<li>
						We reserve the right to suspend or terminate your account if you
						violate these terms and conditions.
					</li>
				</ul>{' '}
				<br />
				<span className='font-bold underline '>9. Changes to Terms</span>
				<ul className='ml-6 list-disc'>
					<li>
						We may update these terms at any time, and it is your responsibility
						to review them periodically.
					</li>
				</ul>{' '}
				<br />
				<span className='font-bold underline '>10. Contact Information</span>
				<ul className='ml-6 list-disc'>
					<li>
						If you have any questions or concerns about these terms, please
						contact us at{' '}
						<a
							href='mailto:support@expresslife.uk '
							className='text-blue-500 underline hover:text-blue-700'
						>
							Send us an email
						</a>
						.
					</li>
				</ul>{' '}
			</div>
		</div>
	);
};

export default Privacy;
