import Main from './pages/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import { Error } from './pages/404';
import './App.css';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="home" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
