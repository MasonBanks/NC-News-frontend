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

