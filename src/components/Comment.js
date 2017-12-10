import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
//UI
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
//UTILS
// import { editComment, fetchComments} from '../utils'
import { updateComment } from '../actions/commentsAction'
//Components
import VoteButtons from '../components/VoteButtons'
import EditButtons from '../components/EditButtons'
import EditComment from '../components/EditComment'


const styles = (theme) => ({
  date: {
    marginBottom: 16,
    fontSize: 13,
    color: theme.palette.text.secondary,
  },
  author:{
    textTransform:'capitalize',
    fontSize: 15,
  },
  body:{
    marginTop:25,
    marginBottom:25,
    fontSize:17,
    paddingLeft:15
  },
  comment:{
    padding:16,
    marginBottom:35
  }
})

class Comment extends Component {
  constructor(props){
    super(props)

    this.state = {
      edit:false
    }
  }

  static proptypes = {
    autthor: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired
  }

  editComment = (e) => {
    this.setState({edit:e})
  }

  deleteComment = (e) => {
    console.log(e)
  }

  handleClose = (e) => {
    this.setState({edit:e})
  }
  handleOnSubmit = (body) => {
    const { classes, puComment, ...comment} = this.props
    comment.body = body
    
    this.props.puComment(comment)
  }
    
  render(){
    const { classes } = this.props
    const date = new Date(this.props.timestamp)
    const dateOtpions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    
    return(
      <div>
        <Paper elevation={1} className={classes.comment}>
          <div>
            <Typography type="subheading" className={classes.author} color="primary">{this.props.author}</Typography>
            <Typography type="subheading" className={classes.date}>{date.toLocaleDateString('en-us', dateOtpions)}</Typography>
          </div>
          <Typography type="body1" className={classes.body}>{this.props.body}</Typography>
          <Grid container spacing={8} justify="space-between">
            <Grid item>
              <VoteButtons voteScore={this.props.voteScore} />
            </Grid>
            <Grid item>
              <EditButtons edit={this.editComment} delete={this.deleteComment}/>
            </Grid>
          </Grid>
        </Paper>
        <EditComment
          open={this.state.edit}
          close={this.handleClose}
          body={this.props.body}
          id={this.props.id}
          onSubmit={this.handleOnSubmit}
        />
      </div>
    )
  }
} 

const mapDispatchToProps = (dispatch) => ({
  puComment: (comment) => dispatch(updateComment(comment))
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Comment))