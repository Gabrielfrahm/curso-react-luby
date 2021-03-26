import React, { useEffect, useState, useCallback } from 'react';
import { Route } from 'react-router-dom';
import instance from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

import './Posts.css';

const Posts = (props) => {
    const [posts, setPosts] = useState([]);
    const [, setIds] = useState(null);

    useEffect(() => {
        instance.get('/posts').then(
            response => {
                const responsePosts = response.data.slice(0, 4);
                const updatedPost = responsePosts.map(p => {
                    return {
                        ...p,
                        author: 'Gabriel'
                    }
                })
                return setPosts(updatedPost);
            }
        )
    }, []);

    const handlePostSelected = useCallback((id) => {
        props.history.push(`/posts/${id}`);
        return setIds(id);
    }, []);

    return (
        <div >
            <section className="Posts">
                {posts.map(p => {
                    return (
                        // <Link key={p.id} to={`/${p.id}`}>

                        <Post
                            key={p.id}
                            title={p.title}
                            author={p.author}
                            clicked={() => handlePostSelected(p.id)}
                        /> 
                    // </Link>
                    )
                })}
            </section>
             <Route path={props.match.url + '/:id'} exact component={FullPost} />  
        </div>
    )
}

export default Posts;