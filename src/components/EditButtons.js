import React, { Component } from 'react'
// import PropTypes from 'prop-types'
//UI
import Tooltip from 'material-ui/Tooltip'
import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import DeleteIcon from 'material-ui-icons/Delete'



class EditButtons extends Component {

  editOnClick = (e) => {
    console.log(e)
  }

  removeOnClick = (e) => {
    console.log(e)
  }

  render(){
    return(
      <div>
        <Tooltip id="delete" title="Edit Post" placement="bottom">
          <IconButton aria-label="edit-post" onClick={this.editOnClick}>
            <ModeEditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip id="delete" title="Delete Post" placement="bottom">
          <IconButton aria-label="delete-post" onClick={this.removeOnClick}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    )
  }
}

export default EditButtons