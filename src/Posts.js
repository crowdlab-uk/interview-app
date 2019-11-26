// @flow
import React from 'react';
import Post from './Post';

type PostType = {
  id: number,
  body: string,
  author: string,
};

type Props = {
  posts: Array<PostType>,
};

function Posts({ posts }: Props) {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <button onClick={() => alert('TODO: make this work')}>Add Post</button>
    </div>
  );
}

export default Posts;
