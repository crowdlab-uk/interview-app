// @flow
import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';

type PostType = {
  id: number,
  body: string,
  author: string,
};

type Props = {
  posts: Array<PostType>,
};

function Posts({ posts }: Props) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <button onClick={() => setIsShown(true)}>Add Post</button>
      {isShown && <AddPost />}
    </div>
  );
}

export default Posts;
