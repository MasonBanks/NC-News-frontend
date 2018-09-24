import React from 'react';
import './Display.css';
import moment from 'moment';


export default function Display({ articles, users, topics }) {
  return (
    <div>
      <div className="article-display">
      </div>
      <ul className="article-container"> Todays News:<br /><br />
        {articles.sort((a, b) => {
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
                  <p className='submitted-text'>submitted {moment(article.created_at).startOf("second").fromNow()} by {article.created_by.username} to {article.belongs_to}</p>
                </div>
              </li></a>
          </div>
        })}
      </ul>
    </div >
  );
}
