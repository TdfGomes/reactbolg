import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { cyan } from 'material-ui/colors'
//Components
import NavBar from './NavBar'
//Routes
import Home from '../routes/Home'
import CreatePost from '../routes/CreatePost'

const theme = createMuiTheme({
  palette: {
    primary: cyan
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/create-post' component={CreatePost}/>
      </Switch>
    </div>
  </MuiThemeProvider>
)

export default App
