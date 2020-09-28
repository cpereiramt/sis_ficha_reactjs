import React, {useState, useEffect} from 'react'
import userPhoto from '../images/imageTopProfile.png';
import SearchBar from '../components/SearchBar';
import {navigate } from 'hookrouter';

import './TopBar.css';

function TopBar(props) {

    return (
        <div id="topbar-body">
       < SearchBar query={props.state} handleSearchClick={props.function}/>
        <div id="topbar-section">
          <img id="userPhoto" src={userPhoto}  alt=""/> 
          <h2 id="userName"> UserName </h2>
          <button onClick={() => navigate('/TelaPrincipal')}>Sair </button>
        </div>
        </div>
 
    )
}

export default TopBar
