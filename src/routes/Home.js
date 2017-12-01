import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from '../actions/postsAction'
import { fetchCategories } from '../actions/categoriesAction';

//UI
import Grid from 'material-ui/Grid'
//COMPONENTS
import SideBar from '../components/SideBar'
import Main from '../components/Main'


class Home extends Component {
  static propTypes = {
    actions:PropTypes.object.isRequired,
    categories:PropTypes.array.isRequired,
    posts:PropTypes.array.isRequired
  }

  componentDidMount() {
    const { getPosts, getCategories } = this.props.actions
    getPosts()
    getCategories()
  }
  
  render(){
    return(
      <Grid container justify="center" spacing={8}>
        <SideBar categories={this.props.categories}/>
        <Main category={this.props.match.params} posts={this.props.posts}/>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  
  return {
    categories:state.categories,
    posts:state.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getPosts: () => fetchPosts(),
      getCategories: () => fetchCategories(),
    }, dispatch) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
