import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';
import Team1 from '@/public/assets/suzanne-redfern.jpg';
import Team2 from '@/public/assets/anita-catherine-murray.jpg';
import Team3 from '@/public/assets/akio-tanaka.jpg';
import Team4 from '@/public/assets/nia-jomo.jpg';
import Team5 from '@/public/assets/luca-rossi.jpg';
import Team6 from '@/public/assets/ethan-reynolds.jpg';
import Team7 from '@/public/assets/isabella-silva.jpg';
import Team8 from '@/public/assets/liam-harper.jpg';
import Image from 'next/image';
import { FaUserTie } from 'react-icons/fa';

const teamMembers = [
	{
		id: 1,
		name: 'Suzanne Redfern',
		position: 'CEO',
		image: Team1,
	},
	{
		id: 2,
		name: 'Anita Catherine Murray',
		position: 'Founder',
		image: Team2,
	},
	{
		id: 3,
		name: 'Akio Tanaka',
		position: 'Asia Continent Manager',
		image: Team3,
	},
	{
		id: 4,
		name: 'Nia Jomo',
		position: 'Africa Continent Manager',
		image: Team4,
	},
	{
		id: 5,
		name: 'Luca Rossi',
		position: 'Europe Continent Manager',
		image: Team5,
	},
	{
		id: 6,
		name: 'Ethan Reynolds',
		position: 'North America Continent Manager',
		image: Team6,
	},
	{
		id: 7,
		name: 'Isabella Silva',
		position: 'South America Continent Manager',
		image: Team7,
	},
	{
		id: 8,
		name: 'Liam Harper',
		position: 'Australia Continent Manager',
		image: Team8,
	},
];

const TeamMembers = () => {
	return (
		<div className='py-20'>
			<div className='container px-5 mx-auto md:px-0'>
				<div className='mb-10'>
					<h2 className='py-2 text-3xl font-bold text-center text-white font-OutFit p-sm'>
						Our Professional Team
					</h2>
					<p className='text-center text-white p-sm'>
						We are at your service with our competent staff.
					</p>
				</div>
				<div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
					{teamMembers.map((member) => (
						<div className='overflow-hidden cursor-pointer team__box'>
							<div className=' bg-white duration-300 rounded-t team__img'>
								<Image
									className='w-full duration-300 rounded-t team__img'
									src={member.image}
									alt=''
								/>
							</div>
							<div className='relative justify-center flex-none p-5 text-center duration-300 rounded-b btn__bg team__info'>
								<div className=''>
									<h5 className='text-xl font-bold'>{member.name}</h5>
									<p className='mt-2 text-sm text-slate-200'>
										{member.position}
									</p>
									<div className='flex items-center justify-center gap-3 mt-5'>
										<a href=''>
											<FaFacebookF />
										</a>
										<a href=''>
											<FaInstagram />
										</a>
										<a href=''>
											<FaTwitter />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TeamMembers;
