import React, { Component } from 'react'
import PropTypes from 'prop-types'
//UI
import Tooltip from 'material-ui/Tooltip'
import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import DeleteIcon from 'material-ui-icons/Delete'



class EditButtons extends Component {
  static proptypes = {
    edit:PropTypes.func.isRequired,
    delete:PropTypes.func.isRequired,
    mode:PropTypes.string.isRequired
  }

  editOnClick = (e) => {
    this.props.edit(true)
  }

  removeOnClick = (e) => {
    this.props.delete(true)
  }

  render(){
    return(
      <div>
        <Tooltip id="delete" title={`Edit ${this.props.mode}`} placement="bottom">
          <IconButton aria-label="edit-post" onClick={this.editOnClick}>
            <ModeEditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip id="delete" title={`Delete ${this.props.mode}`} placement="bottom">
          <IconButton aria-label="delete-post" onClick={this.removeOnClick}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    )
  }
}

export default EditButtons