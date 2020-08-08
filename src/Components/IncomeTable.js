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

class IncomeTable extends React.Component  {

    

    render(){
        return (
            <TableContainer component={Paper} id="income-table-container">
                <Table id="income-table">
                    <TableHead className="dark-thead">
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>CATEGORY</TableCell>
                            <TableCell>AMOUNT</TableCell>
                            <TableCell>DELETE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.income.map(income => (
                            <TableRow data-id={income._id} key={income.id}>
                                <TableCell scope="row" style={cellStyle}>{ income.id }</TableCell>
                                <TableCell style={cellStyle}>{ income.category }</TableCell>
                                <TableCell style={cellStyle}>{ income.amount }</TableCell>
                                <TableCell style={cellStyle}><Button onClick={this.props.delete}><DeleteForeverIcon></DeleteForeverIcon></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
    
};
const cellStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
};

export default IncomeTable;