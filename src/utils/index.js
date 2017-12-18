// import fetch from 'isomorphic-fetch' 
import uuidv4 from 'uuid'

const URL = "http://localhost:3001"
const headers = {
  'Accept': 'application/json',
  'Authorization': 'pvicXidvqcXZ',
  "Content-Type": "application/json"
}

//GET POSTS
export const getPosts = () => (
  fetch(`${URL}/posts`, {headers})
  .then(res => res.json())
)

export const getPost = (postid) => (
  fetch(`${URL}/posts/${postid}`, {headers})
  .then(res => res.json())
)
//POST POST
export const addPost = (post) => {
  const result = {
    id: uuidv4().replace(/-/g, ''),
    timestamp: Date.now(),
    ...post
  }
  return fetch(`${URL}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify(result)
  }).then(res => res.json())
}
//VOTE POST
export const vote_Post = (postId, option) => (
  fetch(`${URL}/posts/${postId}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(option)
  })
    .then(res => res.json())
)
//PUT POST
export const editPost = (post) => (
  fetch(`${URL}/posts/${post.id}`, {
     method: 'PUT',
     headers,
     body: JSON.stringify(post)
   })
   .then(res => res.json())
)

//GET CATEGORIES
export const getCategories = () => (
  fetch(`${URL}/categories`, {headers})
  .then(res => res.json())
)

//GET COMMENTS
export const fetchComments = (post_id) => ( 
  fetch(`${URL}/posts/${post_id}/comments`,{headers})
  .then(res => res.json())  
)

export const getAllComments = () => {
  const postsIds = getPosts().then(posts => posts.map(post => post.id))
  
  return postsIds.then(post => 
    Promise
      .all(post.map(postid => fetchComments(postid)))
      .then(comments => comments )
  )
}
//PUT COMMENTS
export const editComment = (comment) => {
  comment.timestamp = Date.now()
  return fetch(`${URL}/comments/${comment.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(comment)
  })
  .then(res => res.json())
}

//DELETE COMMENTS
export const deleteCommentById = (id) => (
  fetch(`${URL}/comments/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': 'pvicXidvqcXZ'},
  }).then(res => res.json())
    .then(data => data)
)

//VOTE COMMENTS
export const voteComment = (commentId,option) => (
  fetch(`${URL}/comments/${commentId}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(option)
  })
    .then(res => res.json())
)
//CREATE COMMENTS
export const addComment = (comment) => {
  const result = {
    id: uuidv4().replace(/-/g, ''),
    timestamp: Date.now(),
    ...comment
  }
  return fetch(`${URL}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify(result)
  }).then(res => res.json())
}


