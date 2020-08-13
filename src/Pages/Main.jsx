import React, { useEffect } from 'react'
import './Main.css';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import TableData from '../components/TableData';
import FormData from '../components/FormData';
import Buttons from '../components/Buttons';

function Main() {
    

    useEffect(() => {
        fetch('https://api.npms.io/v2/search?q=react')
        .then(response => response.json())
        .then(data => console.log(data))
     })

    return (
        <div>
            <div id="body-div">
            <TopBar />
            < SearchBar />
            <TableData />
            <FormData/>
            <Buttons style_id="btn_cadastrar" text="Cadastrar"></Buttons>
            <Buttons style_id="btn_alterar" text="Alterar"></Buttons>
            <Buttons style_id="btn_excluir" text="Excluir"></Buttons>
            </div>
        </div>
    )
}

export default Main
