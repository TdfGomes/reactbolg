import React from 'react'
import Grid from 'material-ui/Grid'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Main from './Main'

const App = () => (
  <div>
    <NavBar/>
    <Grid container spacing={8} className='container-padTop'>
      <SideBar/>
      <Main/>
    </Grid>
  </div>
)

export default App
