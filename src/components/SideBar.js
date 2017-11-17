import React, { Component } from 'react'
import PropTypes from 'prop-types'
//UI
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
//Components
import SearchBar from './SearchBar'

const styles = (theme) => ({
  gridRoot:{
    backgroundColor: theme.palette.grey['50'],
    borderRight: `1px solid ${theme.palette.grey['200']}`,
    minHeight:'100vh',
    position:'relative'
  },
  fixedSideBar:{
    boxSizing:'border-box',
    position: 'fixed',
    left: 0,
    top: 5,
    width: '33.3%',
    height: '100%',
    padding:'100px 4px 25px 20px',
  }
})

class SideBar extends Component{
  constructor(props){
    super(props)
    
    this.state = {
      categories:[]
    }
  }
  static proptypes = {
    classes:PropTypes.object.isRequired
  }
  
  render(){
    const { classes } = this.props
    return(
      <Grid classes={{ typeItem:classes.gridRoot}} item xs={12} sm={4}>
        <div className={classes.fixedSideBar}>
          <SearchBar/>
          <div style={{ marginTop: 35 }}>
            <Typography type='subheading' color='secondary'>categories:</Typography>
          </div>
        </div>
      </Grid>
    )
  }
} 


export default withStyles(styles)(SideBar);