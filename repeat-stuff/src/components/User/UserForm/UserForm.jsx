import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import styles from './UserForm.module.css';

function UserForm({ onUserCreate, setError }) {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const onUsernameInputChangeHandler = (event) => {
    const userInput = event.target.value;
    setUsername(userInput);
  };

  const onAgeInputChangeHandler = (event) => {
    const userInput = event.target.value;
    setAge(userInput);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError('Name and age should not be blank');
      return;
    }

    const userAge = parseInt(age);
    if (Number.isNaN(userAge) || userAge <= 0) {
      setError('User age should be a number and be greater than 0');
      return;
    }

    const newUser = {
      username,
      age: +age,
      id: Math.floor(Math.random() * 10000000),
    };

    onUserCreate(newUser);

    setUsername('');
    setAge('');
  };

  return (
    <Card className={styles['user-form']}>
      <form onSubmit={onFormSubmit}>
        <div className={styles['user-form__controls']}>
          <label>Username</label>
          <input
            type='text'
            value={username}
            onChange={onUsernameInputChangeHandler}
          />
        </div>
        <div className={styles['user-form__controls']}>
          <label>Age (Years)</label>
          <input
            type='number'
            value={age}
            min='0'
            step='1'
            onChange={onAgeInputChangeHandler}
          />
        </div>
        <div className={styles['user-form__controls']}>
          <Button type='submit' className={styles['align-right']}>
            Add User
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default UserForm;
