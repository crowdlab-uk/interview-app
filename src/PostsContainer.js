import { useEffect, useState } from 'react';

const fetchPosts = () => fetch('/posts').then((resp) => resp.json());

function PostsContainer({ children }) {
  const [posts, setPosts] = useState([]);

  const updatePosts = () => {
    fetchPosts().then(setPosts);
  };

  useEffect(updatePosts, []);

  return children({ posts, updatePosts });
}

export default PostsContainer;
