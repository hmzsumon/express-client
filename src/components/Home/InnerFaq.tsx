import React from 'react';
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react';

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

export function InnerFaq({ items }: any) {
	console.log(items);
	const [open, setOpen] = React.useState(0);

	const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

	return (
		<>
			{items &&
				items?.map((item: any) => (
					<Accordion
						key={item.id}
						open={open === item.id}
						icon={<Icon id={item.id} open={open} />}
					>
						<AccordionHeader onClick={() => handleOpen(item.id)}>
							<span className=' text-blue-gray-200'>{item.question}</span>
						</AccordionHeader>
						<AccordionBody>
							{item.answer.map((ans: any) => (
								<p className='my-1 text-blue-gray-400'>{ans}</p>
							))}
						</AccordionBody>
					</Accordion>
				))}
		</>
	);
}
