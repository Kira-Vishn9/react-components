import React from 'react';
import MyInput from './component/UI/input/MyInput'
import './App.css'
import MyCart from './component/UI/cart/MyCart';
import JSONFILE from './../cards.json';
import { IObject } from './interface/IObject';

class App extends React.Component<{items: IObject}>  {
    state = { items: JSONFILE}

  render () {
    return (
      <div className="App">
        <MyInput />
        <MyCart {...this.state} />
        
      </div>
    )
  }
}

export default App;
