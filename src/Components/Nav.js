import React from 'react';

import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { IncomeForm, ExpenseForm } from './Forms';



class Nav extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            form: '',
            category: '',
            amount: 0,
        }
    };
    toggleForm = (e) => {
        if(e.target.parentElement.id === 'show-income-form' || e.target.id === 'show-income-form'){
            this.setState({ form: 'income' })
        }else if(e.target.parentElement.id === 'show-expense-form' || e.target.id === 'show-expense-form'){
            this.setState({ form: 'expense' })
        }
    };
    renderForm = ( handleChange, handleSubmit ) => {
        switch(this.state.form){
            case '':
                return <p>Select a form above.</p> 
            case 'income':
                return <IncomeForm handleChange={handleChange} handleSubmit={handleSubmit}/>
            case 'expense':
                return <ExpenseForm handleChange={handleChange} handleSubmit={handleSubmit}/>
            default:
                return <p>Select a form above.</p>
        }
    };
    handleChange = (e) => {
        if(e.target.name === 'amount'){
            this.setState({ ...this.state, [e.target.name] : Number(e.target.value) })
        }else{
            this.setState({ ...this.state, [e.target.name] : e.target.value })
        }
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.form === 'income'){
            this.props.addIncome(this.state.category, this.state.amount);
            document.getElementById('income-form').reset();
        }else if(this.state.form === 'expense'){
            this.props.addExpense(this.state.category, this.state.amount);
            document.getElementById('expense-form').reset();
        }

    };

    render(){
        return (
            <Container id="nav">
                <nav>
                    <section id="form-controls">
                        <ButtonGroup variant="contained" color="inherit" aria-label="text primary button group">
                            <Button id="show-income-form" onClick={this.toggleForm}>Income</Button>
                            <Button id="show-expense-form" onClick={this.toggleForm}>Expense</Button>
                        </ButtonGroup>
                    </section>
                    <section id="form-section">
                        <Paper elevation={3} variant="outlined" square id="form-container">
                            { this.renderForm(this.handleChange, this.handleSubmit ) }
                        </Paper>
                    </section>
                </nav>
            </Container>
        )
    }
};

export default Nav;