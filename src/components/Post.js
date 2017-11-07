import React from 'react'
import PropTypes from 'prop-types'
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
    marginBottom:25
  },
  cardActionsRoot:{
    justifyContent:'space-between'
  }
})

const PostContent = (props) => {
  const { classes } = props
  const date = new Date()
  const dateOtpions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  
  return(
    <div>
      <Typography type="body1" className={classes.date}>
        {date.toLocaleDateString('en-us', dateOtpions)}
      </Typography>
      <Typography type="title" component="h2">
        Lorem Title
        </Typography>
      <Typography type="subheading" className={classes.author}>
        by author
        </Typography>
      <Typography type="body1" className={classes.body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia nunc in erat cursus, vel consequat tortor tristique. In sit amet purus accumsan, dapibus est eu, malesuada sapien.
      </Typography>
    </div>
  )
}


const Post = (props) => {
  const { classes } = props
  return(
    <Card>
      <CardContent>
        <PostContent classes={classes}/>
        <CommentsNumber/>
      </CardContent>
      <CardActions classes={{root:classes.cardActionsRoot}}>
        <VoteButtons/>
        <EditButtons/>
      </CardActions>
    </Card>
  )
}

Post.propTypes = {
  classes:PropTypes.object.isRequired
}

export default withStyles(styles)(Post)