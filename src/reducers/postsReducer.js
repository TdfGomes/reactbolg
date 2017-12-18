import {
  REQUEST_POSTS,
  CREATE_POST,
  VOTE_POST
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
    default:
      return state
  }
}

export default posts


