import React from 'react';
import { Box } from '@material-ui/core';
import BalanceDisplay from './BalanceDisplay';
import IncomeTable from './IncomeTable';
import ExpenseTable from './ExpenseTable';

export default function Ledger() {
	return (
		<Box id='ledger'>
			<BalanceDisplay />
			<IncomeTable />
			<ExpenseTable />
		</Box>
	);
}
