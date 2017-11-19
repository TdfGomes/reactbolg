import { combineReducers } from 'redux'
import posts  from './postsReducer'
import categories from './categoriesReducer'

const rootReducer = combineReducers({
  posts,
  categories
 })

export default rootReducer
