import React, {useState, useEffect} from 'react'
import userPhoto from '../images/imageTopProfile.png';
import SearchBar from '../components/SearchBar';
import {navigate } from 'hookrouter';

import './TopBar.css';

function TopBar(props) {
const isCommonUser = JSON.parse(localStorage.getItem('isCommonUser'));

const userName = () => {
  console.log(isCommonUser == false);
  if(isCommonUser === true) {
    return 'Usuário não logado';
  }
  if (isCommonUser === false) {
    return 'Administrador';
  }    
}
    return (
        <div id="topbar-body">
       < SearchBar />
        <div id="topbar-section">
          <img id="userPhoto" src={userPhoto}  alt=""/> 
          <h2 id="userName"> {userName()} </h2>
          <button onClick={() => {
            localStorage.clear();
            navigate('/')
            }}>Sair </button>
        </div>
        </div>
 
    )
}

export default TopBar
