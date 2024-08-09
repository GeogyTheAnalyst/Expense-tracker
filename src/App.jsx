import React, { useState } from 'react'
import './App.css'
import Form from './Form.jsx'
import List from './List.jsx';


function App (){
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const addExpense = (expense) => {
    setExpenses([...expenses,expense]);
    setTotal(total + expense.amount);
  };

  const resetExpenses = () => {
    setExpenses([]);
    setTotal(0);
  };


  return (
    <div className='app-container'>
      <h1>Expense Tracker</h1>
      <h2>Total: R{total.toFixed(2)}</h2>
      <Form addExpense={addExpense} />
      <List expenses={expenses}/>
      <button className="reset-button" onClick={resetExpenses}>Reset Expenses</button>
    </div>
  );
}

export default App;
