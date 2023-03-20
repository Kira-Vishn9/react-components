import React from "react";
import { IObject } from "../../../interface/IObject";
import classes from './mycard.module.css';

class MyCart extends React.Component<IObject> {
 constructor(props: IObject){
    super(props)
 }
 
 render () {
        return(
            <div className={classes.wrap}>
                    <span>{this.props.title}</span>
                    <div>
                        <img className={classes.wrapImg} src={`${this.props.img}`} alt="photo" />
                    </div>
                    <span>{this.props.author}</span>
                    <p>{this.props.tags}</p>
                    <div className={classes.wrapLike}>
                        <span>{this.props.liksCount}</span>
                        <span>{this.props.viewCount}</span>
                    </div>
            </div>
        )
    }
}

export default MyCart;