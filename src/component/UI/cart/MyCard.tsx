import React from 'react';
import { ICardData } from '../../../interface/interface';
import classes from './mycard.module.css';

const MyCart = ({ props }: ICardData) => {
  return (
    <div className={classes.wrap}>
      <h2>Card</h2>
      <div>{props.textInput}</div>
      <div className={classes.wrapImg}>
        <img className={classes.wrapImg} src={`${props.file}`} alt="photo"></img>
      </div>
      <span>{props.dateInput}</span>
      <p>{props.selectInput}</p>
    </div>
  );
};

export default MyCart;
