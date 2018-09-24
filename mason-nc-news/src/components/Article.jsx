import React, { Component } from 'react';
import moment from 'moment';
import Comments from './Comments';

class Article extends Component {
  state = {
    title: '',
    text: '',
    created_at: []
  }
  render() {
    return (
      <div className="article">
        <div className="article-body">
          <h1>{this.state.title}</h1>
          <h3 className="submitted-text">posted {moment(this.state.created_at).startOf("second").fromNow()}</h3>
          <p>{this.state.text}</p>
        </div>
        <div className="comment-card">
          <p className="comment-body">
            <Comments />
          </p>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticle(this.props.match.params.article_id)
  }
  fetchArticle = (article_id) => {
    fetch(`https://mason-nc-news.herokuapp.com/api/articles/${article_id}`)
      .then(res => res.json())
      .then(({ article }) => {
        this.setState({
          title: article.title,
          text: article.body,
          created_at: article.created_at
        })
      })
  }
}

export default Article;