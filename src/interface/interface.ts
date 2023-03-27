export interface ICardData {
  textInput?: string;
  dateInput?: string;
  selectInput?: string;
  checkboxInput?: string;
  radioInput?: string;
  file?: string;
  [key: string]: any;
  title?: string;
  author?: string;
  tags?: string[] | string;
}

export interface ICardProps {
  data: ICardData;
}

export interface IAppState {
  cardData: ICardData;
  cards: ICardData[];
  errorData: ICardData; 
}
