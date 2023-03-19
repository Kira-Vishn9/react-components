import React from 'react';
import MyInput from './component/UI/input/MyInput'
import './App.css'
import MyCart from './component/UI/cart/MyCart';
import JSONFILE from './../cards.json';
import { IObject } from './interface/IObject';
import { json } from 'react-router-dom';

class App extends React.Component<{items: IObject}>  {
    state = { items: JSONFILE}

    data1 = JSON.stringify(JSONFILE)
    data2 = JSON.parse(this.data1)

    getCart () {
      return(

      )
    }


  render () {
    return (
      <div className="App">
        <MyInput />
        <MyCart  />
      </div>
    )
  }
}

export default App;
