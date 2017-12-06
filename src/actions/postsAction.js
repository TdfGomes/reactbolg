import { 
  REQUEST_POSTS,
  REQUEST_POST,
  CREATE_POST } from './actionTypes'
import { 
  getPosts,
  getPost,
  addPost } from '../utils'

//get posts data
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

//get single post
export const requestPost = (post) => ({
  type: REQUEST_POST,
  post
})
export const fetchPost = (postid) => dispatch => (
  getPost(postid).then(post => dispatch(requestPost(post)))
)