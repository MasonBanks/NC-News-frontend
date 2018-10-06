import React, { Component } from 'react';
import '../App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import * as api from '../api.js'
import Display from './Display';
import Linkbar from './Linkbar';
import Article from './Article';
import Topic from './Topic';
import Banner from './Banner';
import Submit from './Submit';
import ErrorRedirect from './ErrorRedirect';

class Homepage extends Component {
  state = {
    articles: [],
    topics: []
  }
  render() {
    if (this.state.articles.length < 1) return <p>loading...</p>
    return (
      <BrowserRouter>
        <div className="body">
          <Banner />
          <Linkbar />
          <Route exact path='/' render={() => <Display articles={this.state.articles} />} />
          <Route exact path='/nc/:topic/:article_id' render={(props) => <Article {...props} articles={this.state.articles} />} />
          <Route exact path='/nc/:topic' render={(props) => <Topic {...props} />} />
          <Route exact path='/nc/submit' render={() => <Submit />} />
          <Route exact path='/nc/error' render={() => <ErrorRedirect />} />
          <footer>
            <p>© 2018 - Site designed & developed by Mason Banks</p>
            This is a student project demo created whilst studying the Full Stack Developer Course at
            <a href="https://northcoders.com">{` Northcoders`}</a>
          </footer>
        </div>
      </BrowserRouter >
    );
  }
  componentDidMount() {
    api.getArticles()
      .then(articles => this.setState({
        articles
      }))
  }
  componentDidUpdate(prevProps) {
    if (prevProps.articles !== this.props) {
      api.getArticles()
        .then(articles => {
          this.setState({
            articles
          })
        })
    }
  }
}

export default Homepage;