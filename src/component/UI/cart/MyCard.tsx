import React from 'react';
import { IObject } from '../../../interface/interface';
import classes from './mycard.module.css';

class MyCart extends React.Component<IObject> {
  constructor(props: IObject) {
    super(props);
    this.state = {
      count: this.props.liksCount,
    };
  }
  render() {
    return (
      <div className={classes.wrap}>
        <span>{this.props.title}</span>
        <div>
          <img className={classes.wrapImg} src={`${this.props.img}`} alt="photo" />
        </div>
        <span>{this.props.author}</span>
        <p>{this.props.tags}</p>
        <div className={classes.wrapLike}>
          <span style={{ display: 'flex', alignItems: 'center' }}>{this.props.liksCount}</span>
          <span style={{ display: 'flex', alignItems: 'center' }}>{this.props.viewCount}</span>
        </div>
      </div>
    );
  }
}

export default MyCart;
