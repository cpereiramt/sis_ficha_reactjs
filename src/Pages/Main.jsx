import React, { useEffect, useState } from 'react'
import './Main.css';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import TableData from '../components/TableData';
import FormData from '../components/FormData';
import Buttons from '../components/Buttons';
import Pagination from '../components/Pagination'

function Main() {
    const [data, setData] = useState([]);
    const [filterLetter, setFilterLetter] = useState("A");
    const [formData, setFormData] = useState(
        {   codlocal: " ",
            cpf: " ",
            dtnasc: " ",
            matricula: ' ',
            nomemae: " ",
            nomeservidor: " ",
            numficha: " ",
            orgaoexp: " ",
            rg: " ",
            uf: " "
        }
    );

    const ChangeLetter = (letter) => {
      setFilterLetter(letter);      
     }

    useEffect(() => {
        fetch('http://localhost:3002/fichas/' + filterLetter)
        .then(response => response.json())
        .then(data => setData(data))
     },[filterLetter])
     
     const TableDataClick = (data) => {
        setFormData(data);
     }

    return (
        <div>
            <div id="body-div">                
            <TopBar />
            < SearchBar />
             <TableData result={data} function={TableDataClick}/> 
            <Pagination function={ChangeLetter} />
            <FormData data={formData}/>
            <Buttons style_id="btn_cadastrar" text="Cadastrar"></Buttons>
            <Buttons style_id="btn_alterar" text="Alterar"></Buttons>
            <Buttons style_id="btn_excluir" text="Excluir"></Buttons>
            </div>
        </div>
    )
}

export default Main
