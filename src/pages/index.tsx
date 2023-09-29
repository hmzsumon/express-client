import Image from 'next/image';
import Hero from '@components/Home/Hero';

import CoinsTable from '@components/Home/CoinsTable';
import CryptoContext from '@CryptoContext';
import Explore from '@components/Home/Explore';
import CryptoProfile from '@components/Home/CryptoProfile';
import Trusted from '@components/Home/Trusted';
import Help from '@components/Home/Help';
import StartEaring from '@components/Home/StartEaring';
import { Layout } from '@/components/layout';
import SimpleSlider from '@/components/Home/Carousel';

export default function Home() {
	return (
		<>
			<Layout>
				<main>
					<Hero />
					<SimpleSlider />
					{/* <CryptoContext>
						<CoinsTable />
					</CryptoContext> */}
					<CryptoProfile />
					{/* <Explore /> */}
					{/* <Trusted /> */}
					<Help />
					<StartEaring />
				</main>
			</Layout>
		</>
	);
}
