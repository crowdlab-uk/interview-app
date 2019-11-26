import React from 'react';
import './App.css';
import PostsContainer from './PostsContainer';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <h1>Post listing</h1>
      <PostsContainer>{({ posts }) => <Posts posts={posts} />}</PostsContainer>
    </div>
  );
}

export default App;
