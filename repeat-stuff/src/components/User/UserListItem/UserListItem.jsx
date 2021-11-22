import React from 'react';
import styles from './UserListItem.module.css';

function UserListItem({ username, age }) {
  return (
    <div className={styles['user-list-item']}>
      {username} ({age} years old)
    </div>
  );
}

export default UserListItem;
