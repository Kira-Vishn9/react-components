import React from 'react';
import classes from './myInput.module.css';

class MyInput extends React.Component<object, { value: string | '' }> {
  key = 'searchValue';
  public constructor(props = {}) {
    super(props);
    this.state = {
      value: localStorage.getItem('key') !== null ? localStorage.getItem('key')! : '',
    };
  }

  componentWillUnmount() {
    localStorage.setItem('key', this.state.value);
  }
  onChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.currentTarget.value;
    this.setState({ value: newValue });
  };

  render() {
    return (
      <div className={classes.wrapInput}>
        <input
          className={classes.input}
          value={this.state.value}
          type="text"
          onChange={this.onChanges}
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default MyInput;
