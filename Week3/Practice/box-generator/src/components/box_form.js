import React, {useState} from 'react';

const BoxForm = (props) => {

    const {inputColorArray, setInputColorArray} = props;

    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    

    setInputColorArray([...inputColorArray, color]);
}

return (

    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Color:</label>
                <input type={"text"} name={"color"} onChange={(e) => setColor(e.target.value)}/>
            </div>
            <button>Add Box</button>
        </form>
    </div>
)
}
export default BoxForm;