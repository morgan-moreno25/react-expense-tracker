import React from 'react';

import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from 'react-redux';

export default function BalanceDisplay() {
	const expenses = useSelector(state => state.expense.data);
	const income = useSelector(state => state.income.data);

	const totalExpense = expenses.reduce((prev, cur) => prev + Number(cur.amount), 0);
	const totalIncome = income.reduce((prev, cur) => prev + Number(cur.amount), 0);
	const netBalance = totalIncome - totalExpense;

	const balanceClass = netBalance >= 0 ? 'gain' : 'loss';

	return (
		<Box id='balance-display'>
			<Accordion id='netBalance'>
				<AccordionSummary style={summaryStyle} expandIcon={<ExpandMoreIcon />}>
					Net Balance
				</AccordionSummary>
				<AccordionDetails className={balanceClass}>${netBalance}</AccordionDetails>
			</Accordion>
			<Accordion id='netIncome'>
				<AccordionSummary style={summaryStyle} expandIcon={<ExpandMoreIcon />}>
					Total Income
				</AccordionSummary>
				<AccordionDetails>${totalIncome}</AccordionDetails>
			</Accordion>
			<Accordion id='netExpenses'>
				<AccordionSummary style={summaryStyle} expandIcon={<ExpandMoreIcon />}>
					Total Expenses
				</AccordionSummary>
				<AccordionDetails>${totalExpense}</AccordionDetails>
			</Accordion>
		</Box>
	);
}

const summaryStyle = {
	fontWeight: 'bold',
};
