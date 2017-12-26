import {
  REQUEST_POSTS,
  CREATE_POST,
  VOTE_POST,
  EDIT_POST,
  SORT_POST,
  DELETE_POST
} from "../actions/actionTypes";

const posts = (state = [], action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return action.posts
    case CREATE_POST:
      return state.concat(action.post)
    case VOTE_POST:
      return state.map(post => {
        if(post.id !== action.post.id){
          return post
        }
        return {
          ...post,
          voteScore:action.post.voteScore
        }
      })
    case EDIT_POST:
      return state.map(post => {
        if (post.id !== action.post.id) {
          return post
        }
        return {
          ...post,
          body: action.post.body,
          title: action.post.title
        }
      })
    case SORT_POST:
      return action.posts
    case DELETE_POST:
      return state.filter(p => p.id !== action.post.id)
    default:
      return state
  }
}

export default posts


