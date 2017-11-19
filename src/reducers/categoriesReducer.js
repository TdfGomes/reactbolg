import { REQUEST_CATEGORIES } from "../actions/actionTypes";

const categories = (state = [], action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return state.concat(action.categories)
    default:
      return state
  }
}

export default categories


