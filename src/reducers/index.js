import { combineReducers } from 'redux'
import posts  from './postsReducer'
import categories from './categoriesReducer'
import comments from './commentsReducer'

const rootReducer = combineReducers({
  categories,
  comments,
  posts
 })

export default rootReducer
