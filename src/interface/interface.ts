export interface IObject {
  img?: string;
  title: string;
  author: string;
  tags: string[];
  liksCount?: number;
  viewCount?: number;
}

export interface ICardData {
  textInput?: string;
  dateInput?: string;
  selectInput?: string;
  checkboxInput?: string;
  radioInput?: string;
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
