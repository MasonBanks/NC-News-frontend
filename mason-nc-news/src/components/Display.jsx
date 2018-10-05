import React from 'react';
import { Link } from 'react-router-dom'
import './styling/Display.css';
import moment from 'moment';
import PostAdder from './PostAdder';
import VotingSystem from './VotingSystem';


export default function Display({ articles }) {
  return (
    <div>
      <div>
        <PostAdder />
      </div>
      <div className="article-display">
      </div>
      <ul className="article-container"> Todays News:
        {articles.sort((a, b) => {
          const c = new Date(a.created_at);
          const d = new Date(b.created_at)
          return d - c
        }).map(article => {
          return <div className="card" key={`${article._id}_card`} >
            <li className="article-card" key={article._id} >
              <div className="text">
                <Link to={`/nc/${article.belongs_to}/${article._id}`} >
                  <p className="article-title">
                    {article.title}
                  </p>
                </Link>
                <VotingSystem id={article._id} type="articles" votes={article.votes} />
                <p className='submitted-text'>submitted {moment(article.created_at).startOf("second").fromNow()} by {article.created_by.username} to {article.belongs_to}</p>
              </div>
            </li>
          </div>
        })}
      </ul>
    </div >
  );
}
