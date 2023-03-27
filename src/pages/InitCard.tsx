import React from 'react';
import MyForm from '../component/UI/form/Myform';
import { NavBar } from '../component/UI/navbar/NavBar';
import classes from './about.module.css';

class InitCard extends React.Component<object> {
  render(): React.ReactNode {
    return (
      <div className={classes.wrap}>
        <NavBar />
        <MyForm />
      </div>
    );
  }
}

export default InitCard;
