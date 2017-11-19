import React, { Component } from 'react'
// import PropTypes from 'prop-types'

//UI
import Grid from 'material-ui/Grid'
//components
import Post from './Post'

class Main extends Component{
  componentDidMount() {
  }
  
  render(){
    return(
      <Grid style={{padding:'100px 25px'}} item xs={12} sm={8}>
        <Post/>
      </Grid>
    )
  }
}


export default Main