import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categoriesAction'

import Grid from 'material-ui/Grid'

import Form from '../components/Form'


class CreatePost extends Component{
  static propTypes = {
    getCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
  }
  componentDidMount() {
    this.props.getCategories()
  }

  goBack = (route) => {
    this.props.history.push(route)
  }
  
  render(){
    return(
      <Grid container justify="center" spacing={8} style={{ paddingTop: 100 }}>
        <Form postId={this.props.match.params.id} categories={this.props.categories} goTo={this.goBack}/>
      </Grid>
    )
  } 
}

const mapToStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCategories: bindActionCreators(fetchCategories, dispatch),
})

export default withRouter(connect(mapToStateToProps, mapDispatchToProps)(CreatePost))