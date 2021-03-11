import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../store/slices/expense.slice';
import { addIncome } from '../../store/slices/income.slice';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default function Form({ formType }) {
	const dispatch = useDispatch();

	const [category, setCategory] = useState('');
	const [amount, setAmount] = useState('');

	const handleIncomeSubmit = async e => {
		const resultAction = await dispatch(addIncome({ category, amount }));

		if (addIncome.fulfilled.match(resultAction)) {
			console.log(resultAction.payload);
		} else {
			console.log(resultAction.payload);
		}
	};
	const handleExpenseSubmit = async e => {
		const resultAction = await dispatch(addExpense({ category, amount }));

		if (addExpense.fulfilled.match(resultAction)) {
			console.log(resultAction.payload);
		} else {
			console.log(resultAction.payload);
		}
	};

	if (formType === 'income') {
		return (
			<form id='income-form'>
				<h3>Income</h3>
				<div className='form-group'>
					<InputLabel htmlFor='category'>Category:</InputLabel>
					<Input
						type='text'
						onChange={e => setCategory(e.target.value)}
						name='category'
						id='category'
					/>
				</div>
				<div className='form-group'>
					<InputLabel htmlFor='amount'>Amount:</InputLabel>
					<Input
						type='number'
						onChange={e => setAmount(Number(e.target.value))}
						name='amount'
						id='amount'
					/>
				</div>
				<Button onClick={handleIncomeSubmit} id='submit-btn'>
					Add Income
				</Button>
			</form>
		);
	}

	if (formType === 'expense') {
		return (
			<form id='expense-form'>
				<h3>Expense</h3>
				<div className='form-group'>
					<InputLabel htmlFor='category'>Category:</InputLabel>
					<Input
						name='category'
						id='category'
						onChange={e => setCategory(e.target.value)}
						type='text'
						required
					/>
				</div>
				<div className='form-group'>
					<InputLabel htmlFor='amount'>Amount:</InputLabel>
					<Input
						name='amount'
						id='amount'
						onChange={e => setAmount(Number(e.target.value))}
						type='number'
						required
					/>
				</div>
				<Button onClick={handleExpenseSubmit} id='submit-btn'>
					Add Expense
				</Button>
			</form>
		);
	}

	return <p>Select a form above.</p>;
}
