'use client';
import { LuMoveRight } from 'react-icons/lu';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { TbFreeRights } from 'react-icons/tb';
import { MdWorkspacePremium } from 'react-icons/md';
import { BsRocketTakeoff } from 'react-icons/bs';
import { RiExchangeDollarFill } from 'react-icons/ri';
import weelImg from '@/public/assets/weel.png';
import Image from 'next/image';
import Link from 'next/link';

const NftPackages = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className='container relative py-32 mx-auto text-white'>
			<h2
				data-aos='flip-up'
				className='py-2 text-3xl font-bold text-center font-OutFit p-sm'
			>
				Check Out The Most Creative Packages
			</h2>
			<p data-aos='flip-up' className='text-center p-sm'>
				Metaverse is a marketplace dedicated to the digital world.
			</p>
			<Image
				data-aos='zoom-in-up'
				className='rotate__animate absolute top-0 right-0 left-0 md:left-[30%]'
				src={weelImg}
				alt=''
			/>
			<div className='relative grid grid-cols-1 gap-5 px-5 mt-10 md:grid-cols-2 lg:grid-cols-4 md:px-0'>
				<div className='pb-10 overflow-hidden nft__card'>
					<div className='h-full text-center rounded-t bg-slate-900'>
						<div className='p-3 text-center rounded-t bg-primary'>
							<span className='text-8xl w-[fit-content] mx-auto block py-5'>
								<TbFreeRights />
							</span>
							<h2 className='mb-3 text-3xl font-bold uppercase font-OutFit'>
								Free
							</h2>
						</div>
						<h2 className='mt-5 mb-3 text-4xl font-bold font-OutFit'>$0</h2>
						<p className='text-[12px] mb-3 font-semibold uppercase'>
							ONLY SIGNUP
						</p>
						<ul className='px-3 space-y-2 text-left uppercase list-disc list-inside '>
							<li>UNLOCK MINING</li>
							<li>24/7 EMAIL SUPPORT</li>
						</ul>
					</div>
					<div className='custom__bg__color relative top-[1px] rounded pt-10 nft_hover'>
						<Link href='/sign-up'>
							<button className='px-6 py-5 mx-auto rounded btn__bg'>
								Sign Up <LuMoveRight />
							</button>
						</Link>
					</div>
				</div>

				<div className='pb-10 overflow-hidden nft__card'>
					<div className='h-full text-center rounded-t bg-slate-900'>
						<div className='p-3 text-center rounded-t bg-warning'>
							<span className='text-8xl w-[fit-content] mx-auto block py-5'>
								<RiExchangeDollarFill />
							</span>
							<h2 className='mb-3 text-3xl font-bold uppercase font-OutFit'>
								Basic
							</h2>
						</div>
						<h2 className='mt-5 mb-3 text-4xl font-bold font-OutFit'>$12</h2>
						<p className='text-[12px] mb-3 font-semibold uppercase'>
							ONLY REGISTRATION
						</p>
						<ul className='px-3 space-y-2 text-left uppercase list-disc list-inside '>
							<li>1 MONTH REGISTRATION</li>
							<li>UNLOCK MINING</li>
							<li>100 ELC TOKEN FREE</li>
							<li>ALL EARNING UNLOCK</li>
							<li>24/7 EMAIL SUPPORT</li>
						</ul>
					</div>
					<div className='custom__bg__color relative top-[1px] rounded pt-10 nft_hover'>
						<Link href='/sign-up'>
							<button className='px-6 py-5 mx-auto rounded btn__bg'>
								Sign Up <LuMoveRight />
							</button>
						</Link>
					</div>
				</div>

				<div className='pb-10 overflow-hidden nft__card '>
					<div className='h-full text-center rounded-t bg-slate-900'>
						<div className='p-3 text-center rounded-t bg-accent'>
							<span className='text-8xl w-[fit-content] mx-auto block py-5'>
								<BsRocketTakeoff />
							</span>
							<h2 className='mb-3 text-3xl font-bold uppercase font-OutFit'>
								BUSINESS
							</h2>
						</div>
						<h2 className='mt-5 mb-3 text-4xl font-bold font-OutFit'>$42</h2>
						<p className='text-[12px] mb-3 font-semibold uppercase'>
							REGISTRATION & 6 MONTH SUBSCRIPTION
						</p>
						<ul className='px-3 space-y-2 text-left uppercase list-disc list-inside '>
							<li>7 MONTH SUBSCRIPTION</li>
							<li>UNLOCK MINING</li>
							<li>650 ELC TOKEN FREE</li>
							<li>ALL EARNING UNLOCK</li>
							<li>DAILY CASH BACK ($0.02 PER DAY)</li>
							<li>24/7 EMAIL SUPPORT</li>
						</ul>
					</div>
					<div className='custom__bg__color relative top-[1px] rounded pt-10 nft_hover'>
						<Link href='/sign-up'>
							<button className='px-6 py-5 mx-auto rounded btn__bg'>
								Sign Up <LuMoveRight />
							</button>
						</Link>
					</div>
				</div>

				<div className='pb-10 overflow-hidden nft__card'>
					<div className='h-full text-center rounded-t bg-slate-900'>
						<div className='p-3 text-center rounded-t bg-info'>
							<span className='text-8xl w-[fit-content] mx-auto block py-5'>
								<MdWorkspacePremium />
							</span>
							<h2 className='mb-3 text-3xl font-bold uppercase font-OutFit'>
								PREMIUM
							</h2>
						</div>
						<h2 className='mt-5 mb-3 text-4xl font-bold font-OutFit'>$72</h2>
						<p className='text-[12px] mb-3 font-semibold uppercase'>
							REGISTRATION & 12 MONTH SUBSCRIPTION
						</p>
						<ul className='px-3 space-y-2 text-left uppercase list-disc list-inside '>
							<li>13 MONTH SUBSCRIPTION</li>
							<li>UNLOCK MINING</li>
							<li>1250 ELC TOKEN FREE</li>
							<li>ALL EARNING UNLOCK</li>
							<li>DAILY CASH BACK ($0.05 PER DAY)</li>
							<li>24/7 EMAIL SUPPORT</li>
						</ul>
					</div>
					<div className='custom__bg__color relative top-[1px] rounded pt-10 nft_hover'>
						<Link href='/sign-up'>
							<button className='px-6 py-5 mx-auto rounded btn__bg'>
								Sign Up <LuMoveRight />
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NftPackages;
