import React from 'react'
import Grid from 'material-ui/Grid'
import SideBar from '../components/SideBar'
import Main from '../components/Main'

const Home = () => (
  <Grid container justify="center" spacing={8}>
    <SideBar />
    <Main />
  </Grid>
)

export default Home
