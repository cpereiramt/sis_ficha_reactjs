import React from 'react';
import './Pagination.css';

function Pagination(props) {
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    const handleClick = (event) => {
        const allButtons = document.getElementById('pagination_div');              
        const buttonActive = Array.from(allButtons.childNodes); 
        buttonActive.map(element => element.removeAttribute('id', 'selectedButton'))
        const allRows= document.getElementsByTagName('tr');
        const allRowsActive = Array.from(allRows); 
        allRowsActive.map(element => element.removeAttribute('id', 'selected_TableRow'))
        const selectedButton =  document.getElementsByName(event.target.name);
        selectedButton[0].setAttribute('id','selectedButton');
        console.log(props.function(selectedButton[0].name));
        props.functionTable({   
            codlocal: " ",
            cpf: " ",
            dtnasc: " ",
            matricula: ' ',
            nomemae: " ",
            nomeservidor: " ",
            numficha: " ",
            orgaoexp: " ",
            rg: " ",
            uf: " "
        })
     }

    return (
    
        <div id="pagination_div">
            {letters.map((buttonE,i) => <button id="button_letter" name={buttonE}  onClick={(event) => handleClick(event)}> 
                {buttonE} 
                </button>)}
       </div>
    )
}

export default Pagination
