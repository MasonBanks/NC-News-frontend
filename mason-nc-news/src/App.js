import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Homepage from './components/Homepage';

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
          <Homepage />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
