import React from 'react';
import './Display.css';
import moment from 'moment';

export default function Display({ articles, users }) {
  return (
    <div>
      <ul className="article-container">
        {articles.map(article => {
          return <li className="article-card" key={article._id}>
            <p className="article-title">
              {article.title}
            </p>
            <p className='submitted-text'>submitted {moment(article.created_at).startOf("second").fromNow()} by {users[article.created_by === users._id].username} to {article.belongs_to}</p>
          </li>
        })}
      </ul>
    </div>
  );
}
