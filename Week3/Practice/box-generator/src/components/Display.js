import React from 'react';

const Display = (props) => {

    const {inputColorArray} = props;

    return (

        <div>
            {
                inputColorArray.map((color, index) => (
                    <div key={index} style={{
                        display: "inline-block",
                        margin: "20px",
                        height: "40px",
                        width: "40px",
                        backgroundColor: color
                    }}>

                    </div>
                ))
            }
        </div>
    );

}

export default Display;