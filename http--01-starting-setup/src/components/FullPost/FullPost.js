import React, { useEffect, useState } from 'react';
import axios from 'axios';


import './FullPost.css';

const FullPost = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (props.id) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${props.id}`).then(
                response => {
                    console.log(response.data);
                    return setPosts(response.data)
                }
            )
        }
        return;
    }, [props.id])

    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
   
        if (props.id) {
            post = (
                <div className="FullPost">
                    <h1>{posts.title}</h1>
                    <p>Content</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }   
   
    

    return post;
}

export default FullPost;