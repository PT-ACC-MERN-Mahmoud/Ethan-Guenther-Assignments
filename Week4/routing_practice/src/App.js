import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
