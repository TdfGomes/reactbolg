const URL = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'whatever-you-want'
}

export const getCategories = () =>
  fetch(`${URL}/categories`, {
    headers: {
      ...headers
    }
  }).then(res => res.json()).then(data => data.categories)

export const getPosts = () =>
  fetch(`${URL}/posts`, {
    headers: {
      ...headers
    }
  }).then(res => res.json())