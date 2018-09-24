import React, { Component } from 'react';
import '../App.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import * as api from '../api.js'
import Display from './Display';
import Linkbar from './Linkbar';
import Article from './Article';
import Topic from './Topic';

class Homepage extends Component {
  state = {
    articles: [],
    users: [],
    topics: []
  }
  render() {
    return (
      <BrowserRouter>
        <div className="body">
          <div className="head">
            <Link to='/' style={{ textDecoration: 'none' }}><div className="news">
              <div className="symbol">^</div>
              <div className="n">N</div>
              <div >ORTHCODERS</div>
              <div className="n">N</div>
              <div >EWS</div>
            </div>
            </Link>
          </div>
          <Linkbar />
          <Route exact path='/' render={() => <Display articles={this.state.articles} users={this.state.users} />
          } />
          <Route exact path='/nc/:topic/:article_id' render={(props) => <Article {...props} />} />
          <Route exact path='/nc/:topic' render={(props) => <Topic {...props} />} />
          <footer>
            <p>© 2018 - Site designed & developed by Mason Banks</p>
            This is a student project demo created whilst studying the Full Stack Developer Course at
            <a href="https://northcoders.com">Northcoders</a>
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
    api.getUsers()
      .then(users => this.setState({
        users
      }))
  }
}

export default Homepage;