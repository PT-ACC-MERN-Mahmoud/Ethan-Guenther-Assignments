import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
const ProductById = (props) => {

    const navigate = useNavigate();
    const [productById, setProductById] = useState({});
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductById(res.data);
            })

            .catch((err) => console.log("Error grabbing Product By Id", err))

    }, [])


    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            
            navigate('/');
        })
        .catch((err) => console.log("There was an error deleting a product", err));
    }

    return (
        <div>
            <h3>{productById.title}</h3>
            <p>Price: {productById.price}</p>
            <p>Description: {productById.description}</p>
            <button onClick={handleDelete}>Delete Product</button>
        </div>
    )
}

export default ProductById;