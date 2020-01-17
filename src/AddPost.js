import React, { Component } from 'react';

class AddPost extends Component {
  state = {
    body: '',
    author: ''
  }

  onBodyChange = (event) => {
    this.setState({ body: event.target.value })
  }

  onAuthorChange = (event) => {
    this.setState({ author: event.target.value })

  }

  onSubmit = (event) => {
    event.preventDefault();

    fetch('/posts', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        body: this.state.body,
        author: this.state.author
      }),
    })
  }

  render() {
    const { body, author } = this.state;

    return (<form onSubmit={this.onSubmit}>
              <input value={ this.state.body } onChange={this.onBodyChange}></input>
              <input value={ this.state.author }onChange={this.onAuthorChange}></input>
              <button type="submit">Submit</button>
            </form>);
  }
}

export default AddPost
