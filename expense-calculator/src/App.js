import { useState } from 'react';
import ExpenseList from './components/Expenses/ExpenseList/ExpenseList';
import NewExpense from './components/Expenses/NewExpense/NewExpense';

function App() {
  const [formVisibility, setFormVisibility] = useState(false);
  const [expenses, setExpenses] = useState([
    {
      id: '1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: '2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: '3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: '4',
      title: 'New Desk (Steel)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const onAddExpenseHandler = (expense) => {
    setExpenses((prevState) => [...prevState, expense]);
  };

  return (
    <div className='App'>
      <NewExpense
        formVisibility={formVisibility}
        setFormVisibility={setFormVisibility}
        onAddExpense={onAddExpenseHandler}
      />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
