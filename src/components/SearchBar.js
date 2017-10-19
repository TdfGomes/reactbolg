import React from 'react'
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField'
import Search from 'material-ui-icons/Search'

const styles = (theme) => ({
  wrapper:{
    marginTop:10
  }
})

const SearchBar = (props) => {
  const { classes } = props
  return(
    <div className={classes.wrapper}>
      <Search/>
      <TextField
        id="search"
        label="Search field"
        type="search"
        margin="normal"
      />
    </div>
  )
}


export default withStyles(styles)(SearchBar);