import React from 'react'
import PropTypes from 'prop-types'
//UI
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input'
import Search from 'material-ui-icons/Search'

const styles = (theme) => ({
  wrapper:{
    position:'relative',
    borderRadius:'2px',
    display:'inline-block',
    backgroundColor: theme.palette.primary['100']
  },
  icon:{
    width: 50,
    height: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    pointerEvents: 'none',
    justifyContent: 'center',
    zIndex:1
  },
  iconRoot:{
    color: theme.palette.grey['800']
  },
  texfield:{
    position: 'relative',
    display: 'inline-block'
  },
  inputRoot:{
    width: 200,
    paddingLeft: 50,
    paddingRight: 20,
    transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
    '&:after': {
      display: 'none'
    }
  },
  inputUnderline:{
    '&:before':{
      display:'none'
    }
  },
  inputFocused:{
    width: 300,
    backgroundColor:theme.palette.primary['50']
  }
})

const SearchBar = (props) => {
  const { classes } = props
  return(
    <div className={classes.wrapper}>
      <div className={classes.icon}>
        <Search classes={{root:classes.iconRoot}}/>
      </div>
      <div className={classes.texfield}>
        <Input
          margin='none'
          name='search'
          type='search'
          classes={{
            root:classes.inputRoot,
            underline:classes.inputUnderline,
            focused:classes.inputFocused
          }}
        />
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
}


export default withStyles(styles)(SearchBar);