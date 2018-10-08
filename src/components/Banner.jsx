import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Banner;