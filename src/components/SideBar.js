import React from 'react';
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import SearchBar from './SearchBar'

const SideBar = () => (
  <Grid item xs={12} sm={4}>
    <Paper>
      <SearchBar/>
    </Paper>
  </Grid>
);


export default SideBar;