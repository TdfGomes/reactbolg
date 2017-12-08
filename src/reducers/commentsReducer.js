import { REQUEST_ALL_COMMENTS } from "../actions/actionTypes";

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
    default:
      return state
  }
}

export default comments


