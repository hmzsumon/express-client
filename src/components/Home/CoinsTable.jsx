'use client';
import React, { useEffect, useState } from 'react';
import {
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
	Typography,
	TextField,
	LinearProgress,
	Pagination,
} from '@mui/material';
import axios from 'axios';
import { CoinList } from '../../config/api';

import { CryptoState } from '../../CryptoContext';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';

export function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const CoinsTable = () => {
	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);

	const { currency, symbol } = CryptoState();
	const theme = createTheme({
		palette: {
			mode: 'dark',
		},
	});

	const fetchCoins = async () => {
		setLoading(true);
		const { data } = await axios.get(CoinList(currency));

		setCoins(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchCoins();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currency]);

	const handleSearch = () => {
		return coins.filter(
			(coin) =>
				coin.name.toLowerCase().includes(search) ||
				coin.symbol.toLowerCase().includes(search)
		);
	};

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container sx={{ mt: 4, textAlign: 'center' }}>
					<Typography variant='h4' component='h1' sx={{ mb: 4 }}>
						Cryptocurrency Prices by Market Cap
					</Typography>

					<TextField
						label='Search For a Crypto Currency..'
						variant='outlined'
						style={{ marginBottom: 20, width: '100%' }}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<TableContainer component={Paper}>
						{loading ? (
							<LinearProgress style={{ backgroundColor: 'gold' }} />
						) : (
							<Table sx={{ minWidth: 650 }} aria-label='simple table'>
								<TableHead style={{ backgroundColor: '#EEBC1D' }}>
									<TableRow>
										{['Coin', 'Price', '24h Change', 'Market Cap'].map(
											(head) => (
												<TableCell
													style={{
														color: 'black',
														fontWeight: '700',
														fontFamily: 'Montserrat',
													}}
													key={head}
													align={head === 'Coin' ? '' : 'right'}
												>
													{head}
												</TableCell>
											)
										)}
									</TableRow>
								</TableHead>
								<TableBody>
									{handleSearch()
										.slice((page - 1) * 10, (page - 1) * 10 + 10)
										.map((row) => {
											const profit = row.price_change_percentage_24h > 0;
											return (
												<TableRow
													onClick={() => navigate(`/coins/${row.id}`)}
													sx={{
														backgroundColor: '#16171a',
														cursor: 'pointer',
														'&:hover': {
															backgroundColor: '#131111',
														},
														fontFamily: 'Montserrat',
													}}
													key={row.name}
												>
													<TableCell
														component='th'
														scope='row'
														style={{
															display: 'flex',
															gap: 15,
														}}
													>
														<img
															src={row?.image}
															alt={row.name}
															className='mb-4 w-14'
														/>
														<div
															style={{
																display: 'flex',
																flexDirection: 'column',
															}}
														>
															<span
																style={{
																	textTransform: 'uppercase',
																	fontSize: 22,
																}}
															>
																{row.symbol}
															</span>
															<span style={{ color: 'darkgrey' }}>
																{row.name}
															</span>
														</div>
													</TableCell>
													<TableCell align='right'>
														{symbol}{' '}
														{numberWithCommas(row.current_price.toFixed(2))}
													</TableCell>
													<TableCell
														align='right'
														style={{
															color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
															fontWeight: 500,
														}}
													>
														{profit && '+'}
														{row.price_change_percentage_24h.toFixed(2)}%
													</TableCell>
													<TableCell align='right'>
														{symbol}{' '}
														{numberWithCommas(
															row.market_cap.toString().slice(0, -6)
														)}
														M
													</TableCell>
												</TableRow>
											);
										})}
								</TableBody>
							</Table>
						)}
					</TableContainer>
					{/* Comes from @material-ui/lab */}
					<Pagination
						count={(handleSearch()?.length / 10).toFixed(0)}
						style={{
							padding: 20,
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
						}}
						sx={{
							'& .MuiPaginationItem-root': {
								color: 'gold',
							},
						}}
						onChange={(_, value) => {
							setPage(value);
							window.scroll(0, 450);
						}}
					/>
				</Container>
			</ThemeProvider>
		</div>
	);
};

export default CoinsTable;
