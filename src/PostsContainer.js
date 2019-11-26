import { useEffect, useState } from 'react';

const fetchPosts = () => fetch('/posts').then((resp) => resp.json());

function PostsContainer({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return children({ posts });
}

export default PostsContainer;
