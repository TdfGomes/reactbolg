import { REQUEST_ALL_COMMENTS } from "../actions/actionTypes";

const comments = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_ALL_COMMENTS:
      return Object.assign(state,action.comments)
    default:
      return state
  }
}

export default comments


