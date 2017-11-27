import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//UI
import IconButton from 'material-ui/IconButton'
import Badge from 'material-ui/Badge'
import Typography from 'material-ui/Typography'
import CommentIcon from 'material-ui-icons/Comment'
//ACTIONS
import { fetchAllComments } from '../actions/commentsAction'

class CommentsNumber extends Component {
  state = {
    postComments:0
  }
  
  static propTypes = {
    postId:PropTypes.string.isRequired,
    comments: PropTypes.object.isRequired
  }

  componentWillMount() {
    const {getAllComments, comments, postId} = this.props

    getAllComments().then(() => {
      if(comments[postId]){
        this.setState({
          postComments:comments[postId].length
        })
      }
    })
    
  }

  handleOnClick = (e) => {
    console.log(e)
  }

  render(){
    return(
      <div style={{paddingLeft:25}}>
        <IconButton aria-label="commet-post" onClick={this.handleOnClick}>
          <Badge badgeContent={this.state.postComments} color="primary">
            <CommentIcon />
          </Badge>
          <Typography type="caption" style={{marginLeft:5}}>comments</Typography>
        </IconButton>
      </div>
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