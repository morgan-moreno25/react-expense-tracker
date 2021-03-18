import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIncome } from '../../../store/slices/income.slice';

import {
	Container,
	Button,
	Modal,
	TextField,
	FormControl,
	InputLabel,
	Input,
	Paper,
	Typography,
} from '@material-ui/core';

export default function AddIncomeModal() {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [date, setDate] = useState('');
	const [category, setCategory] = useState('');
	const [amount, setAmount] = useState(0);

	const toggle = () => setOpen(!open);

	const handleSubmit = async e => {
		e.preventDefault();

		const resultAction = await dispatch(addIncome({ date, category, amount }));
		if (addIncome.fulfilled.match(resultAction)) {
			console.log(resultAction.payload);

			setDate('');
			setCategory('');
			setAmount('');

			toggle();
		} else {
			console.log(resultAction.payload);
		}
	};

	return (
		<Container maxWidth='lg' id='income-add'>
			<Button variant='contained' onClick={toggle}>
				Add Income +
			</Button>
			<Modal open={open} onClose={toggle} id='income-add-modal'>
				<Paper component='form' elevation={10} id='income-add-form'>
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
					<div id='income-add-form-buttons'>
						<Button variant='outlined' id='income-add-submit' onClick={handleSubmit}>
							Submit
						</Button>
						<Button variant='outlined' id='income-add-cancel' onClick={toggle}>
							Cancel
						</Button>
					</div>
				</Paper>
			</Modal>
		</Container>
	);
}
