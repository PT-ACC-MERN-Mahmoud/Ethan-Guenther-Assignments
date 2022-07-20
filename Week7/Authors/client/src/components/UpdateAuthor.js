import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';

const UpdateAuthor = () => {

    const {id} = useParams();

    const [name, setName] = useState();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setName(res.data.name);
        })
        .catch((err) => console.log(err))
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${id}`,{
            name
        })

        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        });
    }
    return (
        <div>
    <Link to={'/'}>HomePage</Link>

<form onSubmit={onSubmitHandler}>
    <label>Name:</label>
    <input type={'text'} 
    name="name" value={name}
    onChange = {(e) => setName(e.target.value)}/>

    {errors.name ? 
    <p>{errors.name.message}</p>
    : null
    }

    <button type='submit'>Submit</button>
    <br/>
    <Link to={'/'}><button>Cancel</button></Link>
</form>  
        </div>
    )
}

export default UpdateAuthor;