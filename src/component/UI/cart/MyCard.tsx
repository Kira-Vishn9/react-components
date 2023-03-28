import React from 'react';
import { ICardData } from '../../../interface/interface';
import classes from './mycard.module.css';

class MyCart extends React.Component<ICardData> {
  constructor(props: ICardData) {
    super(props);
    this.state = {
      count: this.props,
    };
  }
  render(): React.ReactNode {
    return (
      <div className={classes.wrap}>
        <h2>Card</h2>
        <div>{this.props.title}</div>
        <div className={classes.wrapImg}>
          <img className={classes.wrapImg} src={`${this.props.file}`} alt="photo"></img>
        </div>
        <span>{this.props.tags}</span>
        <p>{this.props.author}</p>
      </div>
    );
  }
}

export default MyCart;
