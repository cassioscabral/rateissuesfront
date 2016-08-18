/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Story.scss'
import {FormattedRelative} from 'react-intl'
import PreviewUrl from '../PreviewUrl'
import Ranking from '../Ranking'

function Story ({story, index}) {
  return (
    <li
      key={ index }
      className={ s.story }
    >
      <span className={ s.storyTitle }>
        <PreviewUrl url={ story.body }>
          { /* TODO extract URL from text */ }
        </PreviewUrl>
        <Ranking
          rankings={ story.rankings }
          storyId={ story.id }
        />
        { /* { story.body }*/ }
        <span className={ s.publishedDate }>
          <FormattedRelative value={ story.publishedDate } />
        </span>
      </span>
    </li>
  )
}

export default withStyles(s)(Story)
