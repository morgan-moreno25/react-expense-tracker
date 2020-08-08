import React from 'react';

import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class BalanceDisplay extends React.Component {

    netBalance = () => {
        let net = this.totalIncome() - this.totalExpense();
        return net;
    };
    totalIncome = () => {
        let total = this.props.income.reduce((prev, cur) => prev + Number(cur.amount), 0);
        return total;
    };
    totalExpense = () => {
        let total = this.props.expense.reduce((prev, cur) => prev + Number(cur.amount), 0);
        return total;
    };

    render(){
        let net = this.netBalance();
        let income = this.totalIncome();
        let expense = this.totalExpense();

        let balanceClass = net >= 0 ? "gain" : "loss";
        return (
            <Box id="balance-display">
                <Accordion id="netBalance">
                    <AccordionSummary style={summaryStyle} expandIcon={<ExpandMoreIcon />}>Net Balance</AccordionSummary>
                    <AccordionDetails className={balanceClass}>${ net }</AccordionDetails>
                </Accordion>
                <Accordion id="netIncome">
                    <AccordionSummary style={ summaryStyle } expandIcon={<ExpandMoreIcon />}>Total Income</AccordionSummary>
                    <AccordionDetails>${ income }</AccordionDetails>
                </Accordion>
                <Accordion id="netExpenses">
                    <AccordionSummary style={ summaryStyle } expandIcon={<ExpandMoreIcon />}>Total Expenses</AccordionSummary>
                    <AccordionDetails>${ expense }</AccordionDetails>
                </Accordion>
            </Box>
        )
    }
};

const summaryStyle = {
    fontWeight: 'bold',
};


export default BalanceDisplay;
