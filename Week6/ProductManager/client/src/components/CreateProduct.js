import React, {useState} from "react";
import axios from "axios";

const CreateProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products", {
            title,
            price, 
            description
        })

        .then((res) => {
            console.log(res)
            console.log(res.data);
        setTitle("");
        setPrice("");
        setDescription("");
        })

        .catch((err) => {
            console.log("An error occurred in the front end db", err)
        })

    }


return (

    <div>
        <h1>Product Manager</h1>  
    
        <form onSubmit={onSubmitHandler}>
            <label className="form_style">Title</label>
            <input type={"text"} name="title" value={title} 
            onChange={(e) => setTitle(e.target.value)}/>

            <label className="form_style">Price</label>
            <input type={"number"} name="price" value={price} 
            onChange={(e) => setPrice(e.target.value)}/>

            <label className="form_style">Description</label>
            <input type={"text"} name="description" value={description} 
            onChange={(e) => setDescription(e.target.value)}/>
            <br/>
            <button type="submit"> Create</button>
        </form>
    </div>


)
}

export default CreateProduct;