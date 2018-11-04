import React, { Component } from 'react';
import upvote from '../images/upvote.png';
import downvote from '../images/downvote.png';

import * as api from '../api'

class VotingSystem extends Component {
  state = {
    voteModifier: 0,
    value: ''
  }
  render() {
    return (
      <div className="voter">
        <button
          onClick={() => this.changeVoteMod('up')}
          disabled={this.state.value === 'up'}
          className="voteBtn">
          <img
            src={upvote}
            alt="upvote"
            className={this.state.value === 'up' ? "vote-inactive" : "vote"} />
        </button>
        <p className="number-display">
          {this.props.votes + this.state.voteModifier}
        </p>
        <button
          onClick={() => this.changeVoteMod('down')}
          disabled={this.state.value === 'down'}
          className="voteBtn">
          <img
            src={downvote}
            alt="downvote"
            className={this.state.value === 'down' ? "vote-inactive" : "vote"} />
        </button>
      </div>
    );
  }
  changeVoteMod = (direction) => {
    const newVoteMod = this.state.voteModifier + (direction === 'up' ? 1 : -1);
    this.setState({
      voteModifier: newVoteMod,
      value: direction
    })
    api.updateVote(this.props.id, this.props.type, direction)
  }
}

export default VotingSystem;