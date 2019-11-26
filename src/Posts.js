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
    </div>
  );
}

export default Posts;
