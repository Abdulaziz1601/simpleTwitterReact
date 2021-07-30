import React, { Component } from 'react';

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


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: false, id: 'asd'},
                {label: 'Do my homework', important: false, id: 'qwe'},
                {label: 'I love coding', important: false, id: 'awd'}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id) {
        // We cannot mutate data AKA state
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
        //     data.splice(index, 1);
        //     return {
        //         data: data
        //     }
        // });

        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            // We are not directly changing the array
            // We are just creating new Array, without deleted post
            // So we can assign to data thet new array without post that we wanted to delete
        
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [... before, ...after]; // immutability
            
            // clean CODE
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr // created new arr and changed old arr to new arr
            }
        });

        // Another way to delete data
        // this.setState({
        //     data: this.state.data.filter(item => item.id !== id)
        // });

    }

    render() {
        return (
            <AppBlock>
                {/* Simple usage of components */}
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem} />
                <PostAddForm/>
            </AppBlock>
        )
    }

    
}

// To delete the post we've to use state and manipulate it dynamically, hence we will change our component to class-componenet
// const App = () => {
//     // react has reconciliation algorithm, so each element has key property to
//     // know which element to we wanna change and rerender
//     const data = [
//         {label: 'Going to learn React', important: true, id: 'asd'},
//         {label: 'Do my homework', important: false, id: 'wer'},
//         {label: 'I love coding', important: false, id: 'ref'}
//     ];
//     return (
//         <AppBlock>
//             {/* Simple usage of components */}
//             <AppHeader/>
//             <div className="search-panel d-flex">
//                 <SearchPanel/>
//                 <PostStatusFilter/>
//             </div>
//             <PostList 
//                 posts={data}
//                 onDelete={id => console.log(id) } />
//             <PostAddForm/>
//         </AppBlock>
//     )
// }

// export default App;