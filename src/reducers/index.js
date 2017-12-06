import { combineReducers } from 'redux'
import posts  from './postsReducer'
import activePost from './singlePostReducer'
import categories from './categoriesReducer'
import comments from './commentsReducer'

const rootReducer = combineReducers({
  categories,
  comments,
  posts,
  activePost
 })

export default rootReducer
