import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import DisplayAuthors from './components/DisplayAuthors';
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAuthors/>}/>
          <Route path='/new' element={<CreateAuthor/>}/>
          <Route path='/edit/:id' element={<UpdateAuthor/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
