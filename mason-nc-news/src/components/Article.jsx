import React, { Component } from 'react';
import moment from 'moment';
import Comments from './Comments';
import * as api from '../api';
import { Redirect } from 'react-router-dom';

class Article extends Component {
  state = {
    title: '',
    text: '',
    created_at: '',
    created_by: '',
    err: null
  }
  render() {
    const { err } = this.state;
    if (err) return <Redirect to="/nc/404" />
    // <Redirect to={{
    //   pathname="/error",
    //   state: {
    //     code: err.status,
    //     message: err.msg
    //   }
    // }} />
    if (!this.state.title) return <p>loading...</p>
    return (
      <div className="article">
        <div className="article-body">
          <h1>{this.state.title}</h1>
          <p>{this.state.text}</p>
          <p>posted {moment(this.state.created_at).startOf("second").fromNow()} by {this.state.created_by.username}</p>
        </div>
        <div>
          <div>
            <Comments article_id={this.props.match.params.article_id} />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    api.getOneArticle(this.props.match.params.article_id)
      .then(article =>
        this.setState({
          title: article.title,
          text: article.body,
          created_at: article.created_at,
          created_by: article.created_by
        })
      )
      .catch(err => {
        this.setState({
          err
        })
      })
  }
}

export default Article;