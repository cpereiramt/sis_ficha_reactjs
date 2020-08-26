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
    const { loginWithRedirect, error , logout} = useAuth0();
    const { user, isAuthenticated } = useAuth0();
    const [userLogged, setUserLogged ] = useState();
    const [isAuth, setIsAuth] = useState();

/* 
    useEffect(() => {
        setUserLogged(user);
        setIsAuth(isAuthenticated);
    }, [isAuth]) */
    const handleLogin = async () => {
        await loginWithRedirect();
    }

    return (
        <div id="home-body">
           { isAuthenticated 
           ? navigate('/TelaPrincipal',false)
           : <> 
           <img id="brasao_inicio" src={brasao} alt=""/>
           <div id="div_body">
           <h1 id="Home_h1">Tela Inicial Sisficha !</h1>
           <button id="Home_button" onClick={() => handleLogin()}>Login</button>
           </div>  {console.log(error)}</>
           }           
        </div>
    )
}

export default Home
