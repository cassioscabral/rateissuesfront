import Feed from '../../components/Feed'
import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Home.scss'
import {connect} from 'react-redux'
import {loadStories} from '../../actions/stories'
import StoryInput from '../../components/StoryInput'
import {addStory} from '../../actions/stories'

const title = 'Rate Issues'

function Home ({stories,loadStories,addStory}, context) {
  context.setTitle(title)
  loadStories()
  return (
    <div className={ s.root }>
      <div className={ s.container }>
        <StoryInput onClick={ addStory } />
        <Feed />
      </div>
    </div>
  )
}

Home.contextTypes = {setTitle: PropTypes.func.isRequired}

export default connect(() => ({
}), {
  loadStories,
  addStory
})(withStyles(s)(Home))
