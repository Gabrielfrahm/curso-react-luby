import React, { useCallback, useEffect, useState } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

const Blog = (props) => {
    const [posts, setPosts] = useState([]);
    const [ids, setIds] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
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
        return setIds(id);
    }, []);

    return (
        <div>
            <section className="Posts">
                {posts.map(p => {
                    return <Post
                        title={p.title}
                        key={p.id}
                        author={p.author}
                        clicked={() => handlePostSelected(p.id)}
                    />
                })}
            </section>
            <section>
                <FullPost id={ids} />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
}

export default Blog;