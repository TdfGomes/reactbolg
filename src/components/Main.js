import React from 'react'
import PropTypes from 'prop-types'
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

const Main = (props) =>(
  <Grid classes={{ typeItem: props.classes.gridRoot }} item xs={12} sm={8}>
    <Post/>
  </Grid>
)

Main.propTypes = {
  classes:PropTypes.object.isRequired
}

export default withStyles(styles)(Main)