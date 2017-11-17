import React, { Component } from 'react'
import PropTypes from 'prop-types'
//UI
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button';
import ThumbUpIcon from 'material-ui-icons/ThumbUp'
import ThumbDownIcon from 'material-ui-icons/ThumbDown'

const styles = theme => ({
  buttonFlex:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
  },
  buttonAdd: {
    color: '#fff',
    backgroundColor: theme.palette.primary['400']

  },
  buttonRemove: {
    color: '#fff',
    backgroundColor: theme.palette.secondary['300']
  },
  fabButton:{
    width:35,
    height:35,
    margin: theme.spacing.unit,
    boxShadow: theme.shadows[1]
  },
  voteNumber:{
    display:'inline-block'
  }
});

class VoteButtons extends Component {

  static propTypes = {
    classes:PropTypes.object.isRequired
  }

  addVote = (e) => {
    console.log(e.target)
  }

  removeVote = (e) => {
    console.log(e.target)
  }

  render(){
    const { classes } = this.props

    return(
      <div className={classes.buttonFlex}>
        <div className={classes.buttonFlex}>
          <Button fab aria-label="add" classes={{fab:classes.fabButton,raised:classes.buttonAdd}} onClick={this.addVote}>
            <ThumbUpIcon / >
          </Button>
          <span className={classes.voteNumber}>0</span>
        </div>
        <div className={classes.buttonFlex}>
          <Button fab aria-label="remove" classes={{ fab: classes.fabButton, raised: classes.buttonRemove}} onClick={this.removeVote}>
            <ThumbDownIcon / >
          </Button>
          <span className={classes.voteNumber}>0</span>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(VoteButtons)