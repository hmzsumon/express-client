/* eslint-disable react/no-unescaped-entities */
import { LuMoveRight } from 'react-icons/lu';
import worldImg from '@/public/assets/world.png';
import BannerImg from '@/public/assets/Express Life uk new logo file 01 1.png';
import Image from 'next/image';
import Link from 'next/link';
const Banner = () => {
	return (
		<div className='flex items-center w-full py-24 overflow-x-hidden md:py-32 '>
			<div className='container mx-auto'>
				<Image
					className=' hidden md:block absolute md:top-20 w-[300px] lg:w-[270px] md:w-[100px] 2xl:w-auto left-0 top-0 md:left-10 lg:left-0 2xl:left-[80px] worth rotate__animate'
					src={worldImg}
					alt=''
				/>

				<div className='grid items-center banner__info sm:flex-row-reverse md:grid-cols-2'>
					<div className='mt-0 p-sm md:mt-28 2xl:mt-56'>
						<h1 className='mb-3 space-y-2 text-2xl font-semibold text-white font-OutFit'>
							EXPRESS LIFE <br /> RELIABLE MINING PLATFORM
						</h1>
						<p className='text-white font-OutFit'>
							"Express Life: Unveiling Dreams Across 177 Horizons <br /> Our
							Global Network of Your Journey, Your Success, Your Win!"{' '}
						</p>
						<Link href='/sign-up'>
							<button className='px-4 py-4 mt-4 rounded btn__bg font-OutFit '>
								Join Us Immediately <LuMoveRight />
							</button>
						</Link>
					</div>
					<div className=''>
						<Image
							className=' mx-auto flip__animate object-cover w-auto md:w-[80%] 2xl:w-auto'
							src={BannerImg}
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
