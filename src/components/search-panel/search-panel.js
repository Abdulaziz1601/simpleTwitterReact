// import React from 'react';

// import './search-panel.css'
// // creating component
// const SearchPanel = () => {
//     return (
//         <input
//             className="form-control search-input"
//             type="text"
//             placeholder="Search from posts"
//         />
//     )
// }

// export default SearchPanel;
import React, { Component } from 'react';

import './search-panel.css'
// creating component
export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }
    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({
            term
        });
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Search from posts"
                onChange={this.onUpdateSearch}
            />
        )
    }
}

