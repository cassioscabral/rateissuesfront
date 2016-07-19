import React, {Component} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl'
import s from './StoryInput.scss'
import su from '../../styles/utils.scss'
import cn from 'classnames'

const messages = defineMessages({
  storyInputPlaceholder: {
    id: 'storyinput.bodyStoryInput.placeholder',
    defaultMessage: 'Share with us...',
    description: 'placeholder displayed in storyinput input'
  },
  button:{
    id: 'storyinput.button',
    defaultMessage: 'Post',
    description: 'message displayed in storyinput button'
  }
})

class StoryInput extends Component {
  constructor (props) {
    super(props)
  }
  render (){
    return (
      <div className={ s.root } >
        <div className={ s.container } >
          <textarea
            rows="3"
            placeholder={ messages.storyInputPlaceholder.defaultMessage }
            className={ cn(su.noOutline, su.noResize) }
            ref="bodyStoryInput"
          />
          <button onClick={ () => {
              let bodyStoryInput = this.refs.bodyStoryInput
              if (bodyStoryInput.value !== '') {
                this.props.onClick(bodyStoryInput.value)
              }
              bodyStoryInput.value=''
            } } >
            <FormattedMessage { ...messages.button }  />
          </button>
        </div>
      </div>
    )
  }
}

export default injectIntl(withStyles(s, su)(StoryInput))
