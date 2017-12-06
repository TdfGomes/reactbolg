import {
  REQUEST_POST,
} from "../actions/actionTypes";

const activePost = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_POST:
      return action.post
    default:
      return state
  }
}

export default activePost


