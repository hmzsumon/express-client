import React from 'react';
import Image from 'next/image';
import UserLayout from '@/components/layout/UserLayout';

const Mining = () => {
	return (
		<>
			<UserLayout>
				<div className='px-6 py-4 '>
					<section className='overview-section'>
						<div className='map-el '>
							<Image
								src='/images/elements/map.png'
								alt='map'
								width={300}
								height={100}
								className='mx-auto'
							/>
						</div>
						<div>
							<Image
								src='/bitcoin.webp'
								alt='arrow'
								width={300}
								height={100}
								className='mx-auto'
							/>
						</div>
					</section>
				</div>
			</UserLayout>
		</>
	);
};

export default Mining;
