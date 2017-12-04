import { REQUEST_CATEGORIES } from "../actions/actionTypes";

const categories = (state = [], action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      if(JSON.stringify(state) !== JSON.stringify(action.categories)){
        return state.concat(action.categories)
      }
      else{
        return state
      }
    default:
      return state
  }
}

export default categories


