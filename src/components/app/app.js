import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`; // created div element, that use above styles

// If we wanna reuse AppBlock, By creating new styled component
// and saving previous styles
const StyledAppBlock = styled(AppBlock)`
    background-color: grey;
`;

const App = () => {
    // react has reconciliation algorithm, so each element has key property to
    // know which element to we wanna change and rerender
    const data = [
        {label: 'Going to learn React', important: true, id: 'asd'},
        {label: 'Do my homework', important: false, id: 'wer'},
        {label: 'I love coding', important: false, id: 'ref'}
    ];
    return (
        <AppBlock>
            {/* Simple usage of components */}
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;