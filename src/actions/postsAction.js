import { 
  REQUEST_POSTS,
  REQUEST_POST,
  CREATE_POST,
  VOTE_POST } from './actionTypes'
import { 
  getPosts,
  getPost,
  addPost,
  vote_Post } from '../utils'

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
//Vote Pots
export const votePost = (post) => ({
  type:VOTE_POST,
  post,
})
export const postVote = (postId, option) => dispatch => (
  vote_Post(postId,option).then(post => dispatch(votePost(post)))
)

//get single post
export const requestPost = (post) => ({
  type: REQUEST_POST,
  post
})
export const fetchPost = (postid) => dispatch => (
  getPost(postid).then(post => dispatch(requestPost(post)))
)