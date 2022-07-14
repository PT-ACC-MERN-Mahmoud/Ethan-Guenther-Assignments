import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
const ProductById = (props) => {

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

    return (
        <div>
            <h3>{productById.title}</h3>
            <p>Price: {productById.price}</p>
            <p>Description: {productById.description}</p>
        </div>
    )
}

export default ProductById;