import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateIncome } from '../../../store/slices/income.slice';

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

export default function EditIncomeModal({ open, toggle, income }) {
	const dispatch = useDispatch();

	const [date, setDate] = useState('');
	const [category, setCategory] = useState('');
	const [amount, setAmount] = useState('');

	useEffect(() => {
		setDate(income.date ? income.date.date : '');
		setCategory(income.category ? income.category : '');
		setAmount(income.amount ? income.amount : '');
	}, [income]);

	const handleSubmit = async e => {
		e.preventDefault();

		const incomeDetails = { date, category, amount };

		const resultAction = await dispatch(updateIncome({ id: income.id, income: incomeDetails }));
		if (updateIncome.fulfilled.match(resultAction)) {
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
		<Modal open={open} onClose={handleClose} id='income-edit-modal'>
			<Paper component='form' elevation={10} id='income-edit-form'>
				<Typography variant='h3'>Enter Income Details</Typography>
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
				<div id='income-edit-form-buttons'>
					<Button variant='outlined' id='income-edit-submit' onClick={handleSubmit}>
						Submit
					</Button>
					<Button variant='outlined' id='income-edit-cancel' onClick={handleClose}>
						Cancel
					</Button>
				</div>
			</Paper>
		</Modal>
	);
}
