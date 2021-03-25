import React , {useEffect, useState, useCallback} from 'react';
import instance from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

const Posts = (props) => {
    const [posts, setPosts] = useState([]);
    const [ids, setIds] = useState(null);

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
        return setIds(id);
    }, []);

    return (
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
    )
}

export default Posts;