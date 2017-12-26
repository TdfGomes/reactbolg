import { 
  REQUEST_POSTS,
  REQUEST_POST,
  CREATE_POST,
  VOTE_POST,
  EDIT_POST,
  SORT_POST, 
  DELETE_POST} from './actionTypes'
import { 
  getPosts,
  getPost,
  addPost,
  vote_Post,
  editPost,
  deletePostById } from '../utils'

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
//edit Post
export const edit_post = (post) => ({
  type:EDIT_POST,
  post,
})
export const putPost = (post) => dispatch => (
  editPost(post).then(p => dispatch(edit_post(p)))
)
//sort Posts
export const sortPost = (posts) => ({
  type: SORT_POST,
  posts,
})
export const sortedPosts = (sortVal) => dispatch => (
  getPosts().then(posts => {
    switch(sortVal){
      case 'voteAsc':
        posts.sort( (a, b) => a.voteScore > b.voteScore )
      break
      case 'voteDesc':
          posts.sort( (a,b) => a.voteScore < b.voteScore )
        break
        case 'recent':
          posts.sort( (a,b) => a.timestamp < b.timestamp )
        break
        case 'oldest':
          posts.sort( (a,b) => a.timestamp > b.timestamp )
        break
      default:
        return posts
    }
    return dispatch( sortPost(posts) )
  })
)

//DELETE POST
export const deletePost = (post) => ({
  type: DELETE_POST,
  post
})

export const removePost = (id) => dispatch => (
  deletePostById(id).then(postId => dispatch(deletePost(postId)))
)

//get single post
export const requestPost = (post) => ({
  type: REQUEST_POST,
  post
})
export const fetchPost = (postid) => dispatch => (
  getPost(postid).then(post => dispatch(requestPost(post)))
)