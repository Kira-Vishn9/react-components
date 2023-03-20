import React from "react";
import { IObject } from "../../../interface/IObject";
import classes from './mycard.module.css';

class MyCart extends React.Component<IObject> {
 constructor(props: IObject){
    super(props)
    this.state = {
        count: this.props.liksCount
    }
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
                        <span style={{display: "flex", alignItems: 'center'}}>
                            {this.props.liksCount}
                        </span>
                        <span onClick={() => {}} style={{display: "flex", alignItems: 'center'}}>
                            {/* <img style={{width: 20, borderRadius:'50%', margin: 5}} src="https://sun1-57.userapi.com/s/v1/if1/tkWXIbZcwNkv2F0zWg6ffyBSzwQGTovaM-jXNfgusUPF9T8HmkGh0mAt6tGo6y2Xzdnit9ky.jpg?size=100x100&quality=96&crop=0,0,512,512&ava=1" alt="" /> */}
                            {this.props.viewCount}
                        </span>
                    </div>
            </div>
        )
    }
}

export default MyCart;