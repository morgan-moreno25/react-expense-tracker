import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteIncome } from '../../../store/slices/income.slice';

import { DeleteForeverSharp, EditSharp } from '@material-ui/icons';
import {
	Box,
	Container,
	TableContainer,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Paper,
	Button,
} from '@material-ui/core';
import AddIncomeModal from './AddIncomeModal';
import EditIncomeModal from './EditIncomeModal';

export default function Income() {
	const dispatch = useDispatch();

	const income = useSelector(state => state.income.data);

	const [editModalOpen, setEditModalOpen] = useState(false);
	const [editIncome, setEditIncome] = useState({});

	const toggleEditModal = () => setEditModalOpen(!editModalOpen);
	const handleDelete = async id => {
		const resultAction = await dispatch(deleteIncome({ id }));

		if (deleteIncome.fulfilled.match(resultAction)) {
			console.log(resultAction.payload);
		} else {
			console.log(resultAction.payload);
		}
	};
	const handleEditClick = income => {
		setEditIncome(income);
		toggleEditModal();
	};

	return (
		<Box id='income'>
			<EditIncomeModal open={editModalOpen} toggle={toggleEditModal} income={editIncome} />
			<AddIncomeModal />
			<Container maxWidth='lg' id='income-filters'>
				{' '}
			</Container>
			<TableContainer component={Paper} id='income-table-container'>
				<Table id='income-table'>
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
						{income.map(i => (
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
