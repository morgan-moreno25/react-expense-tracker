import React from 'react';
import { Box } from '@material-ui/core';
import BalanceDisplay from './BalanceDisplay';
import IncomeTable from './IncomeTable';
import ExpenseTable from './ExpenseTable';

class Ledger extends React.Component {


    deleteIncome = (e) => {
        let id = e.target.closest('tr').dataset.id;
        this.props.deleteIncome(id);
    }
    deleteExpense = (e) => {
        let id = e.target.closest('tr').dataset.id;
        this.props.deleteExpense(id);
    }

    render(){

        return (
            <Box id="ledger">
                <BalanceDisplay income={this.props.income} expense={this.props.expense}/>
                <IncomeTable income={this.props.income} delete={this.deleteIncome}/>
                <ExpenseTable expense={this.props.expense} delete={this.deleteExpense}/>
            </Box>
        )
    }
};

export default Ledger;