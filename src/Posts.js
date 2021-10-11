// @flow
import React from 'react';
import Post from './Post';
import AddPost from './AddPost';
import { useState } from 'react';


type PostType = {
  id: number,
  body: string,
  author: string,
};

type Props = {
  posts: Array<PostType>,
};


function Posts({ posts }: Props) {
  const [showForm, setFormState] = useState(false);

  const onAddPostClick = () => {
    setFormState(true);
  }
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <button onClick={() => {onAddPostClick()}}>Add Post</button>
      {
        showForm ? <AddPost></AddPost> : ''
      }
      
    </div>
  );
}

export default Posts;
