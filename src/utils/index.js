import fetch from 'isomorphic-fetch' 

const URL = "http://localhost:3001"
const headers = {
  'Accept': 'application/json',
  'Authorization': 'whatever-you-want'
}

export const getPosts = () =>
  fetch(`${URL}/posts`, {
    headers: {
      ...headers
    }
}).then(res => res.json())

export const getCategories = () =>
  fetch(`${URL}/categories`, {
    headers: {
      ...headers
    }
}).then(res => res.json())



