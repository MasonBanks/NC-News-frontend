// import axios from 'axios'
const DB_URL = 'https://mason-nc-news.herokuapp.com/api'

export const getArticles = () => {
  return fetch(`${DB_URL}/articles`)
    .then(res => res.json())
    .then(body => body.articles)
}

export const getUsers = () => {
  return fetch(`${DB_URL}/users`)
    .then(res => res.json())
    .then(body => body.users)
}

// export const getArticlesFromTopic = () => {
//   return fetch(`${DB_URL}/topics`)
//     .then(res => res.json())
//     .then(body => console.log(body))
// }