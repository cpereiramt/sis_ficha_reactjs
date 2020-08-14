import React from 'react';
import './Pagination.css';

function Pagination() {
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    return (

        <div id="pagination_div">
            {letters.map((buttonE,i) => <button name={buttonE} onClick={() => {
               const allButtons = document.getElementById('pagination_div');
             const teste =   Array.from(allButtons.childNodes); 
             console.log(teste);
              teste.map(element => element.removeAttribute('id', 'selectedButton'))
               const selectedButton =  document.getElementsByName(buttonE);
               selectedButton[0].setAttribute('id','selectedButton');
                }}> 
                {buttonE} 
                </button>)}
       </div>
    )
}

export default Pagination
