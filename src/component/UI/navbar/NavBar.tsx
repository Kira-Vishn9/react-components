import React from "react";
import { Link } from "react-router-dom";
import classes from './navbar.module.css'

class NavBar extends React.Component {
    render(){
        return(
            <div className={classes.navbar}>
                <span> О нас  </span>
            </div>
        )
    }
}

export default NavBar;