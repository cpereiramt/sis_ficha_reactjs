import React, {useState }  from 'react';
import './SearchBar.css';
import LupaIcon from '../images/LupaIcon.png'

function SearchBar(props) {
    const [input, setInput ] = useState(" ");
    const [drop, setDrop] = useState("nomeservidor");
    const handleSearchDropChange = (event) => {
      setDrop(event.target.value);
    }
    const handleSearchInputChange = (event) => {
      setInput(event.target.value);
      }

    const send_search = (fieldLocal,queryLocal) => {
        if(queryLocal === " ") {
            alert("Preencha as informações para consulta !") ;
        } else {
        props.handleSearchClick(fieldLocal, queryLocal);
    }
}

    return (
        <div id="search_background"> 
            <h1 id="search_label"> Pesquisar por : </h1>
            <select id="combo_box_search" value={drop} onChange={(event) => handleSearchDropChange(event)}>
                <option value="nomeservidor">
                    Nome Servidor
                </option >
                <option value="matricula">
                    Matricula
                </option>
                <option value="cpf">
                    CPF
                </option>
            </select>
            <input id="input_search" type="text" value={input} onChange={(event) => handleSearchInputChange(event)}/>
            <button><img id="icon_search" src={LupaIcon} alt="search" onClick={() => send_search(drop,input)}></img></button>
        </div>
    )
}

export default SearchBar
