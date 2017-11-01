import React, {Component} from 'react'
import PropTypes from 'prop-types'
//UI
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Select from 'material-ui/Select'
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
//icons
import Send from 'material-ui-icons/Send'

const styles = theme => ({
  title: Object.assign(theme.typography.headline,{textAlign:'center'}),
  iconRoot: {
    color:'#fff'
  },
  fromControlRoot:{
    width:'100%',
    marginTop:16
  }

})

class Form extends Component{
  constructor(props){
    super(props)
    
    this.state = {
      author:'',
      title:'',
      category:[],
      comment:''
    }

  }

  static propTypes = {
    classes:PropTypes.object.isRequired
  }

  handleChange = (inputName) => (event) => {
    this.setState({
      [inputName]:event.target.value
    })
  }

  render(){
    const categories = [
      {
        value: 'react',
        label: 'react'
      },
      {
        value: 'redux',
        label: 'redux',
      },
      {
        value: 'udacity',
        label: 'udacity'
      }

    ]
    const {classes} = this.props

    return(
      <Paper component='form' style={{padding:35}}>
        <h2 className={classes.title}>Create Your Post</h2>
        <Grid container justify="center" spacing={8}> 
          <Grid item xs={12} sm={4}>
            <TextField
              id="title"
              label="Title"
              value={this.state.title}
              onChange={this.handleChange('title')}
              fullWidth
              margin='normal'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="author"
              label="Author"
              value={this.state.author}
              onChange={this.handleChange('author')}
              fullWidth
              margin='normal'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl classes={{root:classes.fromControlRoot}}>
              <InputLabel htmlFor="category">Category</InputLabel>
              <Select
                value={this.state.category}
                onChange={this.handleChange('category')}
                input={<Input id="category" />}
                native={false}
                displayEmpty
                multiple={false}
              >
              {categories.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
              ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="comment"
              label="Comment"
              value={this.state.comment}
              onChange={this.handleChange('comment')}
              margin='normal'
              fullWidth
              multiline
              rows="4"
            />
          </Grid>
          <Grid item xs={12} style={{textAlign:'right'}}>
            <Button raised color="primary" aria-label="submit">
              <span style={{marginRight:10,color:'#fff'}}>submit</span>
                <Send classes={{root:classes.iconRoot}}/>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(Form)