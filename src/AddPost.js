import React, { useState } from 'react'

function AddPost() {
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('')

    async function submitInfo(e) {
        e.preventDefault();
        console.log(content);
        console.log(author);

        try {
            const response = await fetch('/posts', {
              method: 'POST', // or 'PUT'
              body: JSON.stringify({content, author}), // data can be `string` or {object}!
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const json = await response.json();
            console.log('Success:', JSON.stringify(json));
            window.location.reload();

          } catch (error) {
            console.error('Error:', error);
          }
    }

    return (
        <div>
            <form onSubmit={submitInfo}>
                <div>
                    <label>Content</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Author</label>
                    <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" />
                </div>
                <div>
                    <button type="submit">go</button>
                </div>
            </form>
        </div>
    )
}

export default AddPost;