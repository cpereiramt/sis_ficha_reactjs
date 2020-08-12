import React from 'react'
import './Main.css';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import TableData from '../components/TableData';

function Main() {
    return (
        <div>
            <div id="body-div">
            <TopBar />
            < SearchBar />
            <TableData />
            </div>
        </div>
    )
}

export default Main
