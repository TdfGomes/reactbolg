import { REQUEST_ALL_COMMENTS } from './actionTypes'
import { getAllComments } from '../utils'

export const requestAllComments = (comments) => ({
  type:REQUEST_ALL_COMMENTS,
  comments
})

export const fetchAllComments = () => dispatch => (
  getAllComments().then(comments => dispatch(requestAllComments(comments)))
)