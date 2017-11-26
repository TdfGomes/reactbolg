import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postsAction'
import { fetchCategories } from '../actions/categoriesAction';
import { fetchAllComments } from '../actions/commentsAction'
//UI
import Grid from 'material-ui/Grid'
//COMPONENTS
import SideBar from '../components/SideBar'
import Main from '../components/Main'


class Home extends Component {
  componentDidMount() {
    const { getPosts, getCategories, getAllComments } = this.props.actions
    getPosts()
    getCategories()
    getAllComments()
  }
  
  render(){
    return(
      <Grid container justify="center" spacing={8}>
        <SideBar categories={this.props.categories}/>
        <Main posts={this.props.posts}/>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  // const postsIds = state.posts.map(post => post.id)
  // console.log(state.comments)
  // if(postsIds.length > 0){
  //   const newObj = Object.keys(state.comments).map(key => {
  //     const newKey = postsIds[key] || key
  //     return {
  //       [newKey]:state.comments[key]  
  //     }
  //   })
  //   console.log(newObj)
  // }
  return {
    posts:state.posts,
    categories:state.categories,
    comments:state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getPosts: () => fetchPosts(),
      getCategories: () => fetchCategories(),
      getAllComments: () => fetchAllComments()
    }, dispatch) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
