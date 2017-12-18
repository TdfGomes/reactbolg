import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//UI
import Tooltip from 'material-ui/Tooltip'
import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import DeleteIcon from 'material-ui-icons/Delete'



class EditButtons extends Component {
  static proptypes = {
    edit:PropTypes.func.isRequired,
    delete:PropTypes.func.isRequired,
    mode:PropTypes.string.isRequired,
    postId:PropTypes.string
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
        {
        this.props.mode === 'Comment' ? 
        <Tooltip id="edit" title={`Edit ${this.props.mode}`} placement="bottom">
          <IconButton aria-label="edit-post" onClick={this.editOnClick}>
            <ModeEditIcon />
          </IconButton>
        </Tooltip> :
        <Tooltip id="edit" title={`Edit ${this.props.mode}`} placement="bottom">
          <Link to={`/edit-post/${this.props.postId}`}>
            <IconButton aria-label="edit-post">
              <ModeEditIcon />
            </IconButton>
          </Link> 
        </Tooltip>
        }
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