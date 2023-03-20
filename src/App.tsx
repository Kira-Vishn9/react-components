import React, { ReactElement } from 'react';
import MyInput from './component/UI/input/MyInput'
import NavBar from './component/UI/navbar/NavBar';
import JSONFILE from './../cards.json';
import { IObject } from './interface/IObject';
import Main from './pages/Main';
import './App.css'

class App extends React.Component<{items: IObject}>  {
    state = { items: JSONFILE}

    


  render () {
    return (
      <div className="App">
        <NavBar />
        <MyInput />
        <Main  />
      </div>
    )
  }
}

export default App;
