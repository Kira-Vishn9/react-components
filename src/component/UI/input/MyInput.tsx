import React, { useState, useEffect } from 'react';
import classes from './myInput.module.css';
import './myInput.module.css';

const check = () => {
  return localStorage.getItem('key') === null ? '' : localStorage.getItem('key');
};

type callback = {
  callback: (arg: string) => void;
};

const MyInput = (arg: callback) => {
  const [inputstate, setInputState] = useState('' || check());
  const onChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
    if (e.target.value === '') {
      arg.callback(e.target.value);
    }
  };

  useEffect(() => {
    localStorage.setItem('key', inputstate || '');
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputstate === null) return;
    arg.callback(inputstate);
  };

  return (
    <form className="wrapInput" onSubmit={submit}>
      <input
        className={classes.input}
        value={inputstate || ''}
        type="text"
        onChange={onChanges}
        placeholder="Search..."
      />
    </form>
  );
};

export default MyInput;
