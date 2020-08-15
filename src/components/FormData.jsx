import React, {useState } from 'react';
import './FormData.css';

function FormData(props) {
 
    const {data } = props ;
    const [numFicha, setNumFicha] = useState();
    const changeNumFichaInput = (event) => {
        setNumFicha(event.target.value);
    }
    return (
           <div id="form_id">
            {console.log(props.data)}
           <div className="row1">
               <h1 id="header_form">Header da Operação </h1>
               <label htmlFor="NUMFICHA">NUMFICHA</label>
               <input type="text" name="NUMFICHA" value={data.matricula} onchange={changeNumFichaInput} size="5"/> 
               <label htmlFor="MATRICULA">MATRICULA</label>
               <input type="text" name="MATRICULA" size="6" value={data.matricula}/>
               <label htmlFor="NOMESERVIDOR">NOME SERVIDOR</label>
               <input type="text" name="NOMESERVIDOR" size="33" value={data.nomeservidor}/>
               <label htmlFor="NOMEMAE">NOME MAE</label>
               <input type="text" name="NOMEMAE" size="33" value={data.nomemae}/>
           </div>
           <div className="row2">
               <label htmlFor="DTNASC"> DTNASC </label>
               <input type="text" name="DTNASC" size="4" value={data.dtnasc}/>
               <label htmlFor="CPF"> CPF </label>
               <input type="text" name="CPF" size="7" value={data.cpf}/>
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
               <input type="text" size="4" value={data.rg}/>
               <label htmlFor="ORGAOEXP" >ORGAOEXP</label>
               <input type="text" size="1" value={data.orgaoexp}/>
           <label htmlFor="UF">UF</label>
                <select name="UF">
                <option value="MT"> MT </option>
                </select> 
           </div>
        </div>
    )
}

export default FormData;
