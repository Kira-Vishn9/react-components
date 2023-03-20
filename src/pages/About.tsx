import React from 'react';
import classes from './about.module.css';

class About extends React.Component<object> {
  render(): React.ReactNode {
    return (
      <div className={classes.wrap}>
        <div className={classes.fix}>
          <h1>Здесь должна быть информация о нас.</h1>
        </div>
        <p>Но мы никто и звать нас никкак</p>
        <p>Мы самураи у которых нет цели, но есть путь!</p>
      </div>
    );
  }
}

export default About;
