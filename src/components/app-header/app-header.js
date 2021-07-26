import React from 'react';

import './app-header.css'

const AppHeader = () => {
    // Making it static then we will change it
    return (
        <div className="app-header d-flex"> 
            <h1>Abdullaev Abdulaziz</h1>
            <h2>5 post, 0 was liked</h2>
        </div>
    )   
}
// We made appHeader and exported it to use

export default AppHeader;