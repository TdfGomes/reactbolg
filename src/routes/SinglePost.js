import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
// import { connect } from 'react-redux'
//UI
import Grid from 'material-ui/Grid'
//Components
// import Post from '../components/Post'

class SinglePost extends Component {
  componentDidMount() {
    
  }
  
  render(){
    return(
      <Grid container justify="center" spacing={8} style={{ paddingTop: 100 }}>
        <h1>SINGLE POST: {this.props.match.params.id}</h1>
      </Grid>
    )
  }
}

export default SinglePost