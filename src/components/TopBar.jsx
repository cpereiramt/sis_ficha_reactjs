import React from 'react'
import userPhoto from '../images/imageTopProfile.png';
import SearchBar from '../components/SearchBar';

import './TopBar.css';

function TopBar() {
    return (
        <div id="topbar-body">
       < SearchBar />
        <div id="topbar-section">
          <img id="userPhoto" src={userPhoto} alt=""/> 
          <h2 id="userName"> Username </h2>
        </div>
        </div>
 
    )
}

export default TopBar
