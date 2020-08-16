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
    const [formStatus, setFormStatus ] = useState("INITIAL");
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

     const TableDataClick = (data) => {
        setFormData(data);
     }

    const changeFormStatusClick = (event) => {
     console.log(event.target.name);
     switch (event.target.name) {
         case "Cadastrar":
             setFormData( {   
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
            setFormStatus("CADASTRAR");
             break;
         case "Alterar":
             if(formData.numficha === " " && formData.nomeservidor === " " && formData.cpf === " " ) {
                 alert("selecione um registro para Alterar ")
             } else {
            setFormStatus("ALTERAR");
             }
             break;
        case "Excluir":
            if(formData.numficha === " " && formData.nomeservidor === " " && formData.cpf === " " ) {
                alert("selecione um registro para Excluir ")
            } else {
             setFormStatus("EXCLUIR");
            }
             break;     
        
     }
    
    
    }

   const changeFOrmStatusOnCancel = () =>  {
    setFormData( {   
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
        setFormStatus('INITIAL');
    }

    useEffect(() => {
        fetch('http://localhost:3002/fichas/' + filterLetter)
        .then(response => response.json())
        .then(data => setData(data))
     },[filterLetter])
     
  
    return (
        <div>
            <div id="body-div">                
            <TopBar />
            < SearchBar />
             <TableData result={data} function={TableDataClick}/> 
            <Pagination function={ChangeLetter} />
            <FormData data={formData} formStatus={formStatus} function={changeFOrmStatusOnCancel}/>
            <Buttons style_id="btn_cadastrar" text="Cadastrar" function={changeFormStatusClick} formStatus={formStatus}></Buttons>
            <Buttons style_id="btn_alterar" text="Alterar" function={changeFormStatusClick} formStatus={formStatus} ></Buttons>
            <Buttons style_id="btn_excluir" text="Excluir" function={changeFormStatusClick} formStatus={formStatus} ></Buttons>
            </div>
        </div>
    )
}

export default Main
