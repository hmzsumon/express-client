/* eslint-disable react/no-unescaped-entities */
import { TbWorldStar } from 'react-icons/tb';
import Butterfly from '@/public/assets/butterfly.gif';
import { GiRetroController } from 'react-icons/gi';
import { LuMoveRight } from 'react-icons/lu';
import Image from 'next/image';
const AboutCompoOne = () => {
	return (
		<div className='py-20'>
			<div className='container grid grid-cols-1 gap-5 px-5 mx-auto md:grid-cols-5 md:px-0'>
				<div className='col-span-2 space-y-6'>
					<a data-aos='fade-up' href='#' className='flex items-center'>
						<button className='btn__bg rounded-s-md text-6xl px-10 h-[110px] '>
							<TbWorldStar />
						</button>
						<div className='border-r border-b border-t border-[#ffffff32] h-[110px] w-full rounded-e-md px-3 flex items-center'>
							<div>
								<h3 className='text-xl font-extrabold text-white font-OutFit'>
									Our Mission
								</h3>
								<p className='text-white font-Outfit'>
									"At Express Life, our mission is to empower individuals
									globally with accessible income opportunities"
								</p>
							</div>
						</div>
					</a>

					<a data-aos='fade-up' href='#' className='flex items-center'>
						<button className='btn__bg rounded-s-md text-6xl px-10 h-[110px]'>
							<GiRetroController />
						</button>
						<div className='border-r border-b border-t border-[#ffffff32] h-[110px] w-full rounded-e-md px-3 flex items-center'>
							<div>
								<h3 className='text-xl font-extrabold text-white font-OutFit'>
									Our Vision
								</h3>
								<p className='text-white font-Outfit'>
									"Our vision is to be a global leader, known for our unwavering
									dedication to member success."
								</p>
							</div>
						</div>
					</a>

					<a data-aos='fade-up' href='#' className='flex items-center'>
						<button className='btn__bg rounded-s-md text-6xl px-10 h-[110px]'>
							<TbWorldStar />
						</button>
						<div className='border-r border-b border-t border-[#ffffff32] h-[110px] w-full rounded-e-md px-3 flex items-center'>
							<div>
								<h3 className='text-xl font-extrabold text-white font-OutFit'>
									Unveiling Dreams Across 177 Horizons
								</h3>
								<p className='text-white font-Outfit'>
									"Express Life: Unveiling Dreams Across 177 Horizons."
								</p>
							</div>
						</div>
					</a>
					<a data-aos='fade-up' href='#' className='flex items-center'>
						<button className='btn__bg rounded-s-md text-6xl px-10 h-[110px]'>
							<TbWorldStar />
						</button>
						<div className='border-r border-b border-t border-[#ffffff32] h-[110px] w-full rounded-e-md px-3 flex items-center'>
							<div>
								<h3 className='text-xl font-extrabold text-white font-OutFit'>
									Social Connections
								</h3>
								<p className='text-white font-Outfit'>
									"Networking and word-of-mouth referrals play a significant
									role in attracting members."
								</p>
							</div>
						</div>
					</a>
				</div>
				<div className='col-span-2 '>
					<p className='text-lg text-white font-OutFit'>
						Express Life is a dynamic and innovative network marketing company
						with a clear mission: to empower individuals to shape their
						financial futures. Founded on principles of transparency,
						opportunity, and community, we offer a unique platform for
						individuals seeking to unlock their potential in the digital
						economy. At Express Life, we believe that financial success should
						be accessible to everyone, and we've designed our network marketing
						program to reflect that commitment. Our program offers multiple
						avenues for income generation, including direct referrals, global
						joining income, team joining income, global monthly subscription
						earnings, and team monthly subscription earnings. We've created a
						robust ranking and incentive system that rewards your dedication and
						growth within our network. Our vision extends beyond financial
						rewards; we aim to foster a thriving community of like-minded
						individuals who support each other's journeys toward financial
						freedom. Join us today and discover a world of opportunities with
						Express Life. Your financial future is just a step away.
					</p>
					<button className='px-5 py-5 mt-4 rounded btn__bg font-OutFit '>
						Join Us Today <LuMoveRight />
					</button>
				</div>
				<div>
					<Image src={Butterfly} alt='' />
				</div>
			</div>
		</div>
	);
};

export default AboutCompoOne;
