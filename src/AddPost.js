import React from 'react';




class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {postText: '', postAuthor: ''};

        this.changePostText = this.changePostText.bind(this);
        this.changePostAuthor = this.changePostAuthor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    changePostText(event){
        this.setState({postText: event.target.value})
    }
    changePostAuthor(event){
        this.setState({postAuthor: event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();

        let data = {
            id: new Date().getTime(),
            body: this.state.postText,
            author: this.state.postAuthor,
        }
        // alert('form submitted');
        fetch('/posts', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <div className = "form-field">
                    <label>
                        Post Text
                    </label>
                    <textarea value={this.state.postText} onChange={this.changePostText} className="form-input" required></textarea>
                </div>
                <div className = "form-field">
                    <label>
                        Author
                    </label>
                    <input type="text" value={this.state.postAuthor} onChange={this.changePostAuthor} className="form-input" required></input>
                </div>
                <button type="submit" className = "Subpost" > Submit Post </button>
            
            </form>
        )
    }
    

}
 
export default AddPost;
