import fetch from 'isomorphic-fetch' 

const URL = "http://localhost:3001"
const headers = {
  'Accept': 'application/json',
  'Authorization': 'whatever-you-want'
}

export const getPosts = () => (
  fetch(`${URL}/posts`, {
    headers: {
      ...headers
    }
  }).then(res => res.json())
)

export const getCategories = () => (
  fetch(`${URL}/categories`, {
    headers: {
      ...headers
    }
  }).then(res => res.json())
)

export const fetchComments = (post_id) => ( 
  fetch(`${URL}/posts/${post_id}/comments`,{
    headers:{
      ...headers
    }
  }).then(res => res.json())  
)

export const getAllComments = () => {
  const postsIds = getPosts().then(posts => posts.map(post => post.id))
  
  return postsIds.then(post => 
    Promise
      .all(post.map(postid => fetchComments(postid)))
      .then(comments => comments )
  )
  
}

