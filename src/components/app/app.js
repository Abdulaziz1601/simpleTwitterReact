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
                {label: 'Going to learn React', important: false, like: false, id: 1},
                {label: 'Do my homework', important: false, like: false, id: 2},
                {label: 'I love coding', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
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

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArray = [...data, newItem];
            return {
                data: newArray
            }
        }) 

    }

    
    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
                
            const old = data[index];
            const newItem = {...old, important: !old.important}; // overwriting like to the negaative of like, to new obj
        
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    onToggleLiked(id) {
            // My solution
            // this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const newArr = data;

            // newArr[index].like = !newArr[index].like;   

            // let like = newArr[index].like

            // like = like ? this.liked++ : this.liked--;

            // return {
            //     data: newArr
            // }
        this.setState(({data}) => {

            const index = data.findIndex(elem => elem.id === id);
            
            const old = data[index];
            const newItem = {...old, like: !old.like}; // overwriting like to the negaative of like, to new obj
           
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }

        });
    }    

    searchPost(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter( (item) => {
            return item.label.indexOf(term) > -1;  
        });
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state; 
        const liked = data.filter(item => item.like).length,
              allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>   
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked} />
                <PostAddForm
                    onAdd={this.addItem} />
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