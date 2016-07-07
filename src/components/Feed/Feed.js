/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Feed.scss'
import Story from '../Story'
import StoryInput from '../StoryInput'
import {connect} from 'react-redux'
import {addStory} from '../../actions/stories'

function Feed ({stories,addStory}) {
  return (
    <div className={ s.root }>
      <div className={ s.container }>
        <StoryInput onClick={ addStory } />
        <ul className={ s.stories }>
          { stories.map((item, index) => (
            <Story
              key={ index }
              story={ item }
            />
          )) }
        </ul>
      </div>
    </div>
  )
}

Feed.contextTypes = {setTitle: PropTypes.func.isRequired}

export default connect(state => ({
  stories: state.stories
}),{addStory})(withStyles(s)(Feed))
