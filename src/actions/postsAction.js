import { REQUEST_POSTS, CREATE_POST } from './actionTypes'
import { getPosts, addPost } from '../utils'

//get post data
export const requestPosts = (posts) => ({
  type: REQUEST_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  getPosts().then(posts => dispatch(requestPosts(posts)))
)

//post post data
export const createPost = (post) => ({
  type:CREATE_POST,
  post
})

export const addNewPost = (data) => dispatch => (
  addPost(data).then(postData => dispatch(createPost(postData)))
)
