import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


export const IncomeForm = (props) => {
    const { handleChange, handleSubmit } = props;

    return (
        <form id="income-form">
            <h3>Income</h3>
            <div className="form-group">
                <InputLabel htmlFor="category">Category:</InputLabel>
                <Input type="text" onChange={handleChange} name="category" id="category"/>
            </div>
            <div className="form-group">
                <InputLabel htmlFor="amount">Amount:</InputLabel>
                <Input type="number" onChange={handleChange} name="amount" id="amount"/>
            </div>
            <Button onClick={handleSubmit} id="submit-btn">Add Income</Button>
        </form>
    );
};

export const ExpenseForm = (props) => {
    const { handleChange, handleSubmit } = props;

    return (
        <form id="expense-form">
            <h3>Expense</h3>
            <div className="form-group">
                <InputLabel htmlFor="category">Category:</InputLabel>
                <Input name="category" id="category" onChange={handleChange} type="text" required/>
            </div>
            <div className="form-group">
                <InputLabel htmlFor="amount">Amount:</InputLabel>
                <Input name="amount" id="amount" onChange={handleChange} type="number" required/>
            </div>
            <Button onClick={handleSubmit} id="submit-btn">Add Expense</Button>
        </form>
    );
};