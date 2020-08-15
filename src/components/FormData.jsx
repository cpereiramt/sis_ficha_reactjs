import React, {useState, useEffect} from 'react';
import './FormData.css';

function FormData(props) {
 
    const {data } = props ;
    const [numFicha, setNumFicha] = useState();
    const [matricula, setMatricula] = useState();
    const [nomeServidor, setNomeServidor] = useState();
    const [nomeMae, setNomeMae] = useState();
    const [dtNasc, setDtNasc] = useState();
    const [cpf, setCPF] = useState();
    const [codLocal, setCodLocal] = useState();
    const [rg, setRg] = useState();
    const [orgaoExp, setOrgaoExp] = useState();
    const [uf, setUf] = useState();

    useEffect(() => {
        setNumFicha(data.numficha);
        setMatricula(data.matricula);
        setNomeServidor(data.nomeservidor);
        setNomeMae(data.nomemae);
        setDtNasc(data.dtnasc);
        setCPF(data.cpf);
        setCodLocal(data.codlocal);
        setRg(data.rg);
        setOrgaoExp(data.orgaoexp);
        setUf(data.uf);
    }, [data])

    const changeNumFichaInput = (event) => {
        setNumFicha(event.target.value);
    }
    const changeMatriculaInput = (event) => {
        setMatricula(event.target.value);
    }
    const changeNomeServidorInput = (event) => {
        setNomeServidor(event.target.value);
    }
    const changeNomeMae = (event) => {
        setNomeMae(event.target.value);
    }
    const changeDtNascInput = (event) => {
        setDtNasc(event.target.value);
    }
    const changeCPFInput = (event) => {
        setCPF(event.target.value);
    }
    const changeCodLocalSelect = (event) => {
        setCodLocal(event.target.value);
    }
    const changeRgInput = (event) => {
        setRg(event.target.value);
    }
    const changeOrgaoExpInput = (event) => {
        setOrgaoExp(event.target.value);
    }
    const changesetUfSelect = (event) => {
        setUf(event.target.value);
    }
    
    return (
           <div id="form_id">
           <div className="row1">
               <h1 id="header_form">Header da Operação </h1>
               <label htmlFor="NUMFICHA">NUMFICHA</label>
               <input type="text" name="NUMFICHA" value={numFicha} disabled onChange={changeNumFichaInput} size="5"/> 
               <label htmlFor="MATRICULA">MATRICULA</label>
               <input type="text" name="MATRICULA" size="6" value={matricula} disabled onChange={changeMatriculaInput} />
               <label htmlFor="NOMESERVIDOR">NOME SERVIDOR</label>
               <input type="text" name="NOMESERVIDOR" size="33" value={nomeServidor} disabled onChange={changeNomeServidorInput} />
               <label htmlFor="NOMEMAE">NOME MAE</label>
               <input type="text" name="NOMEMAE" size="33" value={nomeMae} disabled onChange={changeNomeMae} />
           </div>
           <div className="row2">
               <label htmlFor="DTNASC"> DTNASC </label>
               <input type="text" name="DTNASC" size="4"  value={dtNasc} disabled onChange={changeDtNascInput} />
               <label htmlFor="CPF"> CPF </label>
               <input type="text" name="CPF" size="7" value={cpf} disabled onChange={changeCPFInput} />
               <label htmlFor="CODLOCAL">CODLOCAL</label>
               <select name="CODLOCAL" value={codLocal} disabled onChange={changeCodLocalSelect}  >
                <option value="1">1</option>
                </select> 
                <label htmlFor="ESTANTE">ESTANTE</label>
                <select name="ESTANTE" disabled>
                <option value="1">1</option>
                </select> 
                <label htmlFor="PRATELEIRA">PRATELEIRA</label>
                <select name="PRATELEIRA" disabled>
                <option value="1">1</option>
                </select>              
           </div>
           <div className="row3">
           <label htmlFor="RG">RG</label>
               <input type="text" size="4" value={rg} disabled onChange={changeRgInput} />
               <label htmlFor="ORGAOEXP" >ORGAOEXP</label>
               <input type="text" size="1" value={orgaoExp} disabled onChange={changeOrgaoExpInput} />
           <label htmlFor="UF" >UF</label>
                <select name="UF" value={uf} disabled onChange={changesetUfSelect} >
                <option value="MT"> MT </option>
                </select> 
           </div>
        </div>
    )
}

export default FormData;
