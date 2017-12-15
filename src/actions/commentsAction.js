import {
  REQUEST_ALL_COMMENTS,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  VOTE_POST_COMMENT } from './actionTypes'
import { 
  getAllComments,
  editComment,
  deleteCommentById,
  voteComment } from '../utils'

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
//VOTE COMMENTS
export const votePostComment = (comment) => ({
  type: VOTE_POST_COMMENT,
  comment
})

export const commentVote = (id, option) => dispatch => (
  voteComment(id, option).then((comment) => dispatch(votePostComment(comment)) )
)

