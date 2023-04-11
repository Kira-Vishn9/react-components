import React, { ReactElement } from 'react';
import { ICardData2 } from '../../../../interface/interface';
import './myModal.css';

export type closeHandler = {
  onClick: (e: React.MouseEvent) => void;
};

const MyModal = (props: ICardData2 & closeHandler): ReactElement => {
  return (
    <div className="global_wrap" onClick={props.onClick}>
      <div className="close" onClick={props.onClick}>
        <img
          src="https://img.icons8.com/material-outlined/24/null/cancel--v1.png"
          onClick={props.onClick}
        />
      </div>
      <p>{props.gender}</p>
      <p>{props.id}</p>
      <img src={props.image} />
      <p>{props.location?.name}</p>
      <p>{props.name}</p>
      <p>{props.origin?.name}</p>
      <p>{props.species}</p>
      <p>{props.status}</p>
      <p>{props.type}</p>
    </div>
  );
};

export default MyModal;
