import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../UI/Card/Card';
import './ExpenseList.css';

function ExpenseList({ expenses }) {
  return (
    <Card className='expense-list'>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default ExpenseList;
