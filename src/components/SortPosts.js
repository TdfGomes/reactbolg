import React, { Component } from 'react'
import PropTypes from 'prop-types'
//UI
import { withStyles } from 'material-ui/styles';
import Select from 'material-ui/Select'
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form';

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
    classes: PropTypes.object.isRequired
  }

  handleChange = (e) => {
    this.setState({sort:e.target.value})
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
          <MenuItem key="vote_ascending" value="Vote Ascending">Vote Ascending</MenuItem> 
          <MenuItem key="vote_descending" value="Vote Descending">Vote Descending</MenuItem> 
          <MenuItem key="recent" value="Recent">Recent</MenuItem> 
          <MenuItem key="oldest" value="Oldest">Oldest</MenuItem> 
        </Select>
      </FormControl>
    )
  }
}




export default withStyles(styles)(SortPosts);