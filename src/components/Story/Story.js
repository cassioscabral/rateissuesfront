import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Story.scss'
import {FormattedRelative} from 'react-intl'
import PreviewUrl from '../PreviewUrl'
import Upvote from '../Upvote'

function Story ({story, index}) {
  return (
    <li
      key={ index }
      className={ s.story }
    >
      <div className="upvote-wrapper">
        <Upvote
          upvotes={ story.upvotes }
          storyId={ story.id }
        />
      </div>

      <div className="story-content">
        <span className={ s.storyTitle }>
          <PreviewUrl url={ story.body }>
            { /* TODO extract URL from text */ }
          </PreviewUrl>

          { /* { story.body }*/ }
          <span className={ s.publishedDate }>
            <FormattedRelative value={ story.publishedDate } />
          </span>
        </span>
      </div>
    </li>
  )
}

export default withStyles(s)(Story)
