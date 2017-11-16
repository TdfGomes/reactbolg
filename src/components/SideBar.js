import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getCategories } from '../utils/'
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
    padding:'100px 4px 25px 20px!important',
    minHeight:'100vh'
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

  handleGetCategories = (data) => {
    data.map(cat => this.setState( (prevState) => {
        const { name } = cat
      return prevState.categories.push(name)
      }) 
    )
  }
  
  componentDidMount() {
    getCategories().then(d => this.handleGetCategories(d))
  }
  
  render(){
    return(
      <Grid classes={{ typeItem:this.props.classes.gridRoot}} item xs={12} sm={4}>
        <SearchBar/>
        <div style={{ marginTop: 35 }}>
          <Typography type='subheading' color='secondary'>categories:</Typography>
        </div>
      </Grid>
    )
  }
} 


export default withStyles(styles)(SideBar);