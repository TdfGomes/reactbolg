import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Form from '../components/Form'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categoriesAction'


class CreatePost extends Component{
  componentDidMount() {
    this.props.getCategories()
  }
  
  render(){
    return(
      <Grid container justify="center" spacing={8} style={{ paddingTop: 100 }}>
        <Form categories={this.props.categories}/>
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
  getCategories: bindActionCreators(fetchCategories, dispatch)
})

export default withRouter(connect(mapToStateToProps, mapDispatchToProps)(CreatePost))