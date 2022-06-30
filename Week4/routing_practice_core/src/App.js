import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/home';
import Parameters from './components/parameters';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:word" element={<Parameters/>}/>
        <Route path="/:word/:color/:bgColor" element={<Parameters/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
