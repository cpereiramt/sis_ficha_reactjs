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
    const [enabled, setEnabled] = useState();


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
        if(props.formStatus === "ALTERAR" || props.formStatus === 'CADASTRAR') {
            setEnabled(false);
        }
        else {
            setEnabled(true); 
        }
    }, [data, props.formStatus ])

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
             {console.log(props)} 
             {props.formStatus === 'INITIAL' &&   <h1  id="header_form"> selecione uma opção </h1>}
             {props.formStatus === 'CADASTRAR' && <h1  id="header_form"> Cadastro de Ficha </h1>}             
             {props.formStatus === 'ALTERAR' && <h1  id="header_form"> Alterar Ficha </h1>}             
             {props.formStatus === 'EXCLUIR' && <h1  id="header_form"> Excluir Ficha </h1>}             

               <label htmlFor="NUMFICHA">NUMFICHA</label>
               <input type="text" name="NUMFICHA" value={numFicha} disabled={enabled} onChange={changeNumFichaInput} size="5"/> 
               <label htmlFor="MATRICULA">MATRICULA</label>
               <input type="text" name="MATRICULA" size="6" value={matricula}  disabled={enabled} onChange={changeMatriculaInput} />
               <label htmlFor="NOMESERVIDOR">NOME SERVIDOR</label>
               <input type="text" name="NOMESERVIDOR" size="33" value={nomeServidor}  disabled={enabled} onChange={changeNomeServidorInput} />
               <label htmlFor="NOMEMAE">NOME MAE</label>
               <input type="text" name="NOMEMAE" size="33" value={nomeMae}  disabled={enabled} onChange={changeNomeMae} />
           </div>
           <div className="row2">
               <label htmlFor="DTNASC"> DTNASC </label>
               <input type="text" name="DTNASC" size="4"  value={dtNasc}  disabled={enabled} onChange={changeDtNascInput} />
               <label htmlFor="CPF"> CPF </label>
               <input type="text" name="CPF" size="7" value={cpf}  disabled={enabled} onChange={changeCPFInput} />
               <label htmlFor="CODLOCAL">CODLOCAL</label>
               <select name="CODLOCAL" value={codLocal}  disabled={enabled} onChange={changeCodLocalSelect}  >
                <option value="1">1</option>
                </select> 
                <label htmlFor="ESTANTE">ESTANTE</label>
                <select name="ESTANTE"  disabled={enabled}>
                <option value="1">1</option>
                </select> 
                <label htmlFor="PRATELEIRA">PRATELEIRA</label>
                <select name="PRATELEIRA"  disabled={enabled}>
                <option value="1">1</option>
                </select>              
           </div>
           <div className="row3">
           <label htmlFor="RG">RG</label>
               <input type="text" size="4" value={rg}  disabled={enabled} onChange={changeRgInput} />
               <label htmlFor="ORGAOEXP" >ORGAOEXP</label>
               <input type="text" size="1" value={orgaoExp}  disabled={enabled} onChange={changeOrgaoExpInput} />
           <label htmlFor="UF" >UF</label>
                <select name="UF" value={uf}  disabled={enabled} onChange={changesetUfSelect} >
                <option value="MT"> MT </option>
                </select> 
           </div>
           {props.formStatus === 'INITIAL' &&  null}
             {props.formStatus === 'CADASTRAR' && <><button>Salvar registro </button> <button onClick={props.function} >Cancelar</button></>}             
             {props.formStatus === 'ALTERAR' &&  <><button>Alterar registro </button> <button onClick={props.function}>Cancelar</button></>}             
             {props.formStatus === 'EXCLUIR' &&  <><button>Excluir registro </button> <button onClick={props.function}>Cancelar</button></>}   
        </div>
    )
}

export default FormData;
