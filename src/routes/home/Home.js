import Feed from '../../components/Feed'
import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Home.scss'
import {connect} from 'react-redux'
import {loadStories} from '../../actions/stories'

const title = 'Rate Issues'

function Home ({stories,loadStories}, context) {
  context.setTitle(title)
  loadStories({stories: stories})
  return (
    <Feed />
  )
}

Home.contextTypes = {setTitle: PropTypes.func.isRequired}
Home.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })).isRequired
}

export default connect(() => ({

}), {
  loadStories
})(withStyles(s)(Home))
