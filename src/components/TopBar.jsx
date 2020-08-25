import React, {useState, useEffect} from 'react'
import userPhoto from '../images/imageTopProfile.png';
import SearchBar from '../components/SearchBar';
import { useAuth0 } from "@auth0/auth0-react";

import './TopBar.css';

function TopBar(props) {
  const { logout  } = useAuth0();


    return (
        <div id="topbar-body">
       < SearchBar />
       {console.log(props.user)}
        <div id="topbar-section">
          <img id="userPhoto" src={props.user.picture}  alt=""/> 
          <h2 id="userName"> {props.user.name} </h2>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Sair </button>
        </div>
        </div>
 
    )
}

export default TopBar
