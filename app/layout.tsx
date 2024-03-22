import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from './StoreProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Express Life',
	description:
		'"Welcome to Express Life – Your Gateway to Global Success! Empowering individuals worldwide with accessible income opportunities, our innovative network marketing platform offers diverse income streams, low entry costs, and transparent reward systems. Join us on a journey where financial growth, entrepreneurship, and community converge. Unveil your dreams across 177 horizons with Express Life – Where Your Success Finds its Wings!"',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className} suppressHydrationWarning={true}>
				<StoreProvider>{children}</StoreProvider>
				<ToastContainer />
			</body>
		</html>
	);
}
