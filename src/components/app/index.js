import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllIncome } from '../../store/slices/income.slice';
import { getAllExpenses } from '../../store/slices/expense.slice';

import { Container } from '@material-ui/core';
import Nav from './Nav';
import Content from './Content';

export default function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllIncome());
		dispatch(getAllExpenses());
	}, [dispatch]);

	return (
		<Container id='content' maxWidth='xl'>
			<Nav />
			<Content />
		</Container>
	);
}
