import React from 'react';

import './post-list.css'
// Our programm will each post
import PostListItem from '../post-list-item';
// Destructuring the props
const PostList = ({posts}) => {
    // map transforms an array and returns as new
    const elements = posts.map(item => {
        const {id, ...itemProps} = item;
        // So now we don't have to know how many posts there will be, It will be counted automatically
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    // label={item.label}
                    // important={item.important}
                    // same as 
                    {...itemProps} /> 
            </li>
        )
    })

    return (
        // <ul className="app-list list-group">
        //     {/* Uncommon and hard way, 'cause we may not know number of fetched posts */}
        //     <PostList label={posts[0].label} important={posts[0].important} /> 
        //     <PostList label={posts[1].label} important={posts[1].important} /> 
        //     <PostList label={posts[2].label} important={posts[2].important} /> 
        //     {/* Important by default will be true */}
        // </ul>
        <ul className="app-list list-group">
            {elements }
        </ul>
    )
}

export default PostList;
