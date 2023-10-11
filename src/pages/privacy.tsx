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
					<span className='text-xl font-bold'>
						Privacy Policy for Express Life
					</span>
				</p>
			</div>
			<div>
				<br /> <br />{' '}
				<span className='font-bold underline '>1. Introduction</span> <br />{' '}
				Welcome to Express Life Coin (ELC) Mining Site! At ELC, we are committed
				to protecting your privacy and ensuring the security of your personal
				information. This Privacy Policy outlines how we collect, use, and
				safeguard your data. By using our services, you consent to the practices
				described in this policy. <br /> <br />{' '}
				<span className='font-bold underline '>2. Information We Collect</span>{' '}
				<ul className='ml-6 list-disc'>
					<li>To provide and maintain our services.</li>
					<li>To process payments and manage your subscription.</li>
					<li>To monitor and improve our mining services.</li>
				</ul>
				<br /> <br />{' '}
				<span className='font-bold underline '>3.Sharing Your Information</span>{' '}
				<ul className='ml-6 list-disc'>
					<li>
						We do not sell, rent, or trade your personal information with third
						parties.
					</li>
					<li>
						We may share your information with trusted service providers to
						facilitate our services, but only to the extent necessary.
					</li>
				</ul>
				<br /> <br />{' '}
				<span className='font-bold underline '>4. Security Measures</span>{' '}
				<ul className='ml-6 list-disc'>
					<li>
						We use industry-standard security measures to protect your data.
					</li>
					<li>
						You are responsible for keeping your login credentials and payment
						information secure.
					</li>
				</ul>{' '}
				<br /> <br />{' '}
				<span className='font-bold underline '>
					5. Cookies and Tracking Technologies
				</span>
				<ul className='ml-6 list-disc'>
					<li>
						We use cookies to enhance your experience and track usage patterns
						on our site.
					</li>
					<li>
						You can manage your cookie preferences through your browser
						settings.
					</li>
				</ul>{' '}
				<br />
				<br />
				<span className='font-bold underline '>6. Your Choices</span>
				<ul className='ml-6 list-disc'>
					<li>
						You can access, update, or delete your personal information by
						logging into your account.
					</li>
					<li>You may opt out of marketing communications at any time.</li>
				</ul>{' '}
				<br /> <br />
				<span className='font-bold underline '>7. Data Retention</span>
				<ul className='ml-6 list-disc'>
					<li>
						We retain your data as long as necessary to provide our services or
						as required by law
					</li>
				</ul>{' '}
				<br /> <br />{' '}
				<span className='font-bold underline '>8. Children's Privacy</span>{' '}
				<ul className='ml-6 list-disc'>
					<li>
						Our services are not intended for users under the age of 18. We do
						not knowingly collect data from children.
					</li>
				</ul>{' '}
				<br /> <br />
				<span className='font-bold underline '>
					9. Updates to this Privacy Policy
				</span>
				<ul className='ml-6 list-disc'>
					<li>
						We may update this policy as needed. Please review it periodically
						for any changes.
					</li>
				</ul>{' '}
				<br /> <br />
				<span className='font-bold underline '>10. Contact Us</span>
				<ul className='ml-6 list-disc'>
					<li>
						If you have questions or concerns about your privacy, please contact
						us at{' '}
						<a
							href='mailto:support@expresslife.uk '
							className='text-blue-500 underline hover:text-blue-700'
						>
							Send us an email
						</a>
						.
					</li>
				</ul>{' '}
				<br /> <br />
				<p>
					By using Express Life Coin (ELC) Mining Site, you acknowledge that you
					have read and understood this Privacy Policy. Your continued use of
					our services constitutes your acceptance of the terms
					outlined in this policy.
				</p>
			</div>
		</div>
	);
};

export default Privacy;
