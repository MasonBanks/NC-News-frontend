import React, { Component } from 'react';
import * as api from '../api';


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
      <div>
        <form className="submission-form" autoComplete="off" onSubmit={this.handleSubmit}>
          <div>
            <label >
              <div>
                Title:
            </div>
              <textarea className="title" name="title" type="text" placeholder="title" value={this.state.title} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label >
              Text:
              <div>
                <textarea className="body-text" name="body" type="text" placeholder="text" value={this.state.text} onChange={this.handleChange} />
              </div>
            </label>
          </div>
          <select className="ncategory" name="belongs_to" onChange={this.handleChange} id="ncategory">
            <option>Choose a NCategory</option>
            <option value="coding">coding</option>
            <option value="football">football</option>
            <option value="cooking">cooking</option>
          </select>
          <button type='submit'>Post</button>
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