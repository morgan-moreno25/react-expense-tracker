import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateExpense } from '../../../store/slices/expense.slice';

import {
	Button,
	Modal,
	TextField,
	FormControl,
	InputLabel,
	Input,
	Paper,
	Typography,
} from '@material-ui/core';

export default function EditExpenseModal({ open, toggle, expense }) {
	const dispatch = useDispatch();

	const [date, setDate] = useState('');
	const [category, setCategory] = useState('');
	const [amount, setAmount] = useState('');

	useEffect(() => {
		setDate(expense.date ? expense.date.date : '');
		setCategory(expense.category ? expense.category : '');
		setAmount(expense.amount ? expense.amount : '');
	}, [expense]);

	const handleSubmit = async e => {
		e.preventDefault();

		const expenseDetails = { date, category, amount };

		const resultAction = await dispatch(
			updateExpense({ id: expense.id, expense: expenseDetails })
		);
		if (updateExpense.fulfilled.match(resultAction)) {
			console.log(resultAction.payload);

			handleClose();
		} else {
			console.log(resultAction.payload);
		}
	};

	const handleClose = () => {
		setDate('');
		setCategory('');
		setAmount('');

		toggle();
	};

	return (
		<Modal open={open} onClose={handleClose} id='expense-edit-modal'>
			<Paper component='form' elevation={10} id='expense-edit-form'>
				<Typography variant='h3'>Enter Expense Details</Typography>
				<TextField
					id='date'
					name='date'
					type='date'
					value={date}
					onChange={e => setDate(e.target.value)}
				/>
				<FormControl>
					<InputLabel htmlFor='category'>Category</InputLabel>
					<Input
						type='text'
						id='category'
						name='category'
						value={category}
						onChange={e => setCategory(e.target.value)}
					/>
				</FormControl>
				<FormControl>
					<InputLabel htmlFor='amount'>Amount</InputLabel>
					<Input
						type='number'
						id='amount'
						name='amount'
						value={amount}
						onChange={e => setAmount(Number(e.target.value))}
					/>
				</FormControl>
				<div id='expense-edit-form-buttons'>
					<Button variant='outlined' id='expense-edit-submit' onClick={handleSubmit}>
						Submit
					</Button>
					<Button variant='outlined' id='expense-edit-cancel' onClick={handleClose}>
						Cancel
					</Button>
				</div>
			</Paper>
		</Modal>
	);
}
