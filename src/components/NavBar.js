import React from 'react'
import Typography from 'material-ui/Typography';
import { cyan } from 'material-ui/colors';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Home from 'material-ui-icons/Home'
import ModeEditIcon from 'material-ui-icons/ModeEdit'

const styles = {
  appbar:{
    backgroundColor: cyan['500']
  },
  title:{
    color: '#fff',
    flex:1
  },
  iconButton:{
    display:'inline-block',
    marginRight:10
  }
}

const NavBar = () => (
  <AppBar style={styles.appbar}>
    <Toolbar>
      <Typography type="title" style={styles.title}>
        ReactBolg
      </Typography>
      <IconButton aria-label="home" color="contrast">
        <span style={styles.iconButton}>Home</span>
        <Home/>
      </IconButton>
      <IconButton aria-label="edit" color="contrast">
        <span style={styles.iconButton}>Create a post</span>
        <ModeEditIcon/>
      </IconButton>
    </Toolbar>
  </AppBar>
)

export default NavBar

