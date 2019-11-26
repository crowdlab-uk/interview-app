// @flow
import React from 'react';
import Post from './Post';
import AddPost from './AddPost';

type PostType = {
  id: number,
  body: string,
  author: string,
};

type Props = {
  posts: Array<PostType>,
  updatePosts: () => void,
};

function Posts({ posts, updatePosts }: Props) {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <AddPost updatePosts={updatePosts} />
    </div>
  );
}

export default Posts;
