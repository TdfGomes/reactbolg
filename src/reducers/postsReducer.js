import {
  REQUEST_POSTS,
  CREATE_POST
} from "../actions/actionTypes";

const posts = (state = [], action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return action.posts
    case CREATE_POST:
      return state.concat(action.post)
    default:
      return state
  }
}

export default posts


