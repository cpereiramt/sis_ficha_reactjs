import React, {useState, useEffect} from 'react';
import {CreateRegister,AlterRegister,DeleteRegister} from '../helpers/ApiHelpers';
import './FormData.css';
import {validateData } from '../helpers/Validation';

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
    const [uf, setUf] = useState([]);
    const [enabled, setEnabled] = useState();
    const [estante, setEstantes] = useState([]);
 
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
        setUf(['AC','AL','AP','AM','BA','CE','DF','ES',
        'GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS',
        'RO','RR','SC','SP','SE','TO']);
        if(props.formStatus === "ALTERAR" || props.formStatus === 'CADASTRAR') {
            setEnabled(false);
        }
        else {
            setEnabled(true); 
        }
    }, [data, props.formStatus ])

    useEffect(() => {        
            fetch('http://172.16.104.97:3002/estantes')
            .then(response => response.json())
            .then(estantesData => setEstantes(estantesData))   
   }, [props.formStatus])
    
   const saveRegister = () => { 
       
      const result = validateData({numFicha,
        matricula,
        nomeServidor,
        nomeMae,
        dtNasc,
        cpf,
        codLocal,
        rg,
        orgaoExp,
        uf });
       if (result ) {
    CreateRegister({numFicha,
        matricula,
        nomeServidor,
        nomeMae,
        dtNasc,
        cpf,
        codLocal,
        rg,
        orgaoExp,
        uf })
        props.setFormStatus('INITIAL');
   
    }
    else {
       alert("dados inseridos incorretamente !");
    }
    }

   const AlterarRegistro = () => {

    AlterRegister({numFicha,
        matricula,
        nomeServidor,
        nomeMae,
        dtNasc,
        cpf,
        codLocal,
        rg,
        orgaoExp,
        uf })
   }

   const ExcluirRegistro = () => {
    DeleteRegister({numFicha})
   }
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
        console.log(cpf)
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
        setUf([event.target.value]);   
    }
    let uf_select = document.getElementsByName('UF');

    return (
           <form id="form_id">
           <div className="row1"> 
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
               <input type="date" placeholder="dd/mm/yyyy" name="DTNASC" size="4" value={dtNasc}  disabled={enabled} onChange={changeDtNascInput} />
               <label htmlFor="CPF"> CPF </label>
               <input type="text" name="CPF" size="10" value={cpf}  disabled={enabled} onChange={changeCPFInput} />
               <label htmlFor="CODLOCAL">Arquivando em:</label>
               <select name="CODLOCAL" value={codLocal}  disabled={enabled} onChange={changeCodLocalSelect}  >
                <option value="0">selecione uma opção </option>
                {estante.map((element,i) =>
                  <option value={element.codlocal}>{`CodLocal : ${element.codlocal} || Estante: ${element.numestante} || Prateleira: ${element.numprateleira} `}</option>
                )}               
                </select>        
           </div>
           <div className="row3">
           <label htmlFor="RG">RG</label>
               <input type="text" size="4" value={rg}  disabled={enabled} onChange={changeRgInput} />
               <label htmlFor="ORGAOEXP" >ORGAOEXP</label>
               <input type="text" size="1" value={orgaoExp}  disabled={enabled} onChange={changeOrgaoExpInput} />
                <select name="UF" defaultvalue={uf}  disabled={enabled} onChange={changesetUfSelect} >
                <option value=" ">Selecione a UF </option>)
                {uf.map((element,i) => {
                    
                  if(uf_select[0].options[i] !== undefined ) {
                  if(uf_select[0].options[i].value === data.uf) {
                    uf_select[0].selectedIndex = i;
                  } 
                  console.log(data.uf)
                if (data.uf === "") {
                    uf_select[0].selectedIndex = 0;
                  }                   
                }   
                   return <option value={element} >{element}</option> })
                }        
                </select> 
           </div>
           {props.formStatus === 'INITIAL' &&  null}
             {props.formStatus === 'CADASTRAR' && 
             <><button onClick={() =>  saveRegister()}>Salvar registro </button> 
             <button onClick={props.function} >Cancelar</button></>}             
             {props.formStatus === 'ALTERAR' &&  
             < ><button onClick={() => AlterarRegistro() }>Alterar registro </button> 
             <button onClick={props.function}>Cancelar</button></>}             
             {props.formStatus === 'EXCLUIR' &&  
             <><button onClick={() => ExcluirRegistro()}>Excluir registro </button> 
             <button onClick={props.function}>Cancelar</button></>}   
        </form>
    )
}

export default FormData;
