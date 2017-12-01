import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
//UI
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
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
    padding:'100px 15px 25px 20px',
  },
  buttonsContainer:{
    width:'100%',
  },
  button:{
    color:'#fff'
  },
  
})

class SideBar extends Component{

  static proptypes = {
    classes:PropTypes.object.isRequired,
    categories:PropTypes.array.isRequired
  }
  
  render(){
    const { categories, classes } = this.props
    return(
      <Grid classes={{ typeItem:classes.gridRoot}} item xs={12} sm={4}>
        <div className={classes.fixedSideBar}>
          <Typography type='subheading' color='secondary' style={{marginBottom:5}}>search:</Typography>
          <SearchBar/>
          <div style={{ marginTop: 35 }}>
            <Typography type='subheading' color='secondary' style={{marginBottom:5}}>categories:</Typography>
            <div className={classes.buttonsContainer}>
              <NavLink key="all" exact to="/" activeClassName="categorySelected" style={{ textDecoration: 'none', display: 'block', marginBottom: 15 }}>
                <Button classes={{raisedPrimary:classes.button}}raised color="primary">All</Button>
              </NavLink>
              {categories.map(cat => 
                <NavLink key={cat.name} to={`/category/${cat.path}`} activeClassName="categorySelected" style={{ textDecoration: 'none', display: 'block', marginBottom: 15 }}>
                  <Button classes={{raisedPrimary:classes.button}}raised color="primary">{cat.name}</Button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </Grid>
    )
  }
} 


export default withStyles(styles)(SideBar);