import React, { useState, useRef, ReactElement } from 'react';
import './myform.css';
import { ICardData } from '../../../interface/interface';
import MyCart from '../cart/MyCard';

function getCards(obj: ICardData): ReactElement[] {
  const cards: ReactElement[] = [];
  for (const key in obj) {
    const card: ICardData = obj[key];
    cards.push(<MyCart key={card.textInput} props={card} />);
  }
  return cards;
}

const MyForm = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const selectInputRef = useRef<HTMLSelectElement>(null);
  const checkboxInputRef = useRef<HTMLInputElement>(null);
  const radioInputRef = useRef<HTMLInputElement>(null);
  const secondradioInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [cardData, setCardData] = useState<ICardData>({});
  const [errorData, setErrorData] = useState<ICardData>({
    textInput: '',
    dateInput: '',
    selectInput: '',
    checkboxInput: '',
    radioInput: '',
    file: '',
  });

  const createCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const textInputValue = textInputRef.current?.value.trim() || '';
    const dateInputValue = dateInputRef.current?.value.trim() || '';
    const selectInputValue = selectInputRef.current?.value.trim() || '';
    const checkboxInputValue = checkboxInputRef.current?.checked || false;
    const radioInputValue = radioInputRef.current?.checked || secondradioInputRef.current?.checked;
    const fileInputValue = fileInputRef.current?.files?.[0];

    const newCardData: ICardData = {
      textInput: textInputValue,
      dateInput: dateInputValue,
      selectInput: selectInputValue,
      checkboxInput: checkboxInputValue ? 'on' : '',
      radioInput: radioInputValue,
      file: '',
    };
    if (fileInputValue) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = URL.createObjectURL(fileInputValue);
        newCardData.file = imageUrl;
        addCard(newCardData);
      };
      reader.readAsDataURL(fileInputValue);
    } else {
      addCard(newCardData);
    }
  };

  const errorHandler = (newCardData: ICardData) => {
    let isError = true;
    type blabla = {
      [key: string]: string;
    };
    const obj: blabla = {};
    for (const key in newCardData) {
      if (newCardData[key as keyof ICardData] === '') {
        obj[key] = 'false';
      }
    }
    setErrorData(obj);
    for (const key in obj) {
      if (obj[key] === 'false') {
        isError = false;
      }
    }
    return isError;
  };

  const addCard = (newCardData: ICardData) => {
    if (!errorHandler(newCardData)) return;
    textInputRef.current!.value = '';
    dateInputRef.current!.value = '';
    selectInputRef.current!.value = 'Choose...';
    checkboxInputRef.current!.checked = false;
    radioInputRef.current!.checked = false;
    fileInputRef.current!.value = '';
    secondradioInputRef.current!.checked = false;
    alert('New Card init');

    setCardData({ newCardData });
  };
  const newCards = getCards(cardData);
  return (
    <form className="wrapForm" onSubmit={createCard}>
      <div className="mainForm">
        <div className={errorData.textInput === 'false' ? 'error' : ''}>
          <input placeholder="Write something" type="text" name="textInput" ref={textInputRef} />
          {errorData.textInput === 'false' && (
            <span className="errorMessage">Please fill in this field</span>
          )}
        </div>
        <div className={errorData.dateInput === 'false' ? 'error' : ''}>
          <input type="date" name="dateInput" ref={dateInputRef} />
          {errorData.dateInput === 'false' && (
            <span className="errorMessage">Please fill in this field</span>
          )}
        </div>
        <select defaultValue="Choose..." name="selectInput" id="1" ref={selectInputRef}>
          <option value="Plagiarism">Plagiarism</option>
          <option value="Origin">Origin</option>
        </select>
        <div className={errorData.checkboxInput === 'false' ? 'error' : ''}>
          <input type="checkbox" name="checkboxInput" ref={checkboxInputRef} />
          {errorData.checkboxInput === 'false' && (
            <span className="errorMessage">Please fill in this field</span>
          )}
        </div>
        I give permission to publish this photo on this site
        <div className={errorData.radioInput === 'false' ? 'error' : ''}>
          <input type="radio" name="radioInput" ref={secondradioInputRef} />
          {errorData.radioInput === 'false' && (
            <span className="errorMessage">Please fill in this field</span>
          )}
        </div>
        I am woman
        <div className={errorData.radioInput === 'false' ? 'error' : ''}>
          <input type="radio" name="radioInput" ref={radioInputRef} />
          {errorData.radioInput === 'false' && (
            <span className="errorMessage">Please fill in this field</span>
          )}
        </div>
        I am SuperMan
        <div className={errorData.file === 'false' ? 'error' : ''}>
          <input type="file" name="fileInput" ref={fileInputRef} />
          {errorData.file === 'false' && (
            <span className="errorMessage">Please fill in this field</span>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
      <div className="placeForCard">
        <section>{newCards}</section>
      </div>
    </form>
  );
};

export default MyForm;
