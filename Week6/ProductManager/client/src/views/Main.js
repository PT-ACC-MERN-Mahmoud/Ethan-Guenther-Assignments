import React, {useState, useEffect} from 'react';
import CreateProduct from '../components/CreateProduct';
import AllProducts from '../components/AllProducts';
const Main = (props) => {

    const [productList, setProductList] = useState([]);

    return (
        <div>
                <CreateProduct/>
                <AllProducts         
                productList={productList} 
                setProductList={setProductList}/>
        </div>
    )
}

export default Main;