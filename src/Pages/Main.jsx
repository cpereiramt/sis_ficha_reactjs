import React, { useEffect, useState } from 'react'
import './Main.css';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import TableData from '../components/TableData';
import FormData from '../components/FormData';
import Buttons from '../components/Buttons';

function Main() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/fichas/a')
        .then(response => response.json())
        .then(data => setData(data))
     },[])

    return (
        <div>
            <div id="body-div">                
            <TopBar />
            < SearchBar />
            <TableData result={data} />
            <FormData/>
            <Buttons style_id="btn_cadastrar" text="Cadastrar"></Buttons>
            <Buttons style_id="btn_alterar" text="Alterar"></Buttons>
            <Buttons style_id="btn_excluir" text="Excluir"></Buttons>
            </div>
        </div>
    )
}

export default Main
