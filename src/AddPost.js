// @flow
import React, { useState } from 'react';
import AddPostForm from './AddPostForm';

type Props = {
  updatePosts: () => void,
};

function AddPost({ updatePosts }: Props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {showForm ? (
        <AddPostForm updatePosts={updatePosts} />
      ) : (
        <button onClick={() => setShowForm(true)}>AddPost</button>
      )}
    </div>
  );
}

export default AddPost;
