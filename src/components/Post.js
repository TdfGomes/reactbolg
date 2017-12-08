import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//UI
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
//Components
import VoteButtons from './VoteButtons'
import EditButtons from './EditButtons'
import CommentsNumber from './CommentsNumber'

const styles = (theme) => ({
  date: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  author:{
    color: theme.palette.text.secondary,
  },
  body:{
    marginTop:25,
    marginBottom:25,
    fontSize:17
  },
  cardActionsRoot:{
    justifyContent:'space-between'
  },
  postCard:{
    marginBottom: 25
  }
})


const Post = (props) => {
  const { classes } = props
  const date = new Date(props.timestamp)
  const dateOtpions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  return(
    <Card classes={{root:classes.postCard}}>
      <CardContent>
        <div>
          <Typography type="body1" className={classes.date}>{date.toLocaleDateString('en-us', dateOtpions)}</Typography>
          <Typography type="title" component="h2">
            {!props.isSingle ? <Link to={`/posts/${props.id}`}>{props.title}</Link> :  props.title }
          </Typography>
          <Typography type="subheading" className={classes.author}>{props.author}</Typography>
          <Typography type="body1" className={classes.body}>{props.body}</Typography>
        </div>
        { !props.isSingle && <CommentsNumber postId={props.id}/>}
      </CardContent>
      <CardActions classes={{root:classes.cardActionsRoot}}>
        <VoteButtons voteScore={props.voteScore}/>
        {props.isSingle && <EditButtons/>}
      </CardActions>
    </Card>
  )
}

Post.propTypes = {
  classes:PropTypes.object.isRequired,
  author:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  category:PropTypes.string.isRequired,
  deleted:PropTypes.bool,
  id: PropTypes.string.isRequired,
  timestamp:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  voteScore:PropTypes.number.isRequired,
  isSingle: PropTypes.bool
}

export default withStyles(styles)(Post)