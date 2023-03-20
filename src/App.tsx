import Main from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error } from './pages/404';
import './App.css';
import About from './pages/About';
import NavBar from './component/UI/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
