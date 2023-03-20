import React from "react";
import classes from './myInput.module.css';

class MyInput extends React.Component<object, { value: string }> {
    private key = 'searchValue';
  
    public constructor(props = {}) {
      super(props);
      this.state = { value: '' };
    }

    
    onChanges = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
      }

    render(){
        return(
            <div className={classes.wrapInput}>
                <input className={classes.input} type="text" onChange={this.onChanges} placeholder="Search..."/>
            </div>
        )
    }
}

export default MyInput;