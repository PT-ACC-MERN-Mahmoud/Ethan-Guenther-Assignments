import React, {useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const AllProducts = (props) => {

    const {productList, setProductList} = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => console.log("Error grabbing all product list", err))
    }, [])
        
    const deleteProduct = (product_id) => {
        axios.delete(`http://localhost:8000/api/products/${product_id}`)
        .then((res) => {
            console.log(res.data);

            const updatedList = productList.filter((product, index) => product._id != product_id)

            setProductList(updatedList);

        })

        .catch((err) => console.log(err));
    };

    return (
        <div>
            <h3>Products:</h3>
            {
                productList.map((product, index) => (
                    <div key={product._id}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        
                        <button onClick={()=> navigate(`/products/edit/${product._id}`)}>
                            Edit Product</button>

                        <button onClick={() => deleteProduct(product._id)}> 
                        DELETE</button>
                    </div>
                    
                ))

                }
        </div>
    )
}

export default AllProducts;
