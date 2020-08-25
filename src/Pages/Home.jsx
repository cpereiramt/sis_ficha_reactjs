import React, { useEffect,useState } from 'react';
import brasao from '../images/brasao_estado_cor.png'
import './Home.css';
import {navigate} from 'hookrouter';
import { useAuth0 } from "@auth0/auth0-react";


function Home(props) {
/*     const [page, setPage ] = useState(0);
    function redirect(){
        navigate('/TelaPrincipal',true)
    }
    useEffect(() => {
        setPage(1);
    }, []) */
    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated } = useAuth0();
    const [userLogged, setUserLogged ] = useState();
    const [isAuth, setIsAuth] = useState();


    useEffect(() => {
        setUserLogged(user);
        setIsAuth(isAuthenticated);
    }, [isAuthenticated])

    return (
        <div id="home-body">
           { isAuth 
           ? navigate('/TelaPrincipal',false)
                     :<> <img id="brasao_inicio" src={brasao} alt=""/>
           <div id="div_body">
           <h1 id="Home_h1">Tela Inicial Sisficha !</h1>
           <button id="Home_button" onClick={() => loginWithRedirect()}>Login</button>
           </div> </> }
           
        </div>
    )
}

export default Home
