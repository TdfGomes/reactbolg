import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeComment } from '../actions/commentsAction'
//UI
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'

class RemoveComment extends Component {
  handleClick = () => {
    this.props.deleteComment(this.props.id)
    this.props.close(false)
  }
  
  render() {
    return (
      <Dialog
        open={this.props.open}
        onRequestClose={(e) => this.props.close(false)}
      >
        <DialogTitle>ATTENTION:</DialogTitle>
          <DialogContent >Are you sure you want to remove this comment ?</DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.close(false)} color="primary">Cancel</Button>
            <Button onClick={this.handleClick} color="primary">Yes</Button>
          </DialogActions>
      </Dialog>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (id) => dispatch(removeComment(id)),
})

export default connect(null, mapDispatchToProps)(RemoveComment)