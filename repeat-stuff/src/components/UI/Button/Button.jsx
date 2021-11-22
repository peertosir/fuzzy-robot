import React from 'react';
import styles from './Button.module.css';

function Button({ children, className, onClick, type }) {
  const classes = styles.button + ' ' + className;
  return (
    <button onClick={onClick} type={type && 'submit'} className={classes}>
      {children}
    </button>
  );
}

export default Button;
