import React from "react";
import classes from './myInput.module.css';

class MyInput extends React.Component {
    constructor(props : string){
        super(props)
    }

    onChanges = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        console.log(newValue)
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