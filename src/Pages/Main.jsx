import React, { useEffect, useState } from 'react'
import './Main.css';
import TopBar from '../components/TopBar';
import TableData from '../components/TableData';
import FormData from '../components/FormData';
import Buttons from '../components/Buttons';
import Pagination from '../components/Pagination';
import { useAuth0 } from "@auth0/auth0-react";
import {navigate} from 'hookrouter';


function Main() {
    const { user, isAuthenticated  } = useAuth0();
    const [isloading, setIsLoading ] = useState(false);
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
       setFormStatus("INITIAL");
        setFormData(data);
     }

    const changeFormStatusClick = (event) => {
     switch (event.target.name) {
         case "Cadastrar":
            const allRows= document.getElementsByTagName('tr');
            const allRowsActive = Array.from(allRows); 
            allRowsActive.map(element => element.removeAttribute('id', 'selected_TableRow'))
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
    const allRows= document.getElementsByTagName('tr');
    const allRowsActive = Array.from(allRows); 
    allRowsActive.map(element => element.removeAttribute('id', 'selected_TableRow'))
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
         fetch('http://176.16.104.97:3002/fichas/' + filterLetter)
        .then(response =>
            {
            setIsLoading(true);
           return response.json()})
        .then(data => { 
            setIsLoading(false);
            return setData(data);                   
        })
     },[filterLetter])     
  
     return (       
        <div id="body-div">
         { isloading
            ? <> <TopBar data={isAuthenticated} user={user} />
            <TableData loading={isloading}/>
            <h1> </h1>
            </> 
            : <>
           <TopBar data={isAuthenticated} user={user}/>
           <TableData result={data} function={TableDataClick}/>          
           <Pagination function={ChangeLetter} functionTable={TableDataClick} />
           <FormData data={formData} formStatus={formStatus} setFormStatus={setFormStatus} function={changeFOrmStatusOnCancel}/>
            {formStatus === "INITIAL" &&  
           <div id="button-body"><Buttons style_id="btn_cadastrar" text="Cadastrar" function={changeFormStatusClick} formStatus={formStatus}></Buttons>
           <Buttons style_id="btn_alterar" text="Alterar" function={changeFormStatusClick} formStatus={formStatus} ></Buttons>
           <Buttons style_id="btn_excluir" text="Excluir" function={changeFormStatusClick} formStatus={formStatus} ></Buttons></div>}
           </>  
        }             
         </div>       
    
)

}

export default Main
