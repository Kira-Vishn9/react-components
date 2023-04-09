import React from 'react';
import { ICardData2 } from '../../../../interface/interface';
import classes from './mycard.module.css';

export type openHandler = {
  onClick: (id: number) => void;
};

const MyCart = (props: ICardData2 & openHandler) => {
  const handlerClick = () => {
    if (props.id === undefined) return;
    props.onClick(props.id);
  };
  return (
    <div className={classes.wrap} onClick={handlerClick}>
      <h2>Card</h2>
      <div>{props.gender}</div>
      <div className={classes.wrapImg}>
        <img className={classes.wrapImg} src={`${props.image}`} alt="photo"></img>
      </div>
      <span>{props.name}</span>
      <p>{props.status}</p>
    </div>
  );
};

export default MyCart;
