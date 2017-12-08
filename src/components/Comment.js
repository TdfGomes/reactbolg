import React from 'react'
import PropTypes from 'prop-types'

const Comment = (props) => (
  <h1>{props.body}</h1>
)

Comment.proptypes = {
  body:PropTypes.string.isRequired
}

export default Comment