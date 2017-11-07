import React, { Component } from 'react'
//UI
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import CommentIcon from 'material-ui-icons/Comment'

class CommentsNumber extends Component {
  handleOnClick = (e) => {
    console.log(e)
  }

  render(){
    return(
      <div style={{paddingLeft:25}}>
        <IconButton aria-label="commet-post" onClick={this.handleOnClick}>
          <CommentIcon />
          <Typography type="caption" style={{ marginLeft: 5 }}>{0}</Typography>
          <Typography type="caption" style={{marginLeft:5}}>comments</Typography>
        </IconButton>
      </div>
    )
  }
}

export default CommentsNumber