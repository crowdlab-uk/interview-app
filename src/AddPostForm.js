// @flow
import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
  updatePosts: () => void,
};

const FormWrapper = styled.div`
  padding: 12px;
`;

function AddPostForm({ updatePosts }: Props) {
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (body === '') {
      alert('Please enter some text');
    }

    if (author === '') {
      alert('Please tell us your name');
    }

    fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ body, author }),
    })
      .then(() => updatePosts())
      .catch(() => alert('error adding post'));
  };

  return (
    <form onSubmit={onSubmit}>
      <FormWrapper>
        <div>
          <label>Post Text</label>
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add post</button>
        </div>
      </FormWrapper>
    </form>
  );
}

export default AddPostForm;
