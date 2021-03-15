import React from 'react';
import { useSelector } from 'react-redux';
import stringifyBalance from '../../utils/stringifyBalance';

import { Box, Card, Container, Typography, CardContent, Paper } from '@material-ui/core';
import { AreaChart } from 'recharts';

export default function Dashboard() {
	const expenses = useSelector(state => state.expense.data);
	const income = useSelector(state => state.income.data);

	const totalExpense = expenses.reduce((prev, cur) => prev + Number(cur.amount), 0);
	const totalIncome = income.reduce((prev, cur) => prev + Number(cur.amount), 0);
	const netBalance = totalIncome - totalExpense;
	const title = netBalance >= 0 ? 'Net Income' : 'Net Loss';
	const balanceClass = netBalance >= 0 ? 'gain' : 'loss';

	return (
		<Box id='dashboard'>
			<Container id='dashboard-balances'>
				<Card component={Paper} elevation={10} variant='outlined'>
					<CardContent>
						<Typography variant='h4'>{title}</Typography>
						<Typography variant='h4' className={balanceClass}>
							${netBalance}
						</Typography>
					</CardContent>
				</Card>
				<Card component={Paper} elevation={10} variant='outlined'>
					<CardContent>
						<Typography variant='h4'>Total Income</Typography>
						<Typography variant='h4'>${totalIncome}</Typography>
					</CardContent>
				</Card>
				<Card component={Paper} elevantion={10} variant='outlined'>
					<CardContent>
						<Typography variant='h4'>Total Expenses</Typography>
						<Typography variant='h4'>${totalExpense}</Typography>
					</CardContent>
				</Card>
			</Container>
			<Container id='dashboard-charts'>
				<p>Charts go here</p>
			</Container>
		</Box>
	);
}

const summaryStyle = {
	fontWeight: 'bold',
};
