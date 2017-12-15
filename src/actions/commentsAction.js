import {
  REQUEST_ALL_COMMENTS,
  UPDATE_COMMENT,
  DELETE_COMMENT } from './actionTypes'
import { getAllComments, editComment, deleteCommentById } from '../utils'

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

export const putComment = (com) => dispatch => (
  editComment(com).then(comment => dispatch(updateComment(comment)))
)

//DELETE COMMENTS
export const deleteComment = (comment) => ({
  type: DELETE_COMMENT,
  comment
})

export const removeComment = (id) => dispatch => (
  deleteCommentById(id).then(commentId => dispatch( deleteComment(commentId)) )
)

