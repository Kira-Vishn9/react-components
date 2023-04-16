import React, { ReactElement, useState, useEffect, useCallback } from 'react';
import MyCard from '../component/UI/cart/MyCard';
import { ICardData2 } from '../../interface/interface';
import classes from './main.module.css';
import MyInput from '../component/UI/input/MyInput';
import { NavBar } from '../component/UI/navbar/NavBar';
import PostService from '../API/PostService';
import MyModal from '../component/UI/modal/MyModal';
import MyLoader from '../component/UI/Loader/MyLoader';

function Main() {
  const [isOpen, setOpen] = useState(false);
  const [modal, setModal] = useState<JSX.Element>();
  const [cards, setCards] = useState<ReactElement[]>([]);
  const [isloader, setLoader] = useState(false);
  const [inputState, setInputState] = useState(
    localStorage.getItem('key') === null ? '' : localStorage.getItem('key')
  );

  async function getCards(): Promise<ReactElement[]> {
    const data1 = await PostService.getAll();
    const result: ReactElement[] = [];
    const data2 = data1.results;
    data2?.forEach((el) => {
      const array: ICardData2 = el;
      result.push(<MyCard key={array.id} {...array} onClick={handlerClick} />);
    });
    return result;
  }
  const closeModal = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    setOpen(false);
  };
  const handlerClick = useCallback(
    async (id: number) => {
      const itCard = await PostService.getById(id);
      const array: ICardData2 = itCard.data;
      const mymodal = (
        <MyModal
          {...array}
          onClick={(e: React.MouseEvent) => {
            closeModal(e);
          }}
        />
      );
      setModal(mymodal);
      setOpen(true);
    },
    [setModal, setOpen]
  );

  useEffect(() => {
    async function search() {
      setLoader(true);
      if (inputState === null) return;
      const result = await PostService.getByAtrributs(inputState);
      const newresult = result.data.results;
      const newArray: ReactElement[] = [];
      newresult.forEach((element: ICardData2) => {
        newArray.push(<MyCard key={element.id} {...element} onClick={handlerClick} />);
      });
      setCards(newArray);
      setLoader(false);
    }
    search();
  }, [inputState, handlerClick]);

  const searchHandler = async (arg: string) => {
    if (arg === '') {
      const cards = await getCards();
      setCards(cards);
    }
    setInputState(arg);
  };

  return (
    <main className={classes.main}>
      {isOpen ? modal : ''}
      <NavBar />
      <MyInput callback={searchHandler} />
      {isloader ? <MyLoader /> : <section className={classes.main__content}>{cards}</section>}
    </main>
  );
}

export default Main;
