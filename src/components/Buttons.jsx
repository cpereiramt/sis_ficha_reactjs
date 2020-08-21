import React from 'react';
import './Buttons.css';

function Buttons(props) {
    return (
        <>          
            <button id={props.style_id} name={props.text} onClick={(event) => props.function(event)}>{props.text}</button>
        </>
    )
}

export default Buttons;
