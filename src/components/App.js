import React, { Component } from 'react'
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

const theme = createMuiTheme({
  palette: {
    primary: cyan
  },
});

class App extends Component{
  componentDidMount() {
  
  }
  
  render(){
    return(
      <MuiThemeProvider theme={theme}>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/category/:category' component={Home}/>
            <Route exact path='/create-post' component={CreatePost}/>
            <Route exact path='/posts/:id' component={SinglePost}/>
          </Switch>
        </div>
      </MuiThemeProvider>
    )
  }
} 

export default App

