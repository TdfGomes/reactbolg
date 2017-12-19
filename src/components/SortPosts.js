import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//ACTIONS
import { sortedPosts } from '../actions/postsAction'
//UI
import { withStyles } from 'material-ui/styles'
import Select from 'material-ui/Select'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'

const styles = (theme) => ({
  fromControlRoot: {
    width: '100%',
    marginBottom: 10
  }
})

class SortPosts extends Component {
  constructor(props){
    super(props)

    this.state = {
      sort:''
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    getPostsSorted: PropTypes.func.isRequired
  }

  handleChange = (e) => {
    this.setState({sort:e.target.value})

    this.props.getPostsSorted(e.target.value)
  }

  render(){
    const { classes } = this.props
    return(
      <FormControl classes={{ root: classes.fromControlRoot }}>
        <InputLabel htmlFor="sort"></InputLabel>
        <Select
          value={this.state.sort}
          onChange={this.handleChange}
          input={<Input id="sort" />}
          native={false}
          displayEmpty
          multiple={false}
        >
          <MenuItem key="voteAsc" value="voteAsc">Vote Ascending</MenuItem> 
          <MenuItem key="voteDesc" value="voteDesc">Vote Descending</MenuItem> 
          <MenuItem key="recent" value="recent">Recent</MenuItem> 
          <MenuItem key="oldest" value="oldest">Oldest</MenuItem> 
        </Select>
      </FormControl>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPostsSorted: (sortVal) => dispatch(sortedPosts(sortVal)),
})

export default connect(null,mapDispatchToProps)(withStyles(styles)(SortPosts))