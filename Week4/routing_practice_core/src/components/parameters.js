import React from "react";
import { useParams } from "react-router-dom";

const Parameters = (props) => {

const {word, color, bgColor} = useParams();


    return (
        <div style={{textAlign:'center'}}>
            
            {
                isNaN(word)?
                <p style={color?
                    {color:color,
                    backgroundColor:bgColor
                    }
                    :null
                    }>
            This is a word:{word}</p>:
                <p>This is a number: {word}</p>
            }
            
        </div>
    )
}

export default Parameters;