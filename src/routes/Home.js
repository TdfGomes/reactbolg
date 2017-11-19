import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postsAction'
import { fetchCategories } from '../actions/categoriesAction';
// import { getCategories } from '../utils'
//UI
import Grid from 'material-ui/Grid'
//COMPONENTS
import SideBar from '../components/SideBar'
import Main from '../components/Main'

class Home extends Component {
  componentDidMount() {
    this.props.getPosts()
    this.props.getCategories()
  }
  
  render(){
    return(
      <Grid container justify="center" spacing={8}>
        <SideBar />
        <Main />
      </Grid>
    )
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    posts,
    categories
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch( fetchPosts() ),
    getCategories: () => dispatch( fetchCategories() )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
