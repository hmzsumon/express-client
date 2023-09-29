import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<title>Express Life</title>
				<meta
					name='description'
					content='
					Express Life is a platform that allows you to earn money by referring people to the platform. You can earn up to $1000 per day.
				'
				/>
				<link rel='icon' href='/fev_icon.png' />
				<meta property='og:image' content='/logo_white_2.png' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
