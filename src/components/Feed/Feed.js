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
import {connect} from 'react-redux'

function Feed ({stories}) {
  return (
    <ul className={ s.stories }>
      { stories.map((item, index) => (
        <Story
          key={ index }
          story={ item }
        />
      )) }
    </ul>
  )
}

Feed.contextTypes = {setTitle: PropTypes.func.isRequired}

export default connect(state => ({
  stories: state.stories.stories
}))(withStyles(s)(Feed))
