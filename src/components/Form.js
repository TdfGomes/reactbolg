import React, {Component} from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
//icons
import Send from 'material-ui-icons/Send'

const styles = theme => ({

})

class Form extends Component{
  constructor(props){
    super(props)
    
    this.state = {
      author:'',
      title:'',
      category:'',
      comment:''
    }

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

    return(
      <Paper component='form' style={{padding:35}}>
        <h2>Create Your Post</h2>
        <Grid container justify="center" spacing={8}> 
          <Grid item xs={12} sm={4}>
            <TextField
              id="title"
              label="Title"
              fullWidth
              margin='normal'
              value={this.state.title}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="author"
              label="Author"
              fullWidth
              margin='normal'
              value={this.state.author}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="category"
              select
              label="Category"
              fullWidth
              margin='normal'
              SelectProps={{
                native: false,
              }}
              value={this.state.category}
            >
            {categories.map(option => (
              <option key={option.value} value={option.value}>
                  {option.label}
                </option>
            ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="comment"
              label="Comment"
              margin='normal'
              fullWidth
              multiline
              rows="4"
            />
          </Grid>
          <Grid item xs={12} style={{textAlign:'right'}}>
            <Button raised color="primary" aria-label="submit">
              <span style={{marginRight:10}}>submit</span>
                <Send/>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(Form)