import React from 'react';
import './Buttons.css';

function Buttons(props) {
    return (
        <div>
          
            <button id={props.style_id} >{props.text}{console.log(props)}</button>
        </div>
    )
}

export default Buttons;
