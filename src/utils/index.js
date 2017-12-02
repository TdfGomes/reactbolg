import fetch from 'isomorphic-fetch' 
import uuidv4 from 'uuid'

const URL = "http://localhost:3001"
const headers = {
  'Accept': 'application/json',
  'Authorization': 'whatever-you-want'
}

//GET DATA
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

//POST DATA

export const newPost = (post) => {
  const requiredData = {
    id: uuidv4,
    timestamp: Date.now()
  }
  const data = new FormData()
  data.append('json', JSON.stringify(requiredData))
  data.append('json',JSON.stringify(post))

  fetch(`${URL}/posts`, {
    headers: {
      ...headers
    },
    method:'POST',
    body:data 
  })

}

