import { REQUEST_POSTS } from "../actions/actionTypes";

const posts = (state = [], action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return state.concat(action.posts)
    default:
      return state
  }
}

export default posts


