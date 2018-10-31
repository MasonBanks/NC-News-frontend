import React, { Component } from 'react';
import * as api from '../api';
import moment from 'moment';
import VotingSystem from './VotingSystem';
import { FaBackspace, FaPlusSquare } from 'react-icons/fa';

class Comments extends Component {
  state = {
    comments: [],
    commentToAdd: '',
  }
  render() {
    return (
      <div className="articleSection">
        <form
          action="text"
          autoComplete="off"
          onSubmit={this.handleSubmit}>
          <textarea
            rows='4'
            cols='50'
            onKeyDown={this.onEnterPress}
            className="commentToAdd"
            name="commentToAdd"
            value={this.state.commentToAdd}
            type="text"
            placeholder="What are your thoughts?"
            onChange={this.handleChange} />
          <button
            className="commentButton">
            <FaPlusSquare />
          </button>
        </form>
        <ul id="commentList">
          {this.state.comments
            .filter(comment => comment.body)
            .sort((a, b) => {
              const c = new Date(a.created_at);
              const d = new Date(b.created_at);
              return d - c
            }).map((comment, id) => {
              return <li
                key={id}
                className={(id % 2 === 0) ? "commentCardAll" : "commentCardOdd"}>
                <VotingSystem
                  id={comment._id}
                  type="comments"
                  votes={comment.votes} />
                <div>
                  <div>{`${comment.created_by.username}: ${moment(comment.created_at).startOf("second").fromNow()}`}</div>
                </div>
                <div>{`"${comment.body}"`}</div>
                <button
                  type="submit"
                  id="delete"
                  onClick={() => {
                    this.deleteComment(comment._id)
                  }
                  }
                  value={comment._id}
                ><FaBackspace /></button>
              </li>
            })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    api.fetchCommentsForArticle(this.props.article_id)
      .then(comments =>
        this.setState({
          comments,
          article_id: this.props.article_id
        })
      )
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
    api.deleteComment(e)
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
  onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }
}

export default Comments;