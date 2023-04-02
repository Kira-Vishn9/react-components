import React, { useState, useEffect } from 'react';
import classes from './myInput.module.css';
import './myInput.module.css';

const check = () => {
  return localStorage.getItem('key') === null ? '' : localStorage.getItem('key');
};

const MyInput = () => {
  const [inputstate, setInputState] = useState('' || check());
  const onChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('key', inputstate || '');
  });

  return (
    <div className="wrapInput">
      <input
        className={classes.input}
        value={inputstate || ''}
        type="text"
        onChange={onChanges}
        placeholder="Search..."
      />
    </div>
  );
};

export default MyInput;
