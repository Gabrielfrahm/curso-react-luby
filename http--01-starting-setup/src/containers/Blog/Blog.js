import React from 'react';
import Post from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import {NavLink, Route, Switch} from 'react-router-dom';

import './Blog.css';

const Blog = (props) => {
    return (
        <div className="blog">
            <header>
                <ul>
                    <li><NavLink to="/posts/" exact activeClassName="my-active" activeStyle={{color: `#fa923f`, textDecoration: 'underline'}}>Posts</NavLink></li>
                    <li><NavLink to="/new-post">New Post</NavLink></li>
                </ul>
            </header>
            <Switch>
                <Route path="/new-post" component={NewPost} />
                <Route path="/posts" component={Post} />
                <Route path="/" exact component={Post} />
            </Switch>
        </div>
    );
}

export default Blog;