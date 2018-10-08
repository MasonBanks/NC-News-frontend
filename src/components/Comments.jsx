import React, { Component } from 'react';
import './styling/Comments.css';
import * as api from '../api';
import moment from 'moment';
import VotingSystem from './VotingSystem';

class Comments extends Component {
  state = {
    comments: [],
    commentToAdd: ''
  }
  render() {
    return (
      <div>
        <form action="text" autoComplete="off" onSubmit={this.handleSubmit}>
          <textarea className="commentToAdd" name="commentToAdd" value={this.state.commentToAdd} type="text" placeholder="What are your thoughts?" onChange={this.handleChange} />
          <button>
            Comment
        </button>
        </form>
        <ul>
          {this.state.comments
            .filter(comment => comment.body)
            .sort((a, b) => {
              const c = new Date(a.created_at);
              const d = new Date(b.created_at);
              return d - c
            }).map((comment, id) => {
              return <li key={id} className="comment-card">
                <div>{comment.created_by.username}</div>
                <p>
                  <div>{`${moment(comment.created_at).startOf("second").fromNow()}`}</div>
                </p>
                <div>{`"${comment.body}"`}</div>
                <VotingSystem id={comment._id} type="comments" votes={comment.votes} />
                <div className="remove-comment">
                  <button onClick={this.deleteComment} value={comment._id}>delete</button>
                </div >
              </li>
            })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    api.fetchCommentsForArticle(this.props.article_id)
      .then(comments => this.setState({
        comments,
        article_id: this.props.article_id
      }))
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments !== this.state.comments)
      api.fetchCommentsForArticle(this.props.article_id)
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      body: this.state.commentToAdd,
      created_by: '5b76fd8ad1cc584d6264d665',
      belongs_to: this.props.article_id
    }
    api.addCommentToArticle(data, this.props.article_id)
      .then(res => {
        this.setState({
          comments: [res.data.comment, ...this.state.comments],
          commentToAdd: ''
        })
      })
  }
  deleteComment = (e) => {
    api.deleteComment(e.target.value)
      .then(res => {
        if (res.status === 202) {
          api.fetchCommentsForArticle(this.props.article_id)
            .then(res => {
              this.setState({
                comments: [...res]
              })
            })
        }
      })
  }
}

export default Comments;