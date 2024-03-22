import { FaPhoneVolume } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import { GrMapLocation } from 'react-icons/gr';
import { LuMoveRight } from 'react-icons/lu';

const ContactFristCompo = () => {
	return (
		<div className='px-5 py-20 md:px-0'>
			<div className='container mx-auto font-OutFit'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
					<div className='px-3 py-10 text-center text-white border rounded-lg border-slate-300'>
						<span className='flex justify-center mb-8 text-7xl'>
							<FaPhoneVolume />
						</span>
						<h3 className='mb-3 text-2xl font-bold uppercase '>
							Customer service
						</h3>
						<a className='text-lg' href='tel:07209264'>
							07209264
						</a>
					</div>
					<div className='px-3 py-10 text-center text-white border rounded-lg border-slate-300'>
						<span className='flex justify-center mb-8 text-7xl'>
							<MdOutlineMailOutline />
						</span>
						<h3 className='mb-3 text-2xl font-bold uppercase '>mail address</h3>
						<a className='text-lg' href='mailto:support@expresslife.uk'>
							support@expresslife.uk
						</a>
					</div>
					<div className='px-3 py-10 text-center text-white border rounded-lg border-slate-300'>
						<span className='flex justify-center mb-8 text-7xl'>
							<GrMapLocation />
						</span>
						<h3 className='mb-3 text-2xl font-bold uppercase '>office </h3>
						<p className='text-lg'>
							16 Harrison Road, Fulwood, Preston, Lancashire, England, PR2 9QH
						</p>
					</div>
				</div>
				<form className='pt-32'>
					<div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
						<input
							className='w-full p-5 duration-300 bg-transparent border rounded outline-none focus__border'
							type='text'
							name=''
							id=''
							placeholder='Full Name'
						/>
						<input
							className='w-full p-5 duration-300 bg-transparent border rounded outline-none focus__border'
							type='email'
							name=''
							id=''
							placeholder='Email Address'
						/>
						<input
							className='w-full p-5 duration-300 bg-transparent border rounded outline-none focus__border'
							type='number'
							name=''
							id=''
							placeholder='Phone Number'
						/>
					</div>
					<div className='my-4'>
						<textarea
							className='w-full p-5 duration-300 bg-transparent border rounded outline-none focus__border'
							name=''
							id=''
							cols='30'
							placeholder='Your Message'
							rows='5'
						></textarea>
					</div>
					<button className='px-6 py-5 mx-auto mt-4 rounded btn__bg font-OutFit '>
						Send Form <LuMoveRight />
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactFristCompo;
