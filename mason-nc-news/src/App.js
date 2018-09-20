import React, { Component } from 'react';
import './App.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Topics from './components/Topics';
import * as api from './api.js'
import Display from './components/Display';
import mainLogo from './images/northcoders_logo.png'

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
          <h1 className="head"><img className="logo" src={mainLogo} alt="Northcoders Logo." />
            <div className="news">
              <div className="n">N</div>
              <div className="ews">EWS</div>
            </div>
          </h1>
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
