import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl'
import s from './StoryInput.scss'
import su from '../../styles/utils.scss'
import {classes} from '../../core/utils.js'

const messages = defineMessages({
  inputPlaceholder: {
    id: 'storyinput.input.placeholder',
    defaultMessage: 'Share with us...',
    description: 'placeholder displayed in storyinput input'
  },
  button:{
    id: 'storyinput.button',
    defaultMessage: 'Post',
    description: 'message displayed in storyinput button'
  }
})

function StoryInput () {
  return (
    <div className={ s.root } >
      <div className={ s.container } >
        <textarea
          rows="3"
          placeholder={ messages.inputPlaceholder.defaultMessage }
          className={ classes(su.noOutline, su.noResize) }
        />
        <button><FormattedMessage { ...messages.button }  /></button>
      </div>
    </div>
  )
}

export default injectIntl(withStyles(s, su)(StoryInput))
