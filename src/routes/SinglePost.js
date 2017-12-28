import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
//UI
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add'
import { CircularProgress } from 'material-ui/Progress'
import { Transition } from 'react-transition-group'
import { withStyles } from 'material-ui/styles'
//Components
import Post from '../components/Post'
import Comment from '../components/Comment'
//ACTIONS
import { fetchPosts } from '../actions/postsAction'
import { fetchAllComments, newComment } from '../actions/commentsAction'
import { getPost } from '../utils'


const styles = ({ transitions }) => ({
  buttonAdd: {
    color: '#fff'
  },
  form:{
    margin:'35px 0',
    overflow:'hidden'
  },
  innerForm: {
    opacity: 0,
    transform: 'translateY(-30%)',
    transition: `all ${transitions.duration.complex}ms ${transitions.easing.easeInOut}`
  },
})


class SinglePost extends Component {
  constructor(props){
    super(props)

    this.state = {
      show: false,
      body:'',
      author:''
    }
  }

  static propTypes = {
    comments: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    getAllComments: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    createComment: PropTypes.func.isRequired
  }
  
  componentWillMount() {
    this.props.getAllComments()
    this.props.getPosts()

    getPost(this.props.match.params.id)
      .then(d => ! (JSON.stringify(d).length > 2)
        && this.props.history.push('/404')
      ) 
  }

  toggleEnterState = () => {
    this.setState(({ show }) => ({
      show: !show
    }))
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    const {createComment, match: { params: { id } }} = this.props
    const { author, body } = this.state
    
    if (author.length > 0 && body.length > 0 ) {
 
      createComment({
        author,
        body,
        parentId:id
      }).then(() => {
        this.setState({
          body:'',
          author:''
        })
      })
    }
  }

  handleChange = (input) => (e) =>{
    this.setState({
      [input]: e.target.value
    })
  }

  postComments = () => {
    const { match:{params:{id}} } = this.props
    const postComments = this.props.comments[id]
    if(postComments){
      return (
        <div>
          <Typography type='title' color='secondary' style={{ margin: '25px 0' }}>Comments:</Typography>
          { postComments.map(comment => <Comment key={comment.id} {...comment}/>) }
        </div>
      )
    }
    else{
      return(
        <Typography type="title" color="secondary">Be the first to leave a comment</Typography>
      )
    }
  }
  
  render(){
    const { posts, match: { params: { id } } } = this.props

    return(
      <Grid container justify="center" spacing={8} style={{ paddingTop: 100 }}>
        <Grid item xs={12} sm={8}>
          {
            posts.length > 0
              ? posts.map( post => post.id === id && <Post key={post.id} isSingle={true} {...post}/> ) 
              : <div>
                <CircularProgress color="accent" size={60}/>
                <Typography type='title' color='secondary' style={{ margin: '25px 0' }}>LOADING !!</Typography>
                </div>
          }
        </Grid>
        <Grid item xs={12} sm={8}>
          {this.postComments()}
        </Grid>
        <Grid item xs={12} sm={8}>
          <Button raised color="primary" onClick={this.toggleEnterState} classes={{ raised: this.props.classes.buttonAdd }}>
            Add a new comment
            <AddIcon/>
          </Button>
          <Transition in={this.state.show} timeout={125}>
            {
              (status) => (
                <form onSubmit={this.handleOnSubmit} className={this.props.classes.form}>
                  <div className={`${this.props.classes.innerForm} innerForm_${status}`}>
                    <TextField
                      id="author"
                      label="Author"
                      value={this.state.author}
                      onChange={this.handleChange('author')}
                      fullWidth
                      margin='dense'
                    />
                    <TextField
                      id="body"
                      label="Comment"
                      value={this.state.body}
                      onChange={this.handleChange('body')}
                      margin='dense'
                      fullWidth
                      multiline
                      rows="4"
                    />
                    <Button color="primary" aria-label="submit" type="submit">Submit</Button>
                  </div>
                </form>
              )    
            }
          </Transition>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments,
  posts: state.posts,
})

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(fetchPosts()),
  getAllComments: () => dispatch(fetchAllComments()),
  createComment : (comment) => dispatch(newComment(comment))
})
 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SinglePost) ))