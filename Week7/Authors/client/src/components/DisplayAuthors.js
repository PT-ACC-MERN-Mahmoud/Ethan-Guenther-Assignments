import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const DisplayAuthors = () => {

    const [authorList, setAuthorList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then((getAuthors) => {
            console.log(getAuthors);
            console.log(getAuthors.data);
            setAuthorList(getAuthors.data);
        })
        .catch((err) => console.log("Error grabbing Author list",err))
    }, [])


    const handleDelete = (author_id) => {
        axios.delete(`http://localhost:8000/api/authors/${author_id}`)

        .then((res) => {
            console.log(res.data);

            const filteredList = authorList.filter((author,index) =>
                author._id != author_id)
            setAuthorList(filteredList);
        })
    }

    return(
        <div className='container'>
            <h1>Favorite Authors</h1>

            <Link to={'/new'}>Add an Author</Link>

            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Author</th>
                        <th scope='col'>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {
                    authorList.map((author,index) => {
                        return(
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={`/edit/${author._id}`}>
                                        <button>Edit</button>
                                    </Link>

                                </td>
                                <td><button onClick={() => handleDelete(author._id)}>
                                        Delete
                                    </button></td>
                            </tr>

                        )
                    })
                }
                </tbody>
            </table>

        </div>
    );
}
export default DisplayAuthors;