import React, { useEffect,useState } from 'react';
import brasao from '../images/brasao_estado_cor.png'
import './Home.css';
import {navigate} from 'hookrouter';
import useModal from '../hooks/useModal';
import Modal from '../components/Modal';


function Home(props) {
     const [page, setPage ] = useState(0);
     const {isShowing, toggle} = useModal();
     const [state,setState] = useState(false);
     const [password, setPassword] = useState(0);
 
    useEffect(() => {
        setPage(1);
    }, []) 

    
    const handleLogin = async () => {
        localStorage.setItem('isCommonUser',true);
        navigate('/TelaPrincipal');
    }
    
    const handleAdminAcess = async () => {
        toggle();      
        setState(isShowing);
        const password_admin = 'mtp@2020_123456'
        const enteredSenha = prompt('Insira a senha do administrador para prossegir !')
        if( password_admin === enteredSenha ) {
         localStorage.setItem('isCommonUser',false);   
        navigate('/TelaPrincipal');
        }
        else {
            alert("Senha do administrador incorreta !")
        }
    }
    return (
        <div id="home-body">
           <img id="brasao_inicio" src={brasao} alt=""/>
           <div id="div_body">
           <h1 id="Home_h1">Tela Inicial Sisficha !</h1>
           <button class="Home_button" onClick={() => handleLogin()}>Acesso para consulta</button>
           <button class="Home_button" onClick={() => handleAdminAcess()}>Acessar como Administrador</button>
           </div>
           <Modal
           password = {password}
           setPassword = {setPassword}
           isShowing={isShowing}
           hide={toggle}
          />          
        </div>
    )
}

export default Home
