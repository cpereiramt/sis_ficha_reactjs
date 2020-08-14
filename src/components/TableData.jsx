import React, { useState, useEffect} from 'react'
import './TableData.css'

function TableData(props) {
   const [tableData, setTableData] = useState([]);

   useEffect(() => {
    setTableData(props.result)
   },[props.result]);
    return (
        <div>
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
             {tableData.map(element => <tr>
                 <td>{element.numficha}</td>
                 <td>{element.matricula}</td>
                 <td> {element.nomeservidor} </td>
                  <td>{element.dtnasc}</td>
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
