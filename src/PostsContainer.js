import { useEffect, useState } from "react";

const fetchPosts = () => fetch("/posts").then(resp => resp.json());

function PostsContainer({ children }) {
  const [posts, setPosts] = useState([]);

  const fetchAndSet = () => fetchPosts().then(setPosts);

  useEffect(() => {
    fetchAndSet();
  }, []);

  return children({ posts, refreshPosts: fetchAndSet });
}

export default PostsContainer;
