import React, { createRef } from 'react';
import './myform.css';
import { ICardData, IAppState } from '../../../interface/interface';
import MyCart from '../cart/MyCard';

class MyForm extends React.Component<object, IAppState> {
  private textInputRef = createRef<HTMLInputElement>();
  private dateInputRef = createRef<HTMLInputElement>();
  private selectInputRef = createRef<HTMLSelectElement>();
  private checkboxInputRef = createRef<HTMLInputElement>();
  private radioInputRef = createRef<HTMLInputElement>();
  private secondradioInputRef = createRef<HTMLInputElement>();
  private fileInputRef = createRef<HTMLInputElement>();
  constructor(props: object) {
    super(props);
    this.state = {
      cardData: {},
      cards: [],
      errorData: {
        textInput: '',
        dateInput: '',
        selectInput: '',
        checkboxInput: '',
        radioInput: '',
        secondRadioInput: '',
        file: '',
      },
    };
  }

  createCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const textInputValue = this.textInputRef.current?.value.trim() || '';
    const dateInputValue = this.dateInputRef.current?.value.trim() || '';
    const selectInputValue = this.selectInputRef.current?.value.trim() || '';
    const checkboxInputValue = this.checkboxInputRef.current?.checked || false;
    const radioInputValue = this.radioInputRef.current?.checked || false;
    const fileInputValue = this.fileInputRef.current?.files?.[0];

    const cardData: ICardData = {
      textInput: textInputValue,
      dateInput: dateInputValue,
      selectInput: selectInputValue,
      checkboxInput: checkboxInputValue ? 'on' : '',
      radioInput: radioInputValue ? 'on' : '',
      file: '',
    };

    if (fileInputValue) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = URL.createObjectURL(fileInputValue);
        cardData.file = imageUrl;
        this.addCard(cardData);
      };
      reader.readAsDataURL(fileInputValue);
    } else {
      this.addCard(cardData);
    }
  };

  errorHandler(cardData: ICardData) {
    let isError = true;
    type blabla = {
      [key: string]: string;
    };
    const obj: blabla = {};
    for (const key in cardData) {
      if (cardData[key as keyof ICardData] === '') {
        obj[key] = 'false';
      }
    }
    this.setState({ errorData: obj });
    for (const key in obj) {
      if (obj[key] === 'false') {
        isError = false;
      }
    }
    return isError;
  }

  addCard = (cardData: ICardData) => {
    if (!this.errorHandler(cardData)) return;
    if (
      !this.textInputRef.current ||
      !this.dateInputRef.current ||
      !this.selectInputRef.current ||
      !this.checkboxInputRef.current ||
      !this.radioInputRef.current ||
      !this.fileInputRef.current
    )
      return;
    this.textInputRef.current.value = '';
    this.dateInputRef.current.value = '';
    this.selectInputRef.current.value = 'Choose...';
    this.checkboxInputRef.current.checked = false;
    this.radioInputRef.current.checked = false;
    this.fileInputRef.current.value = '';
    alert('New Card init');
    this.setState((prevState) => ({
      cards: [...prevState.cards, cardData],
      cardData: {
        file: '',
      },
    }));
  };

  render() {
    return (
      <form className="wrapForm" onSubmit={this.createCard}>
        <div className="mainForm">
          <div className={this.state.errorData.textInput === 'false' ? 'error' : ''}>
            <input
              placeholder="Write something"
              type="text"
              name="textInput"
              ref={this.textInputRef}
            />
          </div>
          <div className={this.state.errorData.dateInput === 'false' ? 'error' : ''}>
            <input type="date" name="dateInput" ref={this.dateInputRef} />
          </div>
          <select defaultValue="Choose..." name="selectInput" id="1" ref={this.selectInputRef}>
            <option value="Plagiarism">Plagiarism</option>
            <option value="Origin">Origin</option>
          </select>
          <div className={this.state.errorData.checkboxInput === 'false' ? 'error' : ''}>
            <input type="checkbox" name="checkboxInput" ref={this.checkboxInputRef} />
          </div>
          I give permission to publish this photo on this site
          <div className={this.state.errorData.radioInput === 'false' ? 'error' : ''}>
            <input type="radio" name="radioInput" ref={this.radioInputRef} />
          </div>
          I am woman
          <div className={this.state.errorData.radioInput === 'false' ? 'error' : ''}>
            <input type="radio" name="radioInput" ref={this.radioInputRef} />
          </div>
          I am SuperMan
          <div className={this.state.errorData.file === 'false' ? 'error' : ''}>
            <input type="file" name="fileInput" ref={this.fileInputRef} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
        <div className="placeForCard">
          {this.state.cards.map((cardData: ICardData, index: number) => (
            <MyCart
              key={index}
              file={cardData.file}
              title={cardData.textInput}
              author={cardData.dateInput}
              tags={cardData.selectInput}
            />
          ))}
        </div>
      </form>
    );
  }
}

export default MyForm;
