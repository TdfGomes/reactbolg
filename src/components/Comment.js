import React from 'react'
import PropTypes from 'prop-types'
//UI
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
//Components
import VoteButtons from '../components/VoteButtons'
import EditButtons from '../components/EditButtons'

const styles = (theme) => ({
  date: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  author:{
    color: theme.palette.text.secondary,
    fontSize: 14,
  },
  body:{
    marginTop:25,
    marginBottom:25,
    
  },
})

const Comment = (props) => {
  const { classes } = props
  const date = new Date(props.timestamp)
  const dateOtpions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  
  return(
    <Paper>
      <Typography type="body1" className={classes.body}>{props.body}</Typography>
      <div>
        <Typography type="subheading" className={classes.author}>by: {props.author}</Typography>
        <Typography type="subheading" className={classes.date}>{date.toLocaleDateString('en-us', dateOtpions)}</Typography>
      </div>
      <VoteButtons voteScore={props.voteScore} />
      <EditButtons />
    </Paper>
  )
}

Comment.proptypes = {
  autthor:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  id:PropTypes.string.isRequired,
  timestamp:PropTypes.number.isRequired
}

export default withStyles(styles)(Comment)