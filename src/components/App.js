import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
//UI
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { cyan } from 'material-ui/colors'
//Components
import NavBar from './NavBar'
//Routes
import Home from '../routes/Home'
import CreatePost from '../routes/CreatePost'
import SinglePost from '../routes/SinglePost'
import NotFound from '../routes/NotFound'

const theme = createMuiTheme({
  palette: {
    primary: cyan
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/create-post' component={CreatePost} />
        <Route exact path='/edit-post/:id' component={CreatePost} />
        <Route exact path='/:category/:id' component={SinglePost} />
        <Route exact path='/:category' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </MuiThemeProvider>
)
  
export default withRouter( App )

