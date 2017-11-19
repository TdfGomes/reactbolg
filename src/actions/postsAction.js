import { REQUEST_POSTS } from './actionTypes'
import { getPosts } from '../utils'


export const requestPosts = (posts) => ({
  type: REQUEST_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  getPosts().then(posts => dispatch(requestPosts(posts)))
)


