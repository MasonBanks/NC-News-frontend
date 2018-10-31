import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import VotingSystem from './VotingSystem';
import Loading from './Loading';


export default function Display({ articles }) {
  if (!articles) return <Loading />
  return (
    <div>
      <ul>
        {articles.sort((a, b) => {
          const c = new Date(a.created_at);
          const d = new Date(b.created_at)
          return d - c
        }).map((article, index) => {
          return <div
            className="card"
            key={`${article._id}_card`
            } >
            <Link
              to={`/nc/${article.belongs_to}/${article._id}`}
            >
              <li
                key={article._id} >
                <img
                  src={`https://picsum.photos/100/100/?image=${index}`}
                  alt="article-icon"
                  className="article-avatar" />
                <p className="articleText">
                  {article.title}
                </p>
              </li>
              <p
                id='submissionBy'>
                {`submitted ${moment(article.created_at)
                  .startOf("second")
                  .fromNow()}
              by
              ${article.created_by.username}
              to
              ${article.belongs_to}`}
              </p>
            </Link>
            <div className="voter">
              <VotingSystem
                id={article._id}
                type="articles"
                votes={article.votes} />
            </div>
          </div>
        })}
      </ul>
    </div >
  );
}
