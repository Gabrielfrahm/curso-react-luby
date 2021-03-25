import React, { useCallback, useState } from 'react';

import './NewPost.css';
import instance from '../../../axios';


const NewPost = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('Max');

   
    const handlePostData = useCallback(() => {
        const data = {
            'title' : title,
            'body': content,
            'author' : author,
        }
        instance.post('/posts', data).then(
            response => {
                console.log(response);
            }
        );
    });

        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                <label>Content</label>
                <textarea rows="4" value={content} onChange={(event) => setContent(event.target.value)} />
                <label>Author</label>
                <select value={author} onChange={(event) => setAuthor(event.target.value)}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={handlePostData} >Add Post</button>
            </div>
        );
}

export default NewPost;