import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Feed.scss'
import Story from '../Story'
import {connect} from 'react-redux'

const Feed = ({stories}) => (
  <ul className={ s.stories }>
    { stories.map((story, index) => (
      <Story
        key={ index }
        story={ story }
      />
    )) }
  </ul>
)

export default connect(state => ({
  stories: state.stories.stories
}))(withStyles(s)(Feed))
