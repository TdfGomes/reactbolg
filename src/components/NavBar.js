import React from 'react'
import { NavLink } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/Button'
import Toolbar from 'material-ui/Toolbar'
import Tooltip from 'material-ui/Tooltip'
//icons
import Home from 'material-ui-icons/Home'
import ModeEditIcon from 'material-ui-icons/ModeEdit'

const styles = {
  title:{
    color: '#fff',
    flex:1
  },
  iconButton:{
    color:'#fff',
  }
}

const NavBar = () => (
  <AppBar>
    <Toolbar>
      <Typography type="title" style={styles.title}>
        ReactBolg
      </Typography>
      <NavLink exact to='/'>
        <Tooltip id='home' title='Home' placement='bottom'>
          <IconButton aria-label="home">
            <Home style={{ color:'#fff' }}/>
          </IconButton>
        </Tooltip>
      </NavLink>
      <NavLink to='/create-post'>
        <Tooltip id='edit' title='create a post' placement='bottom'>
          <IconButton aria-label="edit">
            <ModeEditIcon style={{ color:'#fff' }}/>
          </IconButton>
        </Tooltip>
      </NavLink>
    </Toolbar>
  </AppBar>
)

export default NavBar

