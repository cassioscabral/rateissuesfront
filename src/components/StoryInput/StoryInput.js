import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl'
import s from './StoryInput.scss'

const messages = defineMessages({
  inputPlaceholder: {
    id: 'storyinput.input.placeholder',
    defaultMessage: 'Share with us...',
    description: 'placeholder displayed in storyinput input'
  },
  button:{
    id: 'storyinput.button',
    defaultMessage: 'Commit',
    description: 'message displayed in storyinput button'
  }
})

function StoryInput () {
  return (
    <div className={ s.root } >
      <div className={ s.container } >
        <input
          type="text"
          placeholder={ messages.inputPlaceholder.defaultMessage }
        />
        <button><FormattedMessage { ...messages.button }  /></button>
      </div>
    </div>
  )
}

export default injectIntl(withStyles(s)(StoryInput))
