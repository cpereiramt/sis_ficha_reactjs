import React, { useEffect,useState } from 'react';
import brasao from '../images/brasao_estado_cor.png'
import './Home.css';
import {navigate} from 'hookrouter';


function Home(props) {
     const [page, setPage ] = useState(0);
    function redirect(){
        navigate('/TelaPrincipal',true)
    }
    useEffect(() => {
        setPage(1);
    }, []) 

    
    const handleLogin = async () => {
        navigate('/TelaPrincipal');
    }

    return (
        <div id="home-body">
           <img id="brasao_inicio" src={brasao} alt=""/>
           <div id="div_body">
           <h1 id="Home_h1">Tela Inicial Sisficha !</h1>
           <button id="Home_button" onClick={() => handleLogin()}>Login</button>
           </div>           
        </div>
    )
}

export default Home
