import React from 'react';

const Support = () => {
	return (
		<div className='px-4 py-10 '>
			<div className='px-4 py-8 mx-auto mt-20 md:w-6/12 bg-black_2'>
				<h1 className='text-xl font-bold text-center text-blue-gray-200'>
					Contact Support
				</h1>
				<p className='text-center text-blue-gray-200 '>
					We are here to help you with any questions or concerns you may have.
				</p>
				<div>
					<a
						href='mailto:support@expresslife.uk'
						target='_blank'
						className='block px-4 py-2 mt-4 text-sm font-bold text-center bg-btn rounded text-blue-gray-800 hover:bg-yellow-800'
					>
						Contact Support
					</a>
				</div>
			</div>
		</div>
	);
};

export default Support;
