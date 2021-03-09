import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Header from './Components/Header';
import Nav from './Components/Nav';
import Ledger from './Components/Ledger';


export default function App(){
  const [ income, setIncome ] = useState([]);
  const [ expenses, setExpenses ] = useState([]);
  const [ incomeId, setIncomeId ] = useState(0);
  const [ expenseId, setExpenseId ] = useState(0);

  const INCOME_URI = 'http://localhost:5000/income';
  const EXPENSE_URI = 'http://localhost:5000/expense';

  useEffect(() => {
    fetchIncome();
    fetchExpense();
  }, []);
  
  const fetchIncome = () => {
    axios.get(INCOME_URI)
      .then(response => {
        setIncome(response.data);
        setIncomeId(response.data.length);
      })
      .catch(err => console.log(err))
  };
  const fetchExpense = () => {
    axios.get(EXPENSE_URI)
      .then(response => {
        setExpenses(response.data);
        setExpenseId(response.data.length);
      })
      .catch(err => console.log(err))
  };
  const addIncome = ( category, amount ) => {
    axios.post(INCOME_URI, {
      "id": `${incomeId}`,
      "category": `${category}`,
      "amount": amount,
    }, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
    
    setIncome([...income, { id: incomeId, category: category, amount: amount }]);
    setIncomeId(incomeId + 1);
  };
  const addExpense = ( category, amount ) => {
    axios.post(EXPENSE_URI, {
      "id": `${expenseId}`,
      "category": `${category}`,
      "amount": amount,
    }, {
      headers: { 'Content-Type': 'application/json'}
    }).then(response => console.log(response.data))
    .catch(err => console.log(err))

    setExpenses([...expenses, { id: expenseId, category: category, amount: amount }]);
    setExpenseId(expenseId + 1);
  };
  const deleteIncome = ( id ) => {
    axios.delete(INCOME_URI + '/' + id)
      .then(response => console.log(response.data))
      .catch(err => console.log(err))

    let newList = income.filter(income => income._id !== id);
    setIncome(newList);
    setIncomeId(newList.length);
  };
  const deleteExpense = ( id ) => {
    axios.delete(EXPENSE_URI + '/' + id)
      .then(response => console.log(response.data))
      .catch(err => console.log(err))

    let newList = expenses.filter(expense => expense._id !== id);
    setExpenses(newList);
    setExpenseId(newList.length);
  };


  return (
    <div className="App" id="app">
      <Header></Header>
      <Nav addIncome={addIncome} addExpense={addExpense}></Nav>
      <Ledger income={income} expense={expenses} deleteIncome={deleteIncome} deleteExpense={deleteExpense}></Ledger>
    </div>
  );
  
};
export default App;
