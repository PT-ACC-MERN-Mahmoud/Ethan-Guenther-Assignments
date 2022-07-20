import axios from 'axios';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const CreateAuthor = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8000/api/authors`, {
            name
        })

        .then((res) => {
            console.log(res);
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
                :null}

                <button type='submit'>Submit</button>
                <br/>
                <Link to={'/'}><button>Cancel</button></Link>
            </form>
        </div>
    )


}

export default CreateAuthor;