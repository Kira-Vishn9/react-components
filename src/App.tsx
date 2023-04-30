import { Route, Routes } from 'react-router-dom';
import { Error } from './pages/404';
import './App.css';
import About from './pages/About';
import InitCard from './pages/InitCard';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<InitCard />} />
        <Route path="/home" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
