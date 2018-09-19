import React, { Component } from 'react';
import './App.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Topics from './components/Topics';
import * as api from './api.js'
import Display from './components/Display';

class App extends Component {
  state = {
    articles: [],
    users: [],
    topics: []
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <button><img src="/images/northcoders_logo.png" width="200" height="50" alt="NC Logo.png" /></button>
          <h1>NC News</h1>
          <div className="article-display">
            <nav>
              <Link to="/">Topics</Link>
            </nav>
            <Route exact path="nc/" component={Topics} />
          </div>
          <Display articles={this.state.articles} users={this.state.users} />
        </div>
      </BrowserRouter >
    );
  }
  componentDidMount() {
    api.getArticles()
      .then(articles => this.setState({
        articles
      }))
    api.getUsers()
      .then(users => this.setState({
        users
      }))
  }
}

export default App;
