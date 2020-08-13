import React from 'react'
import userPhoto from '../images/imageTopProfile.png';
import './TopBar.css';

function TopBar() {
    return (
        <div>
          <img id="userPhoto" src={userPhoto} alt=""/> 
          <h2 id="userName"> Username </h2>
        </div>
    )
}

export default TopBar
