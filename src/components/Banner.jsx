import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Linkbar from './Linkbar';
import { FaEdit } from 'react-icons/fa'

class Banner extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div >
            <Link className="text-link" id="post" to="/submit" >{`CREATE POST`}<FaEdit /></Link>
          </div>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <div className="news">
              <div className="symbol">^</div>
              <div className="n">N</div>
              <div >ORTHCODERS</div>
              <div className="n">N</div>
              <div >EWS</div>
            </div>
          </Link>
          <Linkbar />
          <div className="newsToday-container">
            <div id="newsToday">{`TODAYS `}<div className="n">{`N`}</div>EWS:</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;