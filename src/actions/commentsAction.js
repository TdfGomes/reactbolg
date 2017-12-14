import {
  REQUEST_ALL_COMMENTS,
  UPDATE_COMMENT,
  DELETE_COMMENT } from './actionTypes'
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

export const putComment = (com) => dispatch => (
  editComment(com).then(comment => dispatch(updateComment(comment)))
)

//DELETE COMMENTS
export const deleteComment = (comment) => {
  console.log(comment)
  return{
    type: DELETE_COMMENT,
    comment
  }
}

export const removeComment = (id) => dispatch => {
  console.log(id)
  return deleteComment(id).then(commentId => {
    console.log(commentId)
    return dispatch(deleteComment(commentId))
  })
}

