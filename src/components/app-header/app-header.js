import React from 'react';

import './app-header.css'
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'black' : 'red'}; 
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }`


const AppHeader = ({liked, allPosts}) => {
    // Making it static then we will change it
    return (
        <Header colored> 
            <h1>Abdullaev Abdulaziz</h1>
            <h2>{allPosts} post, {liked} was liked</h2>
        </Header>
        // for example we wanna change div to anchor element
        // <Header as='a' colored> 
        //     <h1>Abdullaev Abdulaziz</h1>
        //     <h2>5 post, 0 was liked</h2>
        // </Header>
    )   
}
// We made appHeader and exported it to use

export default AppHeader;