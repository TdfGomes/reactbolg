import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getPosts } from '../utils/'
//UI
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
//components
import Post from './Post'

const styles = (theme) => ({
  gridRoot: {
    padding: '100px 25px!important',
  }
})

class Main extends Component{
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  componentDidMount() {
    getPosts().then(d=>console.log(d));
  }

  render(){
    return(
      <Grid classes={{ typeItem: this.props.classes.gridRoot }} item xs={12} sm={8}>
        <Post/>
      </Grid>
    )
  }
}

export default withStyles(styles)(Main)