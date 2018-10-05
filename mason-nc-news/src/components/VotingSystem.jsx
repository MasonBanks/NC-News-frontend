import React, { Component } from 'react';
import * as api from '../api'

class VotingSystem extends Component {
  state = {
    voteModifier: 0
  }
  render() {
    return (
      <div>
        <button onClick={() => this.changeVoteMod('up')}>up</button>
        <p>{this.props.votes + this.state.voteModifier}</p>
        <button onClick={() => this.changeVoteMod('down')}>down</button>
      </div>
    );
  }
  changeVoteMod = (direction) => {
    const newVoteMod = direction === 'up' ? 1 : -1;
    this.setState({
      voteModifier: newVoteMod
    })
    api.updateVote(this.props.id, this.props.type, direction)
  }
}

export default VotingSystem;