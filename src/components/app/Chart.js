import React from 'react';

import { useSelector } from 'react-redux';
import { useExpensesByMonth } from '../../store/slices/expense.slice';
import { useIncomeByMonth } from '../../store/slices/income.slice';

import { Card, Container } from '@material-ui/core';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function combineDataByMonth(expenses, income) {
	const data = [];

	for (let i = 0; i < 12; i++) {
		data.push({
			month: i + 1,
			expenses: expenses[i] ? expenses[i].amount : 0,
			income: income[i] ? income[i].amount : 0,
		});
	}

	return data;
}

export default function Charts() {
	const expensesByMonth = useExpensesByMonth();
	const incomeByMonth = useIncomeByMonth();

	let data = combineDataByMonth(expensesByMonth, incomeByMonth);

	return (
		<Container id='dashboard-charts'>
			<Card elevation={10} id='by-month'>
				<h2>Expenses vs Income by Month</h2>
				<LineChart
					width={1000}
					height={400}
					data={data}
					margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
				>
					<Line
						type='monotoneY'
						dataKey='expenses'
						stroke='#ff1744'
						activeDot={true}
						strokeWidth={5}
					/>
					<Line
						type='monotoneX'
						dataKey='income'
						stroke='#00c853'
						activeDot={true}
						strokeWidth={5}
					/>
					<CartesianGrid stroke='#ccc' vertical={false} />
					<XAxis dataKey='month' stroke='#fff' />
					<YAxis stroke='#fff' />
					<Tooltip />
					<Legend verticalAlign='top' height={36} />
				</LineChart>
			</Card>
		</Container>
	);
}
