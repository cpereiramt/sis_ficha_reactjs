import React from 'react';
import './Pagination.css';

function Pagination(props) {
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    const handleClick = (event) => {
        const allButtons = document.getElementById('pagination_div');               
        const teste =   Array.from(allButtons.childNodes); 
        teste.map(element => element.removeAttribute('id', 'selectedButton'))
        const selectedButton =  document.getElementsByName(event.target.name);
        selectedButton[0].setAttribute('id','selectedButton');
        console.log(props.function(selectedButton[0].name));
     }

    return (
    
        <div id="pagination_div">
            {letters.map((buttonE,i) => <button name={buttonE} onClick={(event) => handleClick(event)}> 
                {buttonE} 
                </button>)}
       </div>
    )
}

export default Pagination
