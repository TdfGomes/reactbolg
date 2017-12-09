import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//UI
import IconButton from 'material-ui/IconButton'
import Badge from 'material-ui/Badge'
import Typography from 'material-ui/Typography'
import CommentIcon from 'material-ui-icons/Comment'
//ACTIONS
import { fetchAllComments } from '../actions/commentsAction'

class CommentsNumber extends Component {
  
  static propTypes = {
    comments: PropTypes.object.isRequired,
    getAllComments:PropTypes.func.isRequired,
    postId:PropTypes.string.isRequired
  }

  componentDidMount() {
    const { getAllComments } = this.props
    getAllComments()
  }
    
  render(){
    const {comments, postId} = this.props
  
    return(
      <Link to={`/posts/${postId}`}>
        <div style={{paddingLeft:25}}>
          <IconButton aria-label="commet-post">
            <Badge 
              badgeContent={comments[postId] ? comments[postId].length : 0}
              color="primary">
              <CommentIcon />
            </Badge>
            <Typography type="caption" style={{marginLeft:5}}>comments</Typography>
          </IconButton>
        </div>
      </Link>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllComments: () => dispatch( fetchAllComments() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsNumber)