import axios from 'axios';
const DB_URL = 'https://mason-nc-news.herokuapp.com/api'

export const getArticles = () => {
  return axios.get(`${DB_URL}/articles`)
    .then(body => {
      return body.data.articles
    })
}

export const getOneArticle = (article_id) => {
  return axios.get(`${DB_URL}/articles/${article_id}`)
    .then(body => {
      return body.data.article
    })
}

export const getUsers = () => {
  return axios.get(`${DB_URL}/users`)
    .then(body => {
      return body.data.users
    })
}

export const fetchCommentsForArticle = (articleId) => {
  return axios.get(`${DB_URL}/articles/${articleId}/comments`)
    .then(body => {
      return body.data.comments
    })
}

export const fetchArticlesFromTopic = (topic) => {
  return axios.get(`${DB_URL}/topics/${topic}/articles`)
    .then(body => {
      return body.data.articles
    })
}

export const postArticleToTopic = (data, belongs_to) => {
  return axios.post(`${DB_URL}/topics/${belongs_to}/articles`, data)
    .then(res => {
      return res
    })
}

export const addCommentToArticle = (data, articleId) => {
  return axios.post(`${DB_URL}/articles/${articleId}/comments`, data)
    .then(res => {
      return res
    })
}

export const updateVote = (id, type, direction) => {
  return axios.put(`${DB_URL}/${type}/${id}?votes=${direction}`)
    .then(({ data }) => {
      return data
    })
}

export const deleteComment = (id) => {
  return axios.delete(`${DB_URL}/comments/${id}`)
    .then(res => {
      return res
    })
}