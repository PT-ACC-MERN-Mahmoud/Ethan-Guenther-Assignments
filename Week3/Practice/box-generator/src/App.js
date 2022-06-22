import './App.css';
import React, {useState} from 'react';
import BoxForm from './components/box_form';
import Display from './components/Display';

function App() {
  const [inputColorArray, setInputColorArray] = useState([]);
  return (
    <div className="App">
      <BoxForm inputColorArray={inputColorArray} setInputColorArray={setInputColorArray}/>
      <Display inputColorArray={inputColorArray}/>
    </div>
  );
}

export default App;
