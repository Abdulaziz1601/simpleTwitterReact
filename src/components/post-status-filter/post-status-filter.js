import React, { Component } from 'react';
import {Button} from 'reactstrap';
import './post-status-filter.css'

export default class PostStatusFilter extends Component{
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All posts'},
            {name: 'like', label: 'Liked'},
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const activeClass = active ? 'btn-info': 'btn-outline-secondary';

            return (
                <button
                    key={name}
                    type='button'
                    className={`btn ${activeClass}`}
                    onClick={() => onFilterSelect(name)}>{label}</button>
            );      
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
        // return (
        //     <div className="btn-group">
        //         {/* <Button outline color='info'>All</Button> */}
        //         <button type='button' className="btn btn-info">All posts</button> 
        //         <button type='button' className="btn btn-outline-secondary">Liked</button>    
        //     </div>
        // )
    }
}

// export default PostStatusFilter;