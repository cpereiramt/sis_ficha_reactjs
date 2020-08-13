import React from 'react';
import './FormData.css';

function FormData() {
    return (
        <div id="form_id">
           <div className="row1">
               <h1 id="header_form">Header da Operação </h1>
               <label htmlFor="NUMFICHA">NUMFICHA</label>
               <input type="text" name="NUMFICHA" size="5"/> 
               <label htmlFor="MATRICULA">MATRICULA</label>
               <input type="text" name="MATRICULA" size="6"/>
               <label htmlFor="NOMESERVIDOR">NOME SERVIDOR</label>
               <input type="text" name="NOMESERVIDOR" size="33"/>
               <label htmlFor="NOMEMAE">NOME MAE</label>
               <input type="text" name="NOMEMAE" size="33"/>
           </div>
           <div className="row2">
               <label htmlFor="DTNASC"> DTNASC </label>
               <input type="text" name="DTNASC" size="4"/>
               <label htmlFor="CPF"> CPF </label>
               <input type="text" name="CPF" size="7"/>
               <label htmlFor="CODLOCAL">CODLOCAL</label>
               <select name="CODLOCAL">
                <option value="1">1</option>
                </select> 
                <label htmlFor="ESTANTE">ESTANTE</label>
                <select name="ESTANTE">
                <option value="1">1</option>
                </select> 
                <label htmlFor="PRATELEIRA">PRATELEIRA</label>
                <select name="PRATELEIRA">
                <option value="1">1</option>
                </select>              
           </div>
           <div className="row3">
           <label htmlFor="RG">RG</label>
               <input type="text" size="4"/>
               <label htmlFor="ORGAOEXP" >ORGAOEXP</label>
               <input type="text" size="1"/>
           <label htmlFor="UF">UF</label>
                <select name="UF">
                <option value="MT"> MT </option>
                </select> 
           </div>
        </div>
    )
}

export default FormData;
