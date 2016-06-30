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
import s from './Home.scss'
import Story from '../../components/Story'
import StoryInput from '../../components/StoryInput'

const title = 'React Starter Kit'

function Home ({news}, context) {
  context.setTitle(title)
  return (
    <div className={ s.root }>
      <div className={ s.container }>
        <StoryInput />
        <ul className={ s.news }>
          { news.map((item, index) => (
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

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string
  })).isRequired
}
Home.contextTypes = {setTitle: PropTypes.func.isRequired}

export default withStyles(s)(Home)
