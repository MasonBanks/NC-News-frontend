import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as api from '../api';
import Display from './Display';
import Loading from './Loading';

class Topic extends Component {
  state = {
    articles: [],
    err: null
  }
  render() {
    if (this.state.articles.length < 1) return <Loading />
    const { err } = this.state;
    if (err) {
      return <Redirect to={{
        pathname: "/error",
        state: {
          code: err.response.status,
          message: err.response.data.msg
        }
      }} />
    }
    return (
      <div>
        <Display articles={this.state.articles} />
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
      .catch(err => {
        this.setState({
          err
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