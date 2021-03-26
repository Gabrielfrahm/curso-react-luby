import React, { useCallback, useEffect, useState } from 'react';

import instance from '../../../axios';

import './FullPost.css';

const FullPost = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (props.match.params.id) {
            instance.get(`/posts/${props.match.params.id}`).then(
                response => {
                    console.log(response.data);
                    return setPosts(response.data)
                }
            )
        }
        return;
    }, [props.match.params.id]);

    const handleDeletePostById = useCallback(() => {
        instance.delete(`/posts/${props.match.params.id}`).then(
            response => {
                console.log(response);
            }
        )
    })

    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
   
        if (props.match.params.id) {
            post = (
                <div className="FullPost">
                    <h1>{posts.title}</h1>
                    <p>{posts.body}</p>
                    <div className="Edit">
                        <button onClick={handleDeletePostById} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }   
   
    

    return post;
}

export default FullPost;