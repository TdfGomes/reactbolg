import React, { Component } from 'react'
import PropTypes from 'prop-types'
//UI
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
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
      body:'',
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

  componentDidMount() {
    this.setState({
      body:this.props.body
    })
  }

  editComment = (e) => {
    this.setState({edit:e})
  }

  handleClose = (e) => {
    this.setState({edit:e})
  }

  deleteComment = (e) => {
    console.log(e)
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
          <Typography type="body1" className={classes.body}>{this.state.body}</Typography>
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
          body={this.state.body}
        />
      </div>
    )
  }
} 


export default withStyles(styles)(Comment)