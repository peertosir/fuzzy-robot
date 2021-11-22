import React from 'react';
import UserListItem from '../UserListItem/UserListItem';
import Card from '../../UI/Card/Card';
import styles from './UserList.module.css';

function UserList({ users }) {
  return (
    <Card className={styles['user-list']}>
      {users.map((user) => (
        <UserListItem key={user.id} username={user.username} age={user.age} />
      ))}
    </Card>
  );
}

export default UserList;
