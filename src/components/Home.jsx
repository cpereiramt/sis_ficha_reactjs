import React from 'react';
import brasao from '../images/brasao_estado_cor.png'
import './Home.css';

function Home() {
    return (
        <div>
           <img id="brasao_inicio" src={brasao} alt=""/>
           <div id="div_body">
           <h1 id="Home_h1">Tela Inicial Sisficha !</h1>
           <button id="Home_button" onClick={() => console.log("Teste de clique")}>Login With Google</button>
           </div>
        </div>
    )
}

export default Home
