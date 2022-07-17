import ProductById from './components/ProductById';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Main from './views/Main';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/products/:id" element={<ProductById/>}/>
          <Route path="/products/edit/:id" element={<UpdateProduct/>}/>
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
