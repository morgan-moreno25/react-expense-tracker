import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteIncome } from '../../store/slices/income.slice';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function IncomeTable() {
	const dispatch = useDispatch();

	const income = useSelector(state => state.income.data);

	const handleDelete = async id => {
		const resultAction = await dispatch(deleteIncome({ id }));

		if (deleteIncome.fulfilled.match(resultAction)) {
			console.log(resultAction.payload);
		} else {
			console.log(resultAction.payload);
		}
	};

	return (
		<TableContainer component={Paper} id='income-table-container'>
			<Table id='income-table'>
				<TableHead className='dark-thead'>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>CATEGORY</TableCell>
						<TableCell>AMOUNT</TableCell>
						<TableCell>DELETE</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{income.map(i => (
						<TableRow data-id={i.id} key={i.id}>
							<TableCell scope='row' style={cellStyle}>
								{i.id}
							</TableCell>
							<TableCell style={cellStyle}>{i.category}</TableCell>
							<TableCell style={cellStyle}>{i.amount}</TableCell>
							<TableCell style={cellStyle}>
								<Button onClick={() => handleDelete(i.id)}>
									<DeleteForeverIcon></DeleteForeverIcon>
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

const cellStyle = {
	textAlign: 'center',
	fontWeight: 'bold',
};
