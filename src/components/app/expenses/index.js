import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../../../store/slices/expense.slice';

import {
	Container,
	Box,
	TableContainer,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Paper,
	Button,
} from '@material-ui/core';
import { DeleteForeverSharp, EditSharp } from '@material-ui/icons';

import AddExpenseModal from './AddExpenseModal';
import EditExpenseModal from './EditExpenseModal';

export default function Expense() {
	const dispatch = useDispatch();

	const expenses = useSelector(state => state.expense.data);

	const [editModalOpen, setEditModalOpen] = useState(false);
	const [editExpense, setEditExpense] = useState({});

	const toggleEditModal = () => setEditModalOpen(!editModalOpen);
	const handleDelete = async id => {
		const resultAction = await dispatch(deleteExpense({ id }));

		if (deleteExpense.fulfilled.match(resultAction)) {
			console.log(resultAction.payload);
		} else {
			console.log(resultAction.payload);
		}
	};
	const handleEditClick = expense => {
		setEditExpense(expense);
		toggleEditModal();
	};

	return (
		<Box id='expense'>
			<EditExpenseModal open={editModalOpen} toggle={toggleEditModal} expense={editExpense} />
			<AddExpenseModal />
			<Container maxWidth='lg' id='expense-filters'>
				{' '}
			</Container>
			<TableContainer component={Paper} id='expense-table-container'>
				<Table id='expense-table'>
					<TableHead className='dark-thead'>
						<TableRow>
							<TableCell>DATE</TableCell>
							<TableCell>CATEGORY</TableCell>
							<TableCell>AMOUNT</TableCell>
							<TableCell>DELETE</TableCell>
							<TableCell>EDIT</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{expenses.map(i => (
							<TableRow data-id={i.id} key={i.id}>
								<TableCell scope='row' style={cellStyle}>
									{i.date.date}
								</TableCell>
								<TableCell style={cellStyle}>{i.category}</TableCell>
								<TableCell style={cellStyle}>{i.amount}</TableCell>
								<TableCell style={cellStyle}>
									<Button onClick={() => handleDelete(i.id)}>
										<DeleteForeverSharp />
									</Button>
								</TableCell>
								<TableCell style={cellStyle}>
									<Button onClick={() => handleEditClick(i)}>
										<EditSharp />
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}

const cellStyle = {
	textAlign: 'center',
	fontWeight: 'bold',
};
