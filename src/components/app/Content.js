import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Income from './income';
import ExpenseTable from './ExpenseTable';

export default function Content() {
	return (
		<Switch>
			<Route path='/app' exact>
				<Dashboard />
			</Route>
			<Route path='/app/income'>
				<Income />
			</Route>
			<Route path='/app/expenses'>
				<ExpenseTable />
			</Route>
		</Switch>
	);
}
