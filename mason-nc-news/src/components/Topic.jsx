import React, { Component } from 'react';
import moment from 'moment'

class Topic extends Component {
  state = {
    articles: [],
  }
  render() {
    return (
      <div>
        <ul className="article-container"> Todays News:<br /><br />
          {this.state.articles.sort((a, b) => {
            const c = new Date(a.created_at);
            const d = new Date(b.created_at)
            return d - c
          }).map(article => {
            return <div className="card" key={`${article._id}_card`} >
              <a href={`/nc/${article.belongs_to}/${article._id}`} style={{ textDecoration: 'none', color: 'black' }} >
                <li className="article-card" key={article._id} >
                  <div className="text">
                    <p className="article-title">
                      {article.title}
                    </p>
                    <p className='submitted-text'>submitted {moment(article.created_at).startOf("second").fromNow()} to {article.belongs_to}</p>
                  </div>
                </li>
              </a>
            </div>
          })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticlesFromTopic(this.props.match.params.topic)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.articles !== this.state.articles)
      this.fetchArticlesFromTopic(this.props.match.params.topic)
  }
  fetchArticlesFromTopic = (topic) => {
    fetch(`https://mason-nc-news.herokuapp.com/api/topics/${topic}/articles`)
      .then(res => res.json())
      .then(body => {
        this.setState({
          articles: body.articles
        })
      })
  }
}

export default Topic;