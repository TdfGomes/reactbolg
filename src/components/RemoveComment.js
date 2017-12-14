import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'

class RemoveComment extends Component {
  
  componentDidMount() {
    console.log(typeof this.props.open)
  }
  


  render() {
    return (
      <Dialog
        open={this.props.open}
        onRequestClose={(e) => this.props.close(false)}
      >
        <DialogTitle>ATTENTION:</DialogTitle>
          <DialogContent >Are you sure that you want to remove this comment ?</DialogContent>
          <DialogActions>
            <Button onClick={(e) => this.props.close(false)} color="primary">Cancel</Button>
            <Button onClick={(e) => this.props.close(false)} color="primary">Yes</Button>
          </DialogActions>
      </Dialog>
    )
  }
}

export default RemoveComment