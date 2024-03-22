import React from 'react';

const TableBox = ({ children }: any) => {
	return (
		<div>
			<div className='box relative'>
				<div className='box-body '>
					<div className=' relative z-10'>{children}</div>
				</div>
				<div className='box-arrow'>
					<div className='box-arrow-top-left'></div>
					<div className='box-arrow-top-right'></div>
					<div className='box-arrow-bottom-left'></div>
					<div className='box-arrow-bottom-right'></div>
				</div>
			</div>
		</div>
	);
};

export default TableBox;
