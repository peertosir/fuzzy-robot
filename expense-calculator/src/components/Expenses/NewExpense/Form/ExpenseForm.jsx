import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onSaveExpenseData, setFormVisibility }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const clearForm = () => {
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
    setFormVisibility(false);
  };

  const onTitleChangeHandler = (event) => {
    const value = event.target.value;
    setEnteredTitle(value);
  };

  const onAmountChangeHandler = (event) => {
    const value = event.target.value;
    setEnteredAmount(value);
  };

  const onDateChangeHandler = (event) => {
    const value = event.target.value;
    setEnteredDate(value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: +enteredAmount,
    };

    onSaveExpenseData(newExpense);
    clearForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={onTitleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={onAmountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={onDateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={clearForm}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
