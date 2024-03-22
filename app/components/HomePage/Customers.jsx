'use client';
/* eslint-disable react/no-unescaped-entities */
import ReviewIcon from '@/public/assets/reviewIcon.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { FaQuoteRight } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Client1 from '@/public/assets/client1.png';
import Client2 from '@/public/assets/client2.png';
import Client3 from '@/public/assets/client3.png';
import Client4 from '@/public/assets/client4.png';
import Client5 from '@/public/assets/client5.png';
import Client6 from '@/public/assets/client6.png';
import Client7 from '@/public/assets/client7.png';
import Client8 from '@/public/assets/client8.png';
import Client9 from '@/public/assets/client9.png';
import Client10 from '@/public/assets/client10.png';
import Client11 from '@/public/assets/client11.png';
import Image from 'next/image';

const Customers = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className='container py-32 mx-auto text-center text-white font-OutFit'>
			<Image className='w-16 mx-auto mb-10' src={ReviewIcon} alt='' />
			<h2 data-aos='flip-up' className='mb-2 text-3xl font-bold font-OutFit'>
				What Are Our Customers Saying ?
			</h2>
			<p data-aos='flip-up' className='text-center'>
				Opinions from our happy customers.
			</p>
			<Swiper
				data-aos='fade-up'
				className='grid grid-cols-4 mt-10 text-white font-OutFit'
				modules={[Autoplay]}
				autoplay={{ delay: 2500 }}
				spaceBetween={30}
				slidesPerView={4}
				grabCursor={true}
				loop={true}
				// onSlideChange={() => console.log('slide change')}
				// onSwiper={(swiper) => console.log(swiper)}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					480: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
				}}
			>
				<SwiperSlide>
					<div className='btn__bg flex-none p-10 w-full h-[350px] relative rounded'>
						<div>
							<p className='relative z-20'>
								"Express Life transformed my financial journey! The earning
								opportunities are diverse and rewarding. Joining was a
								game-changer!"{' '}
							</p>
							<p className='text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]'>
								<FaQuoteRight />
							</p>

							{/* <Image className='w-20 h-20 mx-auto my-7' src={Client1} alt='' /> */}
							<h5>Carlos Rodriguez</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='btn__bg flex-none p-10 w-full h-[350px] relative rounded'>
						<div>
							<p className='relative z-20'>
								"Incredible support! The team at Express Life is responsive and
								helpful. I feel valued as a member of this empowering
								community."{' '}
							</p>
							<p className='text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]'>
								<FaQuoteRight />
							</p>

							{/* <Image className='w-20 mx-auto my-7' src={Client2} alt='' /> */}
							<h5>Hiroshi Tanaka</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='btn__bg flex-none p-10 w-full h-[350px] relative rounded'>
						<div>
							<p className='relative z-20'>
								"Express Life's innovative platform allowed me to achieve
								financial independence. The daily cash back is a fantastic
								bonus!"{' '}
							</p>
							<p className='text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]'>
								<FaQuoteRight />
							</p>

							{/* <Image className='w-20 mx-auto my-7' src={Client11} alt='' /> */}
							<h5>Ahmed Salah</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='btn__bg flex-none p-10 w-full h-[350px] relative rounded'>
						<div>
							<p className='relative z-20'>
								"The rank and incentive system keeps me motivated. Achieving
								milestones not only brings recognition but tangible rewards.
								Love it!"{' '}
							</p>
							<p className='text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]'>
								<FaQuoteRight />
							</p>

							{/* <Image className='w-20 mx-auto my-7' src={Client6} alt='' /> */}
							<h5>Matthias Müller</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='btn__bg flex-none p-10 w-full h-[350px] relative rounded'>
						<div>
							<p className='relative z-20'>
								"Flexibility is key! Working from home with Express Life gives
								me the freedom to balance work and family. Truly life-changing."{' '}
							</p>
							<p className='text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]'>
								<FaQuoteRight />
							</p>

							{/* <Image className='w-20 mx-auto my-7' src={Client7} alt='' /> */}
							<h5>Nikhil Kapoor</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='btn__bg flex-none p-10 w-full h-[350px] relative rounded'>
						<div>
							<p className='relative z-20'>
								"Joining was affordable, and the low entry cost opened doors for
								me. Express Life truly caters to individuals with limited
								capital."{' '}
							</p>
							<p className='text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]'>
								<FaQuoteRight />
							</p>

							{/* <Image className='w-20 mx-auto my-7' src={Client8} alt='' /> */}
							<h5>Isabella Rossi</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='btn__bg flex-none p-10 w-full h-[350px] relative rounded'>
						<div>
							<p className='relative z-20'>
								"The global joining earning structure is impressive! Watching my
								network grow has been both exciting and financially rewarding."{' '}
							</p>
							<p className='text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]'>
								<FaQuoteRight />
							</p>

							{/* <Image className='w-20 mx-auto my-7' src={Client3} alt='' /> */}
							<h5>Lila Chen</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='btn__bg flex-none p-10 w-full h-[350px] relative rounded'>
						<div>
							<p className='relative z-20'>
								"Express Life is not just a platform; it's a community. The
								social connections and word-of-mouth referrals create a
								supportive network."{' '}
							</p>
							<p className='text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]'>
								<FaQuoteRight />
							</p>

							{/* <Image className='w-20 mx-auto my-7' src={Client4} alt='' /> */}
							<h5>Elena Kovač</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='btn__bg flex-none p-10 w-full h-[350px] relative rounded'>
						<div>
							<p className='relative z-20'>
								"Monthly subscription earnings add a steady stream to my income.
								Express Life ensures a continuous flow of financial
								opportunities."{' '}
							</p>
							<p className='text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]'>
								<FaQuoteRight />
							</p>

							{/* <Image className='w-20 mx-auto my-7' src={Client9} alt='' /> */}
							<h5>Mariana Silva</h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='btn__bg flex-none p-10 w-full h-[350px] relative rounded'>
						<div>
							<p className='relative z-20'>
								"Withdrawals are hassle-free, and the 10% P2P transaction fee is
								reasonable. Express Life values its members' time and
								resources."{' '}
							</p>
							<p className='text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]'>
								<FaQuoteRight />
							</p>

							{/* <Image className='w-20 mx-auto my-7' src={Client10} alt='' /> */}
							<h5>Aisha Al-Farsi</h5>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Customers;
