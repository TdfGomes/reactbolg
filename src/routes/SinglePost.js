import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
//UI
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
//Components
import Post from '../components/Post'
import Comment from '../components/Comment'
//ACTIONS
import { fetchPost } from '../actions/postsAction'
import { fetchAllComments } from '../actions/commentsAction'

class SinglePost extends Component {
  static propTypes = {
    activePost: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
    getAllComments: PropTypes.func.isRequired,
    getPost: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { getPost, getAllComments, match:{params:{id}} } = this.props

    getPost(id)
    getAllComments()
  }

  postComments = () => {
    const { match:{params:{id}} } = this.props
    const postComments = this.props.comments[id]
    if(postComments){
      return (
        postComments.map(comment => <Comment key={comment.id} {...comment}/>)
      )
    }
    else{
      return(
        <Typography type="title" color="secondary">Be the first to leave a comment</Typography>
      )
    }
  }
  
  render(){
    const { activePost } = this.props
 
    return(
      <Grid container justify="center" spacing={8} style={{ paddingTop: 100 }}>
        <Grid item xs={12} sm={8}>
          {Object.keys(activePost).length > 0 && <Post isSingle={true} {...activePost}/>}
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography type='title' color='secondary' style={{ margin: '25px 0' }}>Comments:</Typography>
          {this.postComments()}
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  activePost: state.activePost,
  comments: state.comments
})

const mapDispatchToProps = (dispatch) => ({
  getPost: (postid) => dispatch(fetchPost(postid)),
  getAllComments: () => dispatch(fetchAllComments())
})
 

export default withRouter( connect(mapStateToProps,mapDispatchToProps)(SinglePost) )