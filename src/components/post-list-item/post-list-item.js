import React, { Component } from 'react';

import './post-list-item.css'

// state works only with Classes
export default class PostListItem extends Component {
    // We cannot connect those local functions
    // HEnce we have to use functions that came from POstList
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         important: false,
    //         like: false
    //     };  
    //     // binding onImportant
    //     this.onImportant = this.onImportant.bind(this);
    //     this.onLike = this.onLike.bind(this);
    // } 

    // onImportant() {
    // //              took only {important} form state -> by destructuring
    //     this.setState(({important}) => ({
    //         important: !important
    //     })); // return as JSX by grouping in parenthesis
    // }

    // onLike() {
    //     this.setState(({like}) => ({
    //         like: !like
    //     }))
    // }

    render() {
        // In function components, to fetch data we use props, in class-components we use "this"
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props; // props property for class-components 
        
        let classNames = "app-list-item d-flex justify-content-between";

        if(important) {
            classNames += ' important';
        }

        if(like) {
            classNames += ' like'
        }

        return (
            <div className={classNames}>
                <span
                className="app-list-item-label"
                onClick={onToggleLiked} >
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                    type="submit"
                    className="btn-star btn-sm"
                    onClick={onToggleImportant} >
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                    type="submit"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        {/* Post Delete */}
                        <i className="fa fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        );
    }
}
// // We destructure obj props to make our code effective
// const PostListItem = ({label, important = false}) => { // we have obj props, in which we share data btw components
//     let classNames = "app-list-item d-flex justify-content-between";

//     if(important) {
//         classNames += ' important';
//     }
        
//     return (
//         <div className={classNames}>
//             <span className="app-list-item-label">
//                 {label}
//             </span>
//             <div className="d-flex justify-content-center align-items-center">
//                 <button 
//                 type="submit"
//                 className="btn-star btn-sm">
//                     <i className="fa fa-star"></i>
//                 </button>
//                 <button 
//                 type="submit"
//                 className="btn-trash btn-sm">
//                     <i className="fa fa-trash"></i>
//                 </button>
//                 <i className="fa fa-heart"></i>
//             </div>
//         </div>
//     )
// }

// export default PostListItem;