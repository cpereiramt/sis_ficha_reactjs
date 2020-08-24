import React, { useState, useEffect} from 'react'
import './TableData.css'
import {dateFormat } from '../helpers/formatData'
import FormData from './FormData';

function TableData(props) {
   const [tableData, setTableData] = useState([]);

   useEffect(() => {
    setTableData(props.result)
   },[props.result]);

   function clickHandle(element,event) {
    const allRows= document.getElementsByTagName('tr');
    const allRowsActive = Array.from(allRows); 
    allRowsActive.map(element => element.removeAttribute('id', 'selected_TableRow'))
    event.target.parentNode.setAttribute('id','selected_TableRow');
    props.function(element)
   }

    return (
        <div id="table_div">
           <table id="table">
           <thead>
               <tr>
               <th>NUMFICHA</th>
               <th>MATRICULA</th>
               <th>NOME SERVIDOR</th>
               <th>Data De Nascimento</th>
               <th>CPF</th>
               <th>RG</th>
               <th>ORGAO EXP.</th>
               <th>UF</th>
               </tr>
          </thead>
           <tbody>
               {props.loading 
                ? <h1 id="loading-indicator">carregando ... </h1> 
                : tableData.map(element => <tr onClick={(event) => clickHandle(element,event) }>
                <td>{element.numficha}</td>
                <td>{element.matricula}</td>
                <td> {element.nomeservidor} </td>
                 <td>{dateFormat(element.dtnasc)}</td>
                <td>{element.cpf}</td>
            <td>{element.rg}</td>
                <td>{element.orgaoexp}</td>
            <td>{element.uf}</td>
             </tr>)} 
               
             
           </tbody>     
           </table> 
        </div>
    )
}

export default TableData
