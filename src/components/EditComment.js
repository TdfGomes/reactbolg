import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'


function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class EditComment extends Component {
  constructor(props){
    super(props)

    this.state = {
      body:''
    }
  }

  static propTypes = {
    body:PropTypes.string.isRequired,
    close: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
  }
  
  componentDidMount() {
    this.setState({body:this.props.body})
  }

  handleOnSubmit = (e) => {

  }
  
  render(){
    return(
      <Dialog 
        open={this.props.open}
        onRequestClose={ (e) => this.props.close(false) }
        transition={Transition}
        >
        <DialogTitle>Edit Your Comment Below:</DialogTitle>
        <form onSubmit={this.handleOnSubmit}>
          <DialogContent style={{ width: 500 }}>
            <TextField
              id="body"
              label="Comment"
              value={this.state.body}
              margin='normal'
              fullWidth
              multiline
              rows="4"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={ (e) => this.props.close(false) } color="primary">Cancel</Button>
            <Button color="primary" aria-label="submit" type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    )   
  }
}

export default EditComment