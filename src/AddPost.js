// @flow
import React, { useState } from 'react';
import AddPostForm from './AddPostForm';

function AddPost() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {showForm ? (
        <AddPostForm />
      ) : (
        <button onClick={() => setShowForm(true)}>AddPost</button>
      )}
    </div>
  );
}

export default AddPost;
