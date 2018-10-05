import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'
import PostAdder from './PostAdder';
import * as api from '../api';

class Topic extends Component {
  state = {
    articles: [],
  }
  render() {
    return (
      <div>
        <PostAdder />
        <ul className="article-container">
          {this.state.articles.sort((a, b) => {
            const c = new Date(a.created_at);
            const d = new Date(b.created_at)
            return d - c
          }).map(article => {
            return <div className="card" key={`${article._id}_card`} >
              <li className="article-card" key={article._id} >
                <div className="text">
                  <Link to={`/nc/${article.belongs_to}/${article._id}`}>
                    <p className="article-title">
                      {article.title}
                    </p>
                  </Link>
                  <p className='submitted-text'>submitted {moment(article.created_at).startOf("second").fromNow()} to {article.belongs_to} by {article.created_by.username}</p>
                </div>
              </li>
            </div>
          })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    api.fetchArticlesFromTopic(this.props.match.params.topic)
      .then(articles => {
        this.setState({
          articles
        })
      })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.articles !== this.state.articles)
      api.fetchArticlesFromTopic(this.props.match.params.topic)
        .then(articles => {
          this.setState({
            articles
          })
        })
  }
}

export default Topic;