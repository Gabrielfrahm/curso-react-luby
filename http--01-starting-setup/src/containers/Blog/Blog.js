import React from 'react';
import Post from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import {Link, Route} from 'react-router-dom';

import './Blog.css';

const Blog = (props) => {
    return (
        <div className="blog">
            <header>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/new-post">New Post</Link></li>
                </ul>
            </header>
            <Route path="/" exact component={Post} />
            <Route path="/new-post" component={NewPost} />
        </div>
    );
}

export default Blog;