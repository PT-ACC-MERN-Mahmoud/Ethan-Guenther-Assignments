import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = (props) => {
    
    const {id} = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const[header, setHeader] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setHeader(res.data.title);
        })
        .catch((err) => console.log("An error occurred updating the front end", err));
    }, [id])

    const onSubmitHandler= (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${id}`,
        {
            title,
            price,
            description,
        }

        )
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/");
        })

        .catch((err) => console.log(err));
    };

        

    return (
        <div>
            <h2>Edit: {header}</h2>
            <form onSubmit={onSubmitHandler}>
                <label>Title</label>
                <input type={'text'} value={title} name="title"
                onChange={(e) => setTitle(e.target.value)}/>
                <br/>

                <label>Price</label>
                <input type={'number'} value={price} name="price"
                onChange={(e) => setPrice(e.target.value)}/>
                <br/>
                <label>Description</label>
                <input type={'text'} value={description} name="description"
                onChange={(e) => setDescription(e.target.value)}/>

                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default UpdateProduct;