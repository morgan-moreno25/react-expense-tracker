import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Box } from '@material-ui/core';
import Dashboard from './Dashboard';
import IncomeTable from './IncomeTable';
import ExpenseTable from './ExpenseTable';

export default function Ledger() {
	return (
		<Switch>
			<Route path='/app'>
				<Dashboard />
			</Route>
			<Route path='/app/income'>
				<IncomeTable />
			</Route>
			<Route path='/app/expenses'>
				<ExpenseTable />
			</Route>
		</Switch>
	);
}
