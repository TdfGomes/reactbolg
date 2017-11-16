import React, { Component } from 'react'
//UI
import IconButton from 'material-ui/IconButton'
import Badge from 'material-ui/Badge'
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
          <Badge badgeContent={0} color="primary">
            <CommentIcon />
          </Badge>
          <Typography type="caption" style={{marginLeft:5}}>comments</Typography>
        </IconButton>
      </div>
    )
  }
}

export default CommentsNumber