export interface ICardData {
  textInput?: string;
  dateInput?: string;
  selectInput?: string;
  checkboxInput?: string;
  radioInput?: string | boolean;
  file?: string;
  [key: string]: any;
}

export interface ICardProps {
  data: ICardData;
}

export interface IAppState {
  cardData: ICardData;
  cards: ICardData[];
  errorData: ICardData; 
}
