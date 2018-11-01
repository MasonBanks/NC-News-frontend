import React, { Component } from 'react';
import * as api from '../api';
import { FaEdit } from 'react-icons/fa';

class Submit extends Component {
  state = {
    title: '',
    body: '',
    belongs_to: '',
    created_by: '5b76fd8ad1cc584d6264d660',
    postAdded: false
  }
  render() {
    if (this.state.postAdded) return <p>{`thanks for adding to ${this.state.belongs_to}! :)`}</p>
    return (
      <div className="submitPage">
        <form className="submission-form" autoComplete="off" onSubmit={this.handleSubmit}>
          <div>
            <h2>
              Title:
            </h2>
            <textarea className="title" name="title" type="text" placeholder="title..." value={this.state.title} onChange={this.handleChange} />
          </div>
          <div>
            <h2>
              Text:
            </h2>
            <div>
              <textarea className="body-text" name="body" type="text" placeholder="text..." value={this.state.text} onChange={this.handleChange} />
            </div>

            <select className="dropDown" name="belongs_to" onChange={this.handleChange} id="ncategory">
              <option>Choose a NCategory</option>
              <option value="coding">coding</option>
              <option value="football">football</option>
              <option value="cooking">cooking</option>
            </select>
            <div>
              <button className="postButton" type='submit' disabled={(this.state.title && this.state.body && this.state.belongs_to) ? false : true}>POST <FaEdit /></button>
            </div>
          </div>
        </form>
      </div >
    );
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state
    api.postArticleToTopic(data, this.state.belongs_to)
      .then(res => {
        this.setState({
          postAdded: true
        })
      })
  }
}

export default Submit;