import React from 'react'
import Grid from 'material-ui/Grid'
import SideBar from '../components/SideBar'
import Main from '../components/Main'

const Home = () => (
  <Grid container spacing={8} style={{paddingTop:70}}>
    <SideBar />
    <Main />
  </Grid>
)

export default Home
