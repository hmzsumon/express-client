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
import TawkTo3 from '@/global/TawkTo3';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

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
				{/* <TawkTo3 /> */}
				<TawkMessengerReact
					propertyId='653d41cef2439e1631e96f93'
					widgetId='1hdrki4c6'
				/>
			</Layout>
		</>
	);
}
