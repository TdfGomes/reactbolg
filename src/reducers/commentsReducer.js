import {
  REQUEST_ALL_COMMENTS,
  UPDATE_COMMENT,
  DELETE_COMMENT } from "../actions/actionTypes"


const comments = (state = {}, action) => {
  let allComents = {}
  //wait until action.comments have resuls
  if(typeof action.comments === 'object'){
    const { comments } = action
    //get all posts ids from comment object using destrutcturing in a loop
    const postsIds = comments.map(comment => {
      let parentId = ''
      if(comment.length > 0){
         [{ parentId }] = comment
      }
      return parentId
    })
    //convert comments array in a object with a post id key
    allComents = comments.reduce( (newObj,comment,key) => {
      const newKey = postsIds[key] || key
      newObj[newKey] = comment
      return newObj
    },{})
  }

  switch (action.type) {
    case REQUEST_ALL_COMMENTS:
      return allComents
    case UPDATE_COMMENT :
    // const upComment = Object.assign(state[action.comment.parentId],[action.comment])
    const upComment = state[action.comment.parentId].map(com => {
      if(com.id !== action.comment.id){
        return com
      }
      else{
        return action.comment
      }
    })
    console.log(upComment)
    return { ...state, [action.comment.parentId]: upComment}    
    // return state
    case DELETE_COMMENT :
      const comments = Object.assign(state[action.comment.parentId], [action.comment])
      const newState = comments.filter(comment => comment.id !== action.comment.id)
      
      return { ...state, [action.comment.parentId]: newState }
    default:
      return state
  }
}

export default comments


