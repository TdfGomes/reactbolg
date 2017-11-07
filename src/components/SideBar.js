import React from 'react';
import PropTypes from 'prop-types'
//UI
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid'
//Components
import SearchBar from './SearchBar'

const styles = (theme) => ({
  gridRoot:{
    backgroundColor: theme.palette.grey['50'],
    borderRight: `1px solid ${theme.palette.grey['200']}`,
    padding:'100px 4px 25px 20px!important',
    minHeight:'100vh'
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