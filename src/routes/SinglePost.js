import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
//UI
import Grid from 'material-ui/Grid'
//Components
import Post from '../components/Post'
// import Comments from '../components/Comments'
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

  cleanComment = () => {
    const { match:{params:{id}} } = this.props
    const postComment = this.props.comments[id]
    console.log(postComment)
    return(
      <h1>{id}</h1>
    )
  }
  
  render(){
    const { activePost } = this.props
 
    return(
      <Grid container justify="center" spacing={8} style={{ paddingTop: 100 }}>
        <Grid item xs={12} sm={8}>
          {Object.keys(activePost).length > 0 && <Post isSingle={true} {...activePost}/>}
        </Grid>
        <Grid item xs={12} sm={8}>
          {this.cleanComment()}
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