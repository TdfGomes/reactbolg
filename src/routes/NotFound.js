import React from 'react'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

const NotFound = () => (
  <Grid container justify="center" spacing={8} style={{ paddingTop: 100 }}>
    <Grid item xs={12}>
      <Typography align="center" color="secondary" type="display4"><b>404</b></Typography>
      <Typography align="center" color="secondary" type="display3">Uppsss...</Typography>
      <Typography align="center" color="secondary" type="display3">Post Not Found</Typography>
    </Grid>
  </Grid>
)

export default NotFound