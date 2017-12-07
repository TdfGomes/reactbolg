import React from 'react'
import PropTypes from 'prop-types'

const Comments = (props) => (
  <h1>{props.comment}</h1>
)

Comments.proptypes = {
  comment:PropTypes.string.isRequired
}

export default Comments