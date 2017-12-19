import {
  REQUEST_ALL_COMMENTS,
  UPDATE_COMMENT,
  VOTE_POST_COMMENT,
  DELETE_COMMENT,
  CREATE_COMMENT
} from "../actions/actionTypes"


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
    case CREATE_COMMENT:
    if(!state[action.comment.parentId]){
      state[action.comment.parentId] = [action.comment]
      return state
    }
    else {
      return {
        ...state,
        [action.comment.parentId]: [
          ...state[action.comment.parentId],
          action.comment
        ]
      }

    }
    case UPDATE_COMMENT :
    const upComment = state[action.comment.parentId].map(com => {
      if(com.id !== action.comment.id){
        return com
      }
      else{
        return action.comment
      }
    })
    return { ...state, [action.comment.parentId]: upComment}    
    case VOTE_POST_COMMENT :
    const votedComment = state[action.comment.parentId].map(com => {
      if(com.id !== action.comment.id){
        return com
      }
      else{
        return action.comment
      }
    })
    return { ...state, [action.comment.parentId]: votedComment }
    case DELETE_COMMENT :
      const newState = Object.assign(state[action.comment.parentId], [action.comment]).filter(comment => comment.id !== action.comment.id) 
      return { ...state, [action.comment.parentId]: newState }
    default:
      return state
  }
}

export default comments


