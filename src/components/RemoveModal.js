import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeComment } from '../actions/commentsAction'
//UI
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'

const RemoveModal = (props) => (
  <Dialog
    open={props.open}
    onClose={(e) => props.close(false)}
  >
    <DialogTitle>ATTENTION:</DialogTitle>
    <DialogContent >{`Are you sure you want to remove this ${props.mode} ?`}</DialogContent>
      <DialogActions>
        <Button onClick={() => props.close(false)} color="primary">Cancel</Button>
        <Button onClick={ () => {
            if(props.mode === 'comment'){
              props.deleteComment(props.id)
            }else {
              
            }
            props.close(false)
          }
        }
        color="primary">Yes</Button>
      </DialogActions>
  </Dialog>
)

RemoveModal.prototype = {
  close:PropTypes.func.isRequired,
  deleteComment:PropTypes.func.isRequired,
  open:PropTypes.bool.isRequired,
  id:PropTypes.string.isRequired,
  mode:PropTypes.string.isRequired,
}
 
const mapDispatchToProps = (dispatch) => ({
  deleteComment: (id) => dispatch(removeComment(id)),
})

export default connect(null, mapDispatchToProps)(RemoveModal)