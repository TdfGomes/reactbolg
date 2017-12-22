import React from 'react'
import PropTypes from 'prop-types'

//UI
import Grid from 'material-ui/Grid'
//components
import Post from './Post'

const Main = (props) => (
  <Grid style={{padding:'100px 25px'}} item xs={12} sm={8}>
    {
      ! props.category.category ? props.posts.map(post=>( <Post key={post.id} {...post}/> ))
        : props.posts.filter(p => p.category === props.category.category).map(post => (<Post key={post.id} isSingle={false} {...post} />) )
    }
  </Grid>
)


Main.propTypes = {
  posts: PropTypes.array.isRequired,
  category: PropTypes.object.isRequired
}

export default Main