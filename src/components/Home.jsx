import React, { useEffect,useState } from 'react';
import brasao from '../images/brasao_estado_cor.png'
import './Home.css';
import {navigate} from 'hookrouter';

function Home() {
    const [page, setPage ] = useState(0);
    function redirect(){
        navigate('/TelaPrincipal',true)
    }
    useEffect(() => {
        setPage(1);
    }, [])
    return (
        <div>
           <img id="brasao_inicio" src={brasao} alt=""/>
           <div id="div_body">
           <h1 id="Home_h1">Tela Inicial Sisficha !</h1>
           <button id="Home_button" onClick={() => redirect() }>Login With Google</button>
           </div>
        </div>
    )
}

export default Home
