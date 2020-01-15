// @flow
import React, { Component } from "react";
import Post from "./Post";
import axios from "axios";

type PostType = {
  id: number,
  body: string,
  author: string
};

type Props = {
  posts: Array<PostType>
};

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author: ""
    };
  }

  onInputChange = event => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    this.setState({
      [inputName]: inputValue
    });
  };

  submitHandler = event => {
    event.preventDefault();
    axios
      .post("/posts", { body: this.state.body, author: this.state.author })
      .then(this.props.refreshPosts);
  };

  render() {
    const { posts } = this.props;

    return (
      <div>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
        <form onSubmit={this.submitHandler}>
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.onInputChange}
          />
          <input
            name="author"
            type="text"
            onChange={this.onInputChange}
            value={this.state.author}
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => alert("TODO: make this work")}>Add Post</button>
      </div>
    );
  }
}

export default Posts;
