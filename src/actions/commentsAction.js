import { REQUEST_ALL_COMMENTS, UPDATE_COMMENT } from './actionTypes'
import { getAllComments, editComment } from '../utils'

//GET COMMENTS
export const requestAllComments = (comments) => ({
  type:REQUEST_ALL_COMMENTS,
  comments
})

export const fetchAllComments = () => dispatch => (
  getAllComments().then(comments => dispatch(requestAllComments(comments)))
)

//PUT COMMENTS

export const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment
})

export const putComment = (id,body) => dispatch => (
  editComment(id,body).then(comment => dispatch(updateComment(comment)))
)