import React, { Component } from 'react';
import '../App.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import * as api from '../api.js'
import Display from './Display';
import Article from './Article';
import Topic from './Topic';
import Banner from './Banner';
import Submit from './Submit';
import ErrorRedirect from './ErrorRedirect';
import Loading from './Loading';

class Homepage extends Component {
  state = {
    articles: [],
    topics: [],
    err: null
  }
  render() {
    if (!this.state.topics) return <Loading />
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
      <BrowserRouter>
        <div className="content">
          <Banner />
          <div className="display">
            <Switch >
              <Route exact path='/' render={() => <Display articles={this.state.articles} />} />
              <Route path='/nc/:topic/:article_id' render={(props) => <Article {...props} articles={this.state.articles} />} />
              <Route exact path='/nc/:topic' render={(props) => <Topic {...props} />} />
              <Route exact path='/submit' component={Submit} />
              <Route exact path='/error' render={(props) => <ErrorRedirect {...props} />} />
            </Switch>
          </div>
          <footer className="footer">
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
      .catch(err => {
        this.setState({
          err
        })
      })
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.articles !== this.props) {
  //     api.getArticles()
  //       .then(articles => {
  //         this.setState({
  //           articles
  //         })
  //       })
  //   }
  // }
}

export default Homepage;