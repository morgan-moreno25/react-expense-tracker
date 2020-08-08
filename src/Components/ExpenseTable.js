import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class ExpenseTable extends React.Component {
  
    render(){
        return (
            <TableContainer component={Paper} id="expense-table-container">
                <Table id="expense-table">
                    <TableHead className="dark-thead">
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>CATEGORY</TableCell>
                            <TableCell>AMOUNT</TableCell>
                            <TableCell>DELETE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.expense.map(expense => (
                            <TableRow data-id={expense._id} key={expense.id}>
                                <TableCell scope="row" style={cellStyle}>{ expense.id }</TableCell>
                                <TableCell style={cellStyle}>{ expense.category }</TableCell>
                                <TableCell style={cellStyle}>{ expense.amount }</TableCell>
                                <TableCell style={cellStyle}><Button onClick={this.props.delete}><DeleteForeverIcon></DeleteForeverIcon></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    };
};

const cellStyle = {
    fontWeight: 'bold',
    textAlign: 'center',
};



export default ExpenseTable;

