import React from "react";
import JSONFILE from '../../../../cards.json';
import classes from './mycart.module.css';

class MyCart extends React.Component {
 constructor(props: Object){
    super(props)
 }

 read () {
    console.log(this.props)
 }

    render(){
        return(
            <div className={classes.wrap} onClick={() => {this.read}}>
                {/* {this.props.map(el => {
                    <span>{el.title}</span>
                    <div>
                        <img className={classes.wrapImg} src={`${el.img}`} alt="photo" />
                    </div>
                    <span>{el.author}</span>
                    <p>{el.tags}</p>
                    <div className={classes.wrapLike}>
                        <span>{el.liksCount}</span>
                        <span>{el.viewCount}</span>
                    </div>
                })} */}
            </div>
        )
    }
}

export default MyCart;