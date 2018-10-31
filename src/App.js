import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="body">
          <Homepage />   
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
