import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import Form from './Form';

export default function Nav() {
	const [formType, setFormType] = useState('');

	const toggleForm = e => {
		if (
			e.target.parentElement.id === 'show-income-form' ||
			e.target.id === 'show-income-form'
		) {
			setFormType('income');
		}
		if (
			e.target.parentElement.id === 'show-expense-form' ||
			e.target.id === 'show-expense-form'
		) {
			setFormType('expense');
		}
	};

	return (
		<Container id='nav'>
			<nav>
				<section id='form-controls'>
					<ButtonGroup
						variant='contained'
						color='inherit'
						aria-label='text primary button group'
					>
						<Button id='show-income-form' onClick={toggleForm}>
							Income
						</Button>
						<Button id='show-expense-form' onClick={toggleForm}>
							Expense
						</Button>
					</ButtonGroup>
				</section>
				<section id='form-section'>
					<Paper elevation={3} variant='outlined' square id='form-container'>
						<Form formType={formType} />
					</Paper>
				</section>
			</nav>
		</Container>
	);
}
