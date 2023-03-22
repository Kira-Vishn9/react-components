import React, { ReactElement } from 'react';
import MyCard from '../component/UI/cart/MyCard';
import { IObject } from '../interface/IObject';
import JSONFILE from '../../cards.json';
import classes from './main.module.css';
import MyInput from '../component/UI/input/MyInput';
import { NavBar } from '../component/UI/navbar/NavBar';

function Main() {
  const cards = getCards();
  return (
    <main className={classes.main}>
      <NavBar />
      <MyInput />
      <section className={classes.main__content}>{cards}</section>
    </main>
  );
}

export function getCards(): ReactElement[] {
  const data1 = JSON.stringify(JSONFILE);
  const data2 = JSON.parse(data1);
  const cards: ReactElement[] = [];
  for (const key in data2) {
    const card: IObject = data2[key];
    cards.push(
      <MyCard
        key={key}
        img={card.img}
        title={card.title}
        author={card.author}
        tags={card.tags}
        liksCount={card.liksCount}
        viewCount={card.viewCount}
      />
    );
  }
  return cards;
}

export default Main;
