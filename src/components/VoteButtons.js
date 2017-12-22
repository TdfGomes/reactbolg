import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { postVote } from '../actions/postsAction'
import { commentVote } from '../actions/commentsAction'
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
    classes:PropTypes.object.isRequired,
    voteScore:PropTypes.number.isRequired,
    mode:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired
  }

  handleVote = (vote) => (e) => {
    if(this.props.mode === 'Post'){
      this.props.votePost(this.props.id,{option:vote})
    }
    else {
      this.props.voteComment(this.props.id, { option: vote })
    }
  }

  render(){
    const { classes } = this.props

    return(
      <div className={classes.buttonFlex}>
        <div className={classes.buttonFlex}>
          <Button fab aria-label="add" classes={{ fab: classes.fabButton, raised: classes.buttonAdd }} onClick={this.handleVote('upVote')}>
            <ThumbUpIcon / >
          </Button>
          <span className={classes.voteNumber}>{this.props.voteScore}</span>
        </div>
        <div className={classes.buttonFlex}>
          <Button fab aria-label="remove" classes={{ fab: classes.fabButton, raised: classes.buttonRemove }} onClick={this.handleVote('downVote')}>
            <ThumbDownIcon / >
          </Button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  votePost: (id, option) => dispatch(postVote(id, option)),
  voteComment: (id, option) => dispatch(commentVote(id,option))
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(VoteButtons))