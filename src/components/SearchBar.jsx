import React from 'react';
import './SearchBar.css';
import LupaIcon from '../images/LupaIcon.png'

function SearchBar() {
    return (
        <div id="search_background"> 
            <h1 id="search_label"> Pesquisar por : </h1>
            <select id="combo_box_search">
                <option>
                    Nome Servidor
                </option>
                <option>
                    CPF
                </option>
            </select>
            <input id="input_search" type="text"/>
            <img id="icon_search" src={LupaIcon} alt="search"></img>
        </div>
    )
}

export default SearchBar
