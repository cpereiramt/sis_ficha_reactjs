import React from 'react';
import './Buttons.css';

function Buttons(props) {
    const isbuttonEnabled = JSON.parse(localStorage.getItem('isCommonUser'));
    return (
   
            <div id="button-div">         
            <button id={props.style_id} disabled={isbuttonEnabled} name={props.text} onClick={(event) => props.function(event)}>{props.text}</button>
            </div>
    )
}

export default Buttons;
