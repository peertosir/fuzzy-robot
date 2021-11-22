import { useState } from 'react';
import Modal from './components/UI/Modal/Modal';
import UserForm from './components/User/UserForm/UserForm';
import UserList from './components/User/UserList/UserList';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Max',
      age: 20,
    },
    {
      id: 2,
      username: 'Max',
      age: 20,
    },
  ]);
  const [error, setError] = useState('');

  const onUserCreate = (user) => {
    setUsers((prevState) => setUsers([...prevState, user]));
  };

  const clearError = () => {
    setError('');
  };

  return (
    <div className='app'>
      <UserForm setError={setError} onUserCreate={onUserCreate} />
      <UserList users={users} />
      {error.length > 0 && <Modal error={error} onClose={clearError} />}
    </div>
  );
}

export default App;
