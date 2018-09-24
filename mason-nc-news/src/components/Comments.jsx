import React, { Component } from 'react';

class Comments extends Component {
  state = {
    comments: []
  }
  render() {
    return (
      <div>
        <ul>{
          this.state.comments.map(comment => {
            return <li>
              {/* <div>{comment.created_by.username}</div> */}
              <div>{comment.body}</div>
            </li>
          })
        }</ul>
      </div>
    );
  }
  componentDidMount() {
    this.fetchCommentsForArticle(this.props)
  }
  componenetDidUpdate(prevProps, prevState) {
    if (prevState.comments !== this.state.comments)
      this.fetchCommentsForArticle(this.state.comments)
  }
  fetchCommentsForArticle = () => {
    fetch(`https://mason-nc-news.herokuapp.com/api/comments/`)
      .then(res => res.json())
      .then(({ comments }) => {
        this.setState({
          comments: [this.state.comments, ...comments]
        })
      })
  }
}

export default Comments;