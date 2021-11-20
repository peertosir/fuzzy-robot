import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../../UI/Card/Card';
import './ExpenseList.css';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from 'react';
import ExpenseChart from '../ExpenseChart/ExpenseChart';

function ExpenseList({ expenses }) {
  const [yearFilter, setYearFilter] = useState('');

  let filteredExpenses = expenses;

  if (yearFilter !== '') {
    filteredExpenses = filteredExpenses.filter(
      (expense) => expense.date.getFullYear() === +yearFilter
    );
  }

  let expensesContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ));
  }

  return (
    <div>
      <Card className='expense-list'>
        <ExpenseFilter
          selected={yearFilter}
          onYearFilterChange={setYearFilter}
        />
        {filteredExpenses.length > 0 && yearFilter !== '' && (
          <ExpenseChart expenses={filteredExpenses} />
        )}
        {expensesContent}
      </Card>
    </div>
  );
}

export default ExpenseList;
