import React from 'react';
import { NavBar } from '../component/UI/navbar/NavBar';
import classes from './about.module.css';

const About = () => {
  return (
    <div className={classes.wrap}>
      <NavBar />
      <div className={classes.fix}>
        <h1>Здесь должна быть информация о нас.</h1>
      </div>
      <p>Но мы никто и звать нас никкак</p>
      <p>Мы самураи у которых нет цели, но есть путь!</p>
    </div>
  );
};

export default About;
