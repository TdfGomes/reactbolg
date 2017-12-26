import React from 'react'
import { Route, Switch } from 'react-router-dom'
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
        <Route path='/category/:category' component={Home} />
        <Route path='/create-post' component={CreatePost} />
        <Route path='/edit-post/:id' component={CreatePost} />
        <Route path='/:category/:id' component={SinglePost} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </MuiThemeProvider>
)
  
export default App

