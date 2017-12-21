import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//UTILS
import { 
  addNewPost,
  fetchPost,
  putPost } from '../actions/postsAction'
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
import Snackbar from 'material-ui/Snackbar'
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
      category:'',
      body:'',
      sentOk: false,
      editMode:false
    }

  }

  static propTypes = {
    activePost:PropTypes.object,
    classes:PropTypes.object.isRequired,
    createPost: PropTypes.func.isRequired,
    getPost: PropTypes.func,
    goTo: PropTypes.func,
    categories: PropTypes.array.isRequired,
    postId: PropTypes.string
  }
  
  componentWillMount() {
    this.props.postId ? this.setState({editMode:true}) : this.setState({editMode:false})
  }
  
  componentDidMount() {
    if(this.state.editMode){
      this.props.getPost(this.props.postId).then(() => {
        const { author, body, category, title } = this.props.activePost
        this.setState({author,body,category,title})
      })   
    }
  }
  

  handleChange = (inputName) => (event) => {
    this.setState({
      [inputName]:event.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    const { createPost, editPost, activePost } = this.props
    const {author, title, category, body } = this.state
    if(!this.props.postId){
      if(author.length > 0 && body.length > 0 && category.length > 0 && title.length > 0){
        createPost({
          author,
          body,
          category,
          title
        })
          .then( () => this.setState({
            author: '',
            title: '',
            category: '',
            body: '',
            sentOk: true
          }))
      }
    }
    else {
      if(body.length > 0 && title.length > 0){
        activePost.body = this.state.body
        activePost.title = this.state.title
        
        editPost(activePost)
          .then( () => this.setState({
              author: '',
              title: '',
              category: '',
              body: '',
              sentOk: true
            })
          )
      }
    }
  }
  
  render(){
    const { categories, classes } = this.props
    
    return(
      <div>

      <Paper component='form' method="POST" style={{ padding: 35 }} onSubmit={this.handleOnSubmit}>
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
                disabled={this.state.editMode ? true : false}
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
                  disabled={this.state.editMode ? true : false}
                >
                {categories.map(option => (
                  <MenuItem key={option.name} value={option.name}>
                      {option.name}
                  </MenuItem>
                ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="body"
                label="Comment"
                value={this.state.body}
                onChange={this.handleChange('body')}
                margin='normal'
                fullWidth
                multiline
                rows="4"
              />
            </Grid>
            <Grid item xs={12} style={{textAlign:'right'}}>
            <Button raised color="primary" aria-label="submit" type="submit">
                <span style={{marginRight:10,color:'#fff'}}>submit</span>
                  <Send classes={{root:classes.iconRoot}}/>
              </Button>
            </Grid>
          </Grid>
      </Paper>
        <Snackbar
          anchorOrigin={{ vertical:'top', horizontal:'center' }}
          open={this.state.sentOk}
          onClose={ () => this.setState({sentOk:false})}
          SnackbarContentProps={{
            'aria-describedby': 'newPost',
          }}
          onEntered={() => setTimeout(() => this.props.goTo('/'), 1000)}
          message={
            this.state.editMode ? 
              <span id="newPost">You edit this post with sucess</span>
            :
              <span id="newPost">You add a new post with sucess</span>
          }
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  activePost: state.activePost,
})
const mapDispatchToProps = (dispatch) => ({
  createPost: (data) => dispatch(addNewPost(data)),
  getPost: (postId) => dispatch(fetchPost(postId)),
  editPost: (post) => dispatch(putPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)( withStyles(styles)(Form) )
