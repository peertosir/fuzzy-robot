import ExpenseForm from './Form/ExpenseForm';
import './NewExpense.css';

function NewExpense({ onAddExpense, formVisibility, setFormVisibility }) {
  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 10000000),
    };
    onAddExpense(expenseData);
  };

  let formContent = (
    <button onClick={() => setFormVisibility(true)}>Add New Expense</button>
  );

  if (formVisibility) {
    formContent = (
      <ExpenseForm
        setFormVisibility={setFormVisibility}
        onSaveExpenseData={onSaveExpenseData}
      />
    );
  }

  return <div className='new-expense'>{formContent}</div>;
}

export default NewExpense;
