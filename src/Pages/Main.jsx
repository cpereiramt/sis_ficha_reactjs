import React from 'react'
import './Main.css';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';

function Main() {
    return (
        <div>
            <div id="body-div">
            <TopBar />
            < SearchBar />
            </div>
        </div>
    )
}

export default Main
