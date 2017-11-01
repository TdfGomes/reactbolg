import React from 'react';
import PropTypes from 'prop-types'
//UI
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid'
//Components
import SearchBar from './SearchBar'

const styles = (theme) => ({
  gridRoot:{
    backgroundColor: theme.palette.grey['50']
  }
})

const SideBar = (props) => (

  <Grid classes={{ typeItem:props.classes.gridRoot}} item xs={12} sm={4}>
    <SearchBar/>
  </Grid>
);

SideBar.proptypes = {
  classes:PropTypes.object.isRequired
}

export default withStyles(styles)(SideBar);