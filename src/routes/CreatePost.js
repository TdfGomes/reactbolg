import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Form from '../components/Form'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
// import { fetchCategories } from '../actions/categoriesAction'


class CreatePost extends Component{
  componentDidMount() {

  }
  
  render(){
    return(
      <Grid container justify="center" spacing={8} style={{ paddingTop: 100 }}>
        <Form categories={this.props.categories}/>
      </Grid>
    )
  } 
}

const mapToStateToProps = (state) => ({
  categories: state.categories
})


export default withRouter( connect(mapToStateToProps)(CreatePost) )