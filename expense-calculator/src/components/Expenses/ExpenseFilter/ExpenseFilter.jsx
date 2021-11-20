import React from 'react';
import './ExpenseFilter.css';

function ExpenseFilter({ onYearFilterChange, selected }) {
  const yearFilterChangeHandler = (event) => {
    const value = event.target.value;
    onYearFilterChange(value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Year</label>
        <select selected={selected} onChange={yearFilterChangeHandler}>
          <option value=''>----</option>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
