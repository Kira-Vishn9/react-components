import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navbar.module.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className={classes.navbar}>
        <Link className={classes.item} to="/home">
          Главная
        </Link>
        <Link className={classes.item} to="/about">
          О нас
        </Link>
      </div>
    );
  }
}

export default NavBar;
