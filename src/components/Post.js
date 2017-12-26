import React, { Component } from 'react'
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
import RemoveModal from './RemoveModal'

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
    fontSize:17,
    paddingLeft: 15
  },
  cardActionsRoot:{
    justifyContent:'space-between',
    padding:'2px 10px'
  },
  postCard:{
    marginBottom: 25,
    transition: `box-shadow ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
    '&:hover':{
      boxShadow:theme.shadows[1]
    }
  },
  title: {
    transition: `color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
    '&:hover':{
      color: theme.palette.primary[400]
    }
  }
})


class Post extends Component {
  constructor(props){
    super(props)

    this.state = {
      delete: false,
    }

  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    deleted: PropTypes.bool,
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    isSingle: PropTypes.bool
  }

  handleDeletePost = (e) => {
    this.setState({ delete: e })
  }

  handleClose = (modalWindow) => (event) => {
    this.setState({ [modalWindow]: event })
  }

  render(){
    const { classes } = this.props
    const date = new Date(this.props.timestamp)
    const dateOtpions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    return(
      <div>
        <Card classes={{root:classes.postCard}} raised={true}>
          <CardContent>
            <div>
              <Typography type="body1" className={classes.date}>{date.toLocaleDateString('en-us', dateOtpions)}</Typography> 
              {!this.props.isSingle ? 
                <Link to={`/${this.props.category}/${this.props.id}`} style={{ textDecoration: 'none' }}>
                  <Typography type="title" component="h2" classes={{title:classes.title}}>{this.props.title}</Typography>
                </Link> : 
                this.props.title
              }
              <Typography type="subheading" className={classes.author}>{this.props.author}</Typography>
              <Typography type="body1" className={classes.body}>{this.props.body}</Typography>
            </div>
            { !this.props.isSingle && <CommentsNumber postId={this.props.id}/>}
          </CardContent>
          <CardActions classes={{root:classes.cardActionsRoot}}>
            <VoteButtons id={this.props.id} mode="Post" voteScore={this.props.voteScore}/>
            <EditButtons mode="Post" postId={this.props.id} delete={this.handleDeletePost}/>
          </CardActions>
        </Card>
        <RemoveModal
          open={this.state.delete}
          close={this.handleClose('delete')}
          id={this.props.id}
          mode="post"
        >
          Are you sure you want to remove this post ?
        </RemoveModal>
      </div>
    )
  }
}



export default withStyles(styles)(Post)