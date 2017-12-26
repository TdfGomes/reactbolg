import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeComment } from '../actions/commentsAction'
import { removePost } from '../actions/postsAction'
//UI
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'

class RemoveModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      dialogContent: `Are you sure you want to remove this ${this.props.mode} ?`,
      deleted:false
    }
  }

  static propType = {
    close: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
  }
  
  handleDelete = () => {
    if (this.props.mode === 'comment') {
      this.props.deleteComment(this.props.id)
      this.props.close(false)
    }
    else { 
      this.setState({
          dialogContent:'This post was deleted with sucess !',
          deleted:true
        },
        () => setTimeout( () => this.props.deletePost(this.props.id).then(() => this.props.history.push('/') ), 1500 )
      )
    }
  }

  render(){
      return(
      <Dialog
        open={this.props.open}
        onClose={(e) => this.props.close(false)}
      >
        <DialogTitle>ATTENTION:</DialogTitle>
        <DialogContent >{this.state.dialogContent}</DialogContent>
          { ! this.state.deleted &&
            <DialogActions>
              <Button onClick={() => this.props.close(false)} color="primary">Cancel</Button>
              <Button onClick={this.handleDelete} color="primary">Yes</Button>
            </DialogActions>
          }
      </Dialog>
    )
  }
}
 
const mapDispatchToProps = (dispatch) => ({
  deleteComment: (id) => dispatch(removeComment(id)),
  deletePost: (id) => dispatch(removePost(id))
})

export default withRouter( connect(null, mapDispatchToProps)(RemoveModal) )